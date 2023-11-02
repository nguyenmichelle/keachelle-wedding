<template>
  <Section id="accommodations" background-color="var(--base-color)" title="">
    <v-row class="justify-center align-center">
      <v-col cols="8" class="text-center">
        <h1>Flights</h1>
        <br>
        <p><b>CANCUN INTERNATIONAL AIRPORT (CUN)</b>
          <br>NON-STOP FLIGHTS TO CUN FROM SLC FOR AUG 20, 2024 - AUG 23, 2024 AVERAGE AROUND $690-$700.<br><br>*NOTE: This is an international flight to another country. You <b>must have a valid passport that does not expire within 6 months</b> of the date of travel!</p><br>

        <v-btn :elevation="0"
               href="https://www.google.com/travel/flights/search?tfs=CBwQAhojEgoyMDI0LTA4LTIwagwIAhIIL20vMGYycjZyBwgBEgNDVU4aIxIKMjAyNC0wOC0yM2oHCAESA0NVTnIMCAISCC9tLzBmMnI2QAFIAXABggELCP___________wGYAQE&tfu=KgA"
               target="_blank">
          Look For Flights
        </v-btn>
        <br><br><br>
      </v-col>
      <v-col cols="8">
        <v-divider></v-divider>
      </v-col>
      <v-col cols="8" class="text-center">
        <br>
        <h1>Hotel</h1>
        <br>
        <p><b>ROYALTON RIVIERA CANCUN</b>
          <br>WE HAVE RESERVED A BLOCK OF ROOMS FOR OUR GUESTS AT THE ROYALTON FROM AUG 20, 2024 - AUG 23, 2024. THE
          ROYALTON IS AN ALL-INCLUSIVE RESORT A THREE MINUTE WALK AWAY FROM THE WEDDING EVENT VENUE. FEEL FREE TO EXTEND
          YOUR STAY PAST THOSE DATES AND TO UPGRADE YOUR ROOM TYPE TO WHATEVER ACCOMMODATES YOUR NEEDS.<br><br>PLEASE BE
          SURE TO INCLUDE THE AMOUNT OF PEOPLE YOU WILL HAVE IN A ROOM IN YOUR SEARCH. ROOM PRICES WILL ADJUST ACCORDING
          TO ROOM OCCUPANCY.</p><br>

        <v-btn :elevation="0"
               href="https://be.synxis.com/?adult=1&arrive=2024-08-20&chain=26025&child=0&config=royalton&depart=2024-08-23&dest=MEX&level=chain&locale=en-US&promo=GZ434G&rooms=1&theme=Group"
               target="_blank">
          Book a Room
        </v-btn>
        <v-btn :elevation="0" to="/resort">
          More Details
        </v-btn>
        <br><br><br>
      </v-col>
      <v-col cols="8">
        <v-divider></v-divider>
      </v-col>
      <v-col cols="8" class="text-center">
        <br>
        <h1>Transportation</h1>
        <br>
        <p><b>SHUTTLES</b>
          <br>We recommend reserving a shuttle ahead of time to transport you from the airport to the resort. Ubers and
          other rideshares are strictly prohibited at Mexican airports and resorts and will not be available to provide
          transportation. There are many shuttle companies available in Cancún.<br><br> We have received discounted group rates
          from the Bon Voyage shuttle company if you are interested in booking with them.</p><br>

        <v-btn :elevation="0"
               href="https://bookings.bonvoyagedmc.com/reservation/ae7979c2-2a10-4ef0-a687-209d412c4f51"
               target="_blank">
          Rent a Ride
        </v-btn>

      </v-col>
    </v-row>
  </Section>
</template>
