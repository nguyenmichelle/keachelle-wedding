<template>
  <Section id="rsvp" background-color="var(--base-brown)" white-text="true" title="KINDLY RESPOND">
    <v-row>
      <v-col cols="12" class="text-center">
        <p>Please RSVP by April 20, 2024</p><br>
      </v-col>
      <v-col cols="12" class=" d-flex justify-center align-center">
        <v-sheet class="sheet" rounded ref="rsvpSheet">
          <div v-if="page < 3">
            <div v-if="!showEvents">
              <div>
                Please enter the first and last name of one member of your party below.
                If you're responding for you and a guest (or your family), you'll be able to RSVP for your entire group
                on
                the next page.<br><br>
                <v-text-field v-model="query"
                              label="First and last name"
                              @keyup.enter="searchRecords"
                ></v-text-field>
                <v-btn outlined @click="searchRecords" block class="mt-2" :loading="loading">Continue</v-btn>
              </div>
              <div v-if="searchResultsLength > 0">
                <br>
                <p>Select your info below or try searching again.</p>
                <br>
                <v-row class="result-group d-flex align-center" v-for="(result, index) in searchResults"
                       :key="'group_'+index">
                  <v-col cols="9">
                    <div v-for="person in result" :key="person.id">
                      <span>{{ person.full_name }}</span>
                    </div>
                  </v-col>
                  <v-col @click="updateEvents(result[0].id)" cols="3" class="d-flex align-center justify-end">
                    <v-btn :elevation="0">SELECT</v-btn>
                  </v-col>
                </v-row>
                <br>
                <span>If none of these are you, please reach out to Keaton or Michelle to see exactly how they entered your details.</span>
              </div>
            </div>
            <div v-else>
              <r-s-v-p-events-and-responses :page="page" :current-rsvp-group="currentRsvpGroup"
                                            :showOptions="firstTimeResponding"
                                            ref="rsvpMiddle"></r-s-v-p-events-and-responses>
              <br>
              <v-row class="d-flex text-center justify-center">
                <v-col cols="6" v-if="page == 2">
                  <v-btn @click="page--" :loading="loading" :elevation="0" class="btn-width">Back</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn @click="nextPage" :loading="loading" :elevation="0" :disabled="!nextPageAvailable"
                         v-html="page == 1? 'Next':'Submit'" class="btn-width"></v-btn>
                </v-col>
              </v-row>
            </div>
          </div>
          <div v-else>
            <v-row class="d-flex text-center justify-center mb-2">
              <h2>Thank You For Your RSVP!</h2>
            </v-row>
            <div>
              <v-row class="d-flex justify-center">
              <v-sheet rounded :style="'border: 1px solid lightgrey; padding: 10px;'">
                <v-row class="d-flex text-center justify-center mt-3">
                  Want a copy of your responses and event info?<br><br></v-row>
                <v-row class="d-flex text-center align-baseline justify-center">
                  <v-col cols="6">
                    <v-text-field v-model="currentRsvpGroup[0].email"
                                  label="Email Address"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4" class="ml-5">
                    <v-btn outlined block class="mt-2" @click="sendEmail" :loading="emailLoading" v-html="emailSent? 'Sent!' : 'Send' " :disabled="emailSent"></v-btn>
                  </v-col>
                </v-row>
              </v-sheet>
              </v-row>
              <r-s-v-p-events-and-responses :page="page" :current-rsvp-group="currentRsvpGroup" ref="rsvpBottom"
                                            :showOptions="false"></r-s-v-p-events-and-responses>
            </div>
            <v-row class="d-flex text-center justify-center mt-10">
              <v-btn class="w-25" @:loading="loading" :elevation="0" @click="editRsvp"
                     v-html="'Edit RSVP'"></v-btn>
            </v-row>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </Section>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      query: '', // User's search query
      searchResults: {}, // Array to store matching records
      loading: false,
      showEvents: false,
      page: 1,
      currentRsvpGroup: [],
      firstTimeResponding: true,
      emailLoading: false,
      emailSent: false
    }
  },
  computed:
    {
      searchResultsLength () {
        return Object.keys(this.searchResults).length
      },
      nextPageAvailable () {
        if (this.page == 3)
          return false
        let currentlyRsvpingLength = this.currentRsvpGroup.length
        let page = this.page
        return this.currentRsvpGroup.filter(function(obj) {
          if (page == 1) {
            return obj.attending_welcome_party != null
          }
          if (page == 2) {
            return obj.attending_wedding != null
          }
        }).length == currentlyRsvpingLength
      }
    },
  methods: {
    async searchRecords () {
      this.loading = true
      try {
        const response = await axios.get('/.netlify/functions/searchInvitee', {
          params: {
            query: this.query, // Replace with your value
          },
        })
        this.searchResults = this.organizeResultsIntoGroups(response.data)
        this.loading = false
      } catch (error) {
        console.error('Error calling server method:', error)
      }
    },
    organizeResultsIntoGroups (results) {
      const groups = []
      let currentGroup = []

      for (const result of results) {
        if (result.address_line_1 !== null) {
          // Start a new group when an address is not null
          if (currentGroup.length > 0) {
            groups.push(currentGroup)
          }
          currentGroup = [result]
        } else {
          currentGroup.push(result)
        }
      }

      // Push the last group
      if (currentGroup.length > 0) {
        groups.push(currentGroup)
      }
      return groups
    },
    async updateEvents (id) {
      this.loading = true
      try {
        const response = await axios.get('/.netlify/functions/getFamilyMemberNames', {
          params: {
            query: id, // Replace with your value
          },
        })
        this.currentRsvpGroup = response.data
        if (this.currentRsvpGroup[0].attending_wedding != null) {
          this.firstTimeResponding = false
          this.page = 3
        }
        this.showEvents = true
        this.loading = false
      } catch (error) {
        console.error('Error calling server method:', error)
      }
    },
    async nextPage () {
      this.page++;

      if (this.page == 3)
        this.submitRsvp()
    },
    async submitRsvp () {
      this.loading = true
      try {
        const response = await axios.get('/.netlify/functions/submitRsvp', {
          params: this.currentRsvpGroup,
        })
        this.loading = false
      } catch (error) {
        console.error('Error calling server method:', error)
      }
    },
    editRsvp () {
      this.emailSent = false
      this.page = 1
      this.firstTimeResponding = true

      // TODO: enable the scroll back to top of the rsvp form
      this.$nextTick(() => {
        const rsvpSheet = this.$refs.rsvpSheet

        // Scroll to the top of the element
        if (rsvpSheet != undefined) {
          this.$router.push('/#rsvp')
        }
      })
    },
    async sendEmail() {
      this.emailLoading = true

      const data = JSON.stringify({
        attending1: this.currentRsvpGroup.filter(person => person.attending_welcome_party == 1),
        notAttending1: this.currentRsvpGroup.filter(person => person.attending_welcome_party == 0),
        attending2: this.currentRsvpGroup.filter(person => person.attending_wedding == 1),
        notAttending2: this.currentRsvpGroup.filter(person => person.attending_wedding == 0),
        email: this.currentRsvpGroup[0].email
      })

      try {
        const response = await axios.post('/.netlify/functions/sendMail', data, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        this.emailSent = true
        this.emailLoading = false
      } catch (error) {
        console.error('Error calling server method:', error)
      }
    }
  }
}
</script>

<style>
.sheet {
  width: 80%;
  padding: 40px;
}

.result-group {
  border-bottom: 1px darkgrey solid;
  margin: 10px 0px;
  padding: 10px 0px;
}

.btn-width {
  width: 80%;
}
</style>
