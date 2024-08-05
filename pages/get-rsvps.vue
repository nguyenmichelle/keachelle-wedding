<template>
  <v-container>
    <v-card>
      <v-card-title>RSVPs</v-card-title>
      <v-card-text>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="exportData">Export All Data</v-btn>
        </v-toolbar>
        <v-spacer></v-spacer>
        <v-toolbar flat>
          <v-subheader class="rsvp-statistic" @click="results = originalResults"><b>Total Count:</b> {{ totalCount }}</v-subheader>
          <v-subheader class="rsvp-statistic" @click="results = originalResults.filter(item => item.attending_wedding == false)"><b>Not Attending:</b> {{ originalResults.filter(item => item.attending_wedding == false).length }}</v-subheader>
          <v-subheader class="rsvp-statistic" @click="results = originalResults.filter(item => item.attending_welcome_party)"><b>Attending Welcome Party:</b> {{ originalResults.filter(item => item.attending_welcome_party).length }}</v-subheader>
          <v-subheader class="rsvp-statistic" @click="results = originalResults.filter(item => item.attending_wedding)"><b>Attending Wedding:</b> {{ originalResults.filter(item => item.attending_welcome_party).length }}</v-subheader>
          <v-subheader class="rsvp-statistic" @click="results = originalResults.filter(item => item.attending_welcome_party == null)"><b>Hasn't responded:</b> {{ originalResults.filter(item => item.attending_welcome_party == null).length }}</v-subheader>
        </v-toolbar>
        <v-toolbar flat>
          <v-subheader class="rsvp-statistic" @click="results = originalResults.filter(item => item.meal_preference == 'Beef')"><b>Beef:</b> {{ originalResults.filter(item => item.meal_preference == 'Beef').length }}</v-subheader>
          <v-subheader class="rsvp-statistic" @click="results = originalResults.filter(item => item.meal_preference == 'Chicken')"><b>Chicken:</b> {{ originalResults.filter(item => item.meal_preference == 'Chicken').length }}</v-subheader>
          <v-subheader class="rsvp-statistic" @click="results = originalResults.filter(item => item.meal_preference == 'Vegan')"><b>Vegan:</b> {{ originalResults.filter(item => item.meal_preference == 'Vegan').length }}</v-subheader>
          <v-subheader class="rsvp-statistic" @click="results = originalResults.filter(item => item.meal_preference == 'Kid')"><b>Kids Meal:</b> {{ originalResults.filter(item => item.meal_preference == 'Kid').length }}</v-subheader>
          <v-subheader class="rsvp-statistic" @click="results = originalResults.filter(item => item.meal_preference == 'None (Infant)')"><b>None/Infant:</b> {{ originalResults.filter(item => item.meal_preference == 'None (Infant)').length }}</v-subheader>
          <v-subheader class="rsvp-statistic" @click="results = originalResults.filter(item => item.meal_preference == null & item.attending_wedding)"><b>Hasn't Set Meal Preference:</b> {{ originalResults.filter(item => item.meal_preference == null && item.attending_wedding).length }}</v-subheader>
        </v-toolbar>
        <v-toolbar flat>
          <v-text-field v-model="search" label="Search" hide-details></v-text-field>
        </v-toolbar>
        <v-data-table
          :headers="headers"
          :items="results"
          :search="search"
          group-by="group_id"
          :show-group-by="false"
          hide-default-header
          hide-default-footer
          disable-pagination
        >
          <template v-slot:header="{ props }">
            <thead>
            <tr>
              <th v-for="header in props.headers" :key="header.text">
                {{ header.text }}
              </th>
            </tr>
            </thead>
          </template>
          <template v-slot:item="{ item }">
            <tr>
              <td v-for="(header, index) in headers" :key="index" v-if="header.value != 'group_id'">
                <span v-if="(header.value=='attending_welcome_party' || header.value == 'attending_wedding') && item[header.value] == true">
                  <v-icon
                    class="icon-group check">mdi-check-circle-outline</v-icon>
                </span>
                <span v-if="(header.value=='attending_welcome_party' || header.value == 'attending_wedding') && item[header.value] == false">
                  <v-icon
                    class="icon-group close">mdi-close-circle-outline</v-icon>
                </span>
                <span v-if="header.value=='full_name' || header.value=='meal_preference'" >
                  {{ item[header.value] }}
                </span>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  import axios from 'axios'
  import * as XLSX from 'xlsx';

  export default {
    data() {
      return {
        search: '',
        originalResults: [],
        results: [],
        headers: [
          { text: 'Group', value: 'group_id' },{text:'Name', value:'full_name'}, {text: 'Attending Welcome Party', value: 'attending_welcome_party'}, {text: 'Attending Wedding', value: 'attending_wedding'}, {text: 'Meal Preference', value: 'meal_preference'}]
      }
    },
    methods: {
      async exportData() {
        const exportData = this.originalResults.map(item => ({
          Group: item.group_id,
          Name: item.full_name,
          'Attending Welcome Party': item.attending_welcome_party ? 'Yes' : item.attending_welcome_party == null? 'Not Set' : 'No',
          'Attending Wedding': item.attending_wedding ? 'Yes' : item.attending_wedding == null? 'Not Set' : 'No',
          'Meal Preference': item.meal_preference || 'Not Set',
          'Email Address': item.email
        })).sort((a, b) => {
          if (a.Group < b.Group) {
            return -1;
          }
          if (a.Group > b.Group) {
            return 1;
          }
          return 0;
        });

        const hasntResponded = this.originalResults.filter(x => x.attending_wedding == null).map(item => ({
          Group: item.group_id,
          Name: item.full_name,
          'Attending Welcome Party': item.attending_welcome_party ? 'Yes' : item.attending_welcome_party == null? 'Not Set' : 'No',
          'Attending Wedding': item.attending_wedding ? 'Yes' : item.attending_wedding == null? 'Not Set' : 'No',
          'Email Address': item.email
        })).sort((a, b) => {
          if (a.Group < b.Group) {
            return -1;
          }
          if (a.Group > b.Group) {
            return 1;
          }
          return 0;
        });


        const worksheet = XLSX.utils.json_to_sheet(exportData);
        const workbook = XLSX.utils.book_new();

        const hasntRespondedSheet = XLSX.utils.json_to_sheet(hasntResponded);

        XLSX.utils.book_append_sheet(workbook, worksheet, 'RSVPs');
        XLSX.utils.book_append_sheet(workbook, hasntRespondedSheet, 'Has Not Responded');
        XLSX.writeFile(workbook, `Michelle Keaton RSVPs ${new Date().toISOString()}.xlsx`);
      }
    },
    computed: {
      totalCount() {
        return this.originalResults.length
      }
    },
    async mounted () {
      this.loading = true
      try {
        const response = await axios.get('/.netlify/functions/getRsvps')
        this.originalResults = response.data.map(item => ({ ...item, group_id: item.parent_id? item.parent_id : item.id }));
        this.results = this.originalResults
        this.loading = false
      } catch (error) {
        console.error('Error calling server method:', error)
      }
    }
  }
</script>

<style>
  .rsvp-statistic:hover {
    cursor: pointer;
  }
</style>
