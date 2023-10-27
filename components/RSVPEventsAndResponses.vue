<template>
  <div>
    <v-row class="d-flex text-center justify-center" v-if="!showOptions"><h3 class="mt-10">Your RSVP Responses</h3>
    </v-row>
    <div v-for="page in pages" :key="'page_'+page">
      <div class="event_info" ref="eventInfo">
        <v-row class="d-flex text-center justify-center" v-if="showOptions">
          <p>{{ page }} of {{ Object.keys(events).length }} events</p>
        </v-row>
        <br>
        <v-row class="d-flex text-center justify-center">
          <h2 v-html="events[page].title"></h2>
        </v-row>
        <br>
        <v-row class="d-flex text-center justify-center">
          <p v-html="events[page].time"></p>
        </v-row>
        <br>
        <v-row class="d-flex text-center justify-center">
          <p v-html="events[page].place"></p>
        </v-row>
        <br>
        <v-row class="d-flex text-center justify-center">
          <p v-html="'Attire: ' + events[page].attire"></p>
        </v-row>
        <br><br>
      </div>
      <v-row class="result-group d-flex align-center" v-for="rsvpPerson in currentRsvpGroup" :key="rsvpPerson.id">
        <v-col cols="7" v-html="showOptions? rsvpPerson.full_name + '*' : rsvpPerson.full_name"></v-col>
        <v-col v-if="page==1" cols="5" class="d-flex align-center justify-end">
          <v-radio-group v-if="showOptions" row v-model="rsvpPerson.attending_welcome_party">
            <v-radio label="Will Attend" :value="1"></v-radio>
            <v-radio label="Will Not Attend" :value="0"></v-radio>
          </v-radio-group>
          <div v-else>
              <span v-if="rsvpPerson.attending_welcome_party == 1"><v-col class="d-flex align-center"><v-icon
                class="icon-group check">mdi-check-circle-outline</v-icon>Will Attend</v-col></span>
            <span v-else><v-col class="d-flex align-center"><v-icon
              class="icon-group close">mdi-close-circle-outline</v-icon>Will Not Attend</v-col></span>
          </div>
        </v-col>
        <v-col v-else cols="5" class="d-flex align-center justify-end">
          <v-radio-group v-if="showOptions" row v-model="rsvpPerson.attending_wedding">
            <v-radio label="Will Attend" :value="1"></v-radio>
            <v-radio label="Will Not Attend" :value="0"></v-radio>
          </v-radio-group>
          <div v-else>
              <span v-if="rsvpPerson.attending_wedding == 1"><v-col class="d-flex align-center"><v-icon
                class="icon-group check">mdi-check-circle-outline</v-icon>Will Attend</v-col></span>
            <span v-else><v-col class="d-flex align-center"><v-icon
              class="icon-group close">mdi-close-circle-outline</v-icon>Will Not Attend</v-col></span>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ['currentRsvpGroup', 'page', 'showOptions', 'calledFrom'],
  data () {
    return {
      events: {
        1: {
          title: 'Welcome Party',
          time: 'Wednesday, August 21, 2024<br> 6:00 PM - 7:00 PM',
          place: 'Royalton Riviera Cancun<br>' +
            'Km 332 Calle Manzana 102 Lote 15, Cancún, Q.R. 77500, Mexico',
          attire: 'Casual Cocktail'
        }, 2: {
          title: 'Church Ceremony + <br>Wedding Reception',
          time: 'Ceremony: 5:00 PM - 6:00 PM<br>Cocktail Hour: 6:00 PM - 7:00 PM<br>Reception 7:00 PM - 1:00 AM',
          place: 'Jardín del Mar<br>Carretera Federal 307 Cancun-Playa del Carmen Km 332,15, SM31, MZ 03, Cancún, Mexico',
          attire: 'Cocktail formal attire<br>The theme is <b>floral paradise</b>'
        }
      }
    }
  },
  computed: {
    pages () {
      return !this.showOptions ? [1, 2] : (this.page == 1) ? [1] : [2]
    }
  }
}
</script>

<style>
.event_info {
  border-bottom: 1px darkgrey solid;
}

.icon-group {
  margin-right: 5px;
}

.icon-group.close {
  color: rgb(178, 0, 51);
}

.icon-group.check {
  color: rgb(21, 132, 93);
}
</style>
