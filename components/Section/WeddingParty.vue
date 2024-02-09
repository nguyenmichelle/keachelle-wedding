<template>
  <Section id="wedding-party" background-color="var(--base-green)" title="WEDDING PARTY" white-text="true">
    <v-row>
      <v-col cols="12" class="text-center">
        <v-slide-group
          class="pa-4"
          selected-class="bg-success"
          show-arrows
        >
          <v-slide-group-item
            v-for="(person, index) in bridalParty"
            :key="n"
            class="pa-2"
          >
            <v-card color="transparent" elevation="0"
            >
            <v-avatar
              size="80"
            >
              <img :src=person.picLink alt="avatar">
            </v-avatar>
              <v-card-text>
                <h3>{{ person.name }}</h3>
                {{ person.title}}<br>
                {{ person.relation}}
              </v-card-text>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-slide-group
          class="pa-4"
          selected-class="bg-success"
          show-arrows
        >
          <v-slide-group-item
            v-for="(person, index) in groomsmanParty"
            :key="n"
            class="pa-2"
          >
            <v-card  color="transparent" elevation="0"
            >
              <v-avatar
                size="80"
              >
                <img :src=person.picLink alt="avatar">
              </v-avatar>
              <v-card-text>
                <h3>{{ person.name }}</h3>
                {{ person.title}}<br>
                {{ person.relation}}
              </v-card-text>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </Section>
</template>

<script>
export default {
  name: 'WeddingParty',
  data() {
    return {
      bridalParty: [{name: 'Julie Nguyen', title: 'Matron of Honor', relation: 'Sister', picLink: 'https://i.ibb.co/6Wfz2QM/IMG-8414-2.jpg'},
        {name: 'Le Vu-Diaz', title: 'Matron of Honor', relation: 'Friend', picLink: 'https://i.ibb.co/2ZfmRsw/IMG-0948.jpg'},
        {name: 'Alyssa Tratos', title: 'Bridesmaid', relation: 'Friend', picLink: 'https://i.ibb.co/rwRprLk/48434ac1-27b1-493e-a63b-ddca9fcec726.jpg'},
        {name: 'Aubrey Lin', title: 'Bridesmaid', relation: 'Friend', picLink: 'https://i.ibb.co/vD5C2vs/e2aafcb7-0a30-4a1a-8eed-045a7f8d77ed.jpg'},
        {name: 'Autum Stubbs', title: 'Bridesmaid', relation: 'Friend', picLink: 'https://i.ibb.co/WpLcymb/IMG-8420-2.jpg'},
        {name: 'Mylan Chau', title: 'Bridesmaid', relation: 'Friend', picLink: 'https://i.ibb.co/JnYgDDL/IMG-8419-2.jpg'},
        {name: 'Prachi Karna', title: 'Bridesmaid', relation: 'Friend', picLink: 'https://i.ibb.co/9vrgSM6/IMG-8424.jpg'}],
      groomsmanParty: [{name: 'Cade Critchlow', title: 'Best Man', relation: 'Brother', picLink: 'https://i.ibb.co/gwN7fWR/IMG-2622.jpg'},
        {name: 'Kip Critchlow', title: 'Groomsman', relation: 'Brother', picLink: 'https://i.ibb.co/RB5j81z/IMG-8427.jpg'},
        {name: 'Brian Van Trease', title: 'Groomsman', relation: 'Friend', picLink: 'https://i.ibb.co/ZfLJpTy/IMG-8443-2.jpg'},
        {name: 'Justice Brown', title: 'Groomsman', relation: 'Friend', picLink: 'https://i.ibb.co/NxXgz3r/IMG-8430.jpg'},
        {name: 'Luc Russell', title: 'Groomsman', relation: 'Friend', picLink: 'https://i.ibb.co/jgYy84y/IMG-8428.jpg'},
        {name: 'Scott Nguyen', title: 'Groomsman', relation: 'Brother-in-law', picLink: 'https://i.ibb.co/qsJvtMk/2a50b08a-46f8-45f0-9b8d-a7a3dea226d3.jpg'},
        {name: 'Travis Mitchell', title: 'Groomsman', relation: 'Friend', picLink: 'https://i.ibb.co/hF5zBXG/1fb162bd-bddf-4009-a5bb-77e03324b4e0.jpg'}]
    }
  }
}
</script>

<style>
.v-slide-group__content {
  justify-content: center;
}
</style>
