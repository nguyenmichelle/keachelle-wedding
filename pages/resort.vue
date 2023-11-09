<template>
  <v-container fluid>
    <Section title="ROYALTON RIVIERA CANCÚN" :has-padding="false">
      <v-row align="center" justify="center">
        <v-col cols="6" class=" d-flex justify-center align-center ">
          <v-img class="resort-img" max-height="400"
                 src="https://marriott.cdn.tambourine.com/royalton-resorts/media/637680208254749357-1-6230ee41ba402.jpg"></v-img>
        </v-col>
        <v-col cols="6" class=" d-flex justify-center align-center ">
          <v-img class="resort-img" max-height="400"
                 src="https://marriott.cdn.tambourine.com/royalton-resorts/media/royalton_riviera_cancun-2-6255b75bad951-optimized.jpg"></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          Resort Official Website: <a href="https://www.royaltonresorts.com/resorts/riviera-cancun/" target="_blank">Royalton
          Riviera
          Cancún</a>
          <br>Booking Site (Group Rates): <a
          href="https://be.synxis.com/?Chain=26025&Dest=MEX&config=royalton&theme=Group&arrive=2024-08-20&depart=2024-08-23&adult=1&child=0&promo=GZ434G"
          target="_blank">Book your room here</a>
        </v-col>
      </v-row>
    </Section>
    <Section title="Group Rates" background-color="var(--base-brown)" :has-padding="false" :white-text="true">
      <v-row align="center" justify="center">
        <v-col cols="8" class="text-center">
          <span>We have locked these room rates for our guests. Please use the provided link to book your room. We <b>highly</b> recommend getting a room in the Diamond Club (DC) if possible. The DC will elevate your stay and includes: butler service, exclusive á la carte dining options + exclusive air-conditioned DC areas in restaurants, a stylish private lounge, private bars, a sparkling pool, a secluded beach area, and more.<br><br>*Note: Base rates are per person, per night, per room. Add-ons are per additional person per night per room depending on how many people are staying in a room.</span>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="9" class="text-center">
          <v-simple-table :mobile-breakpoint="0">
            <template v-slot:default>
              <thead>
              <tr>
                <th></th>
                <th class="text-center border-left border-right" colspan="2">Base Rates</th>
                <th class="text-center" colspan="6">Add-Ons</th>
              </tr>
              </thead>
              <thead>
              <tr>
                <th class="text-left">
                  Room type
                </th>
                <th class="text-left border-left">
                  1 guest
                </th>
                <th class="text-left border-right">
                  2 guests
                </th>
                <th class="text-left">
                  3/4 guests
                </th>
                <th class="text-left">
                  First child (2-12 years)
                </th>
                <th class="text-left">
                  Second child (2-12 years)
                </th>
                <th class="text-left">
                  First teen (13-17 years)
                </th>
                <th class="text-left">
                  Second teen (13-17 years)
                </th>
                <th class="text-left">
                  Infants (0-23 months)
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                v-for="item in rooms"
                :key="item.roomType"
              >
                <td class="text-left" v-html="item.roomType"></td>
                <td class="text-left border-left">{{ item.singlePrice }}</td>
                <td class="text-left border-right">{{ item.dblPrice }}</td>
                <td class="text-left">{{ item.tripleQuadPrice }}</td>
                <td class="text-left" v-html="item.firstChildPrice"></td>
                <td class="text-left">{{ item.secondChildPrice }}</td>
                <td class="text-left" v-html="item.firstTeenPrice"></td>
                <td class="text-left">{{ item.secondTeenPrice }}</td>
                <td class="text-left"><b>FREE</b></td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="9">
          <span>*These prices include taxes.<br><br><b>*How to read the chart</b>: Say Amy is staying in the <i>Luxury Suite with Terrace
          Jacuzzi</i> with
          2 other people (totaling 3 people occupancy) for 3 nights.
          First, the base price of 2 x $157.25 is calculated. Then she adds one more person for an additional $117.94 a night. $432.44 nightly (3 people) x 3 nights = $1297.32 total for the room of this type for 3 people.</span>
        </v-col>
      </v-row>
    </Section>
    <Section id="amenities" title="All-Inclusive Amenities" background-color="var(--base-green)" :has-padding="false">
      <v-row align="center" justify="center">
        <v-col cols="9">
          <h3>What's included in all-inclusive:</h3>
          <span>
          <ul>
            <li>Luxurious accommodations with exclusive DreamBed</li>
            <li>Daily breakfast, lunch, and dinner at hotel restaurants during regular operational hours</li>
            <li>Unlimited international and local liquors by the glass at hotel restaurants and bars during regular
              operational hours
            </li>
            <li>No reservations required at hotel restaurants</li>
            <li>In-room minibar</li>
            <li>Room service</li>
            <li>Swimming pool and Beach</li>
            <li>Free wi-Fi throughout the hotel</li>
            <li>Complimentary access to the fitness center</li>
            <li>Daily activities for all guests</li>
            <li>Nightly entertainment</li>
            <li>Complimentary self and valet parking</li>
            <li>Non-motorized water sports</li>
            <li>No resort fee</li>
            <li>Taxes & gratuities</li>
          </ul>
            </span>
        </v-col>
        <br>
        <v-col cols="9" style="margin-top: 20px;">
          <h3>Not included:</h3>
          <span>
          Spa services, laundry, phone calls, business center (printing services/photocopies), group events, coffee
          breaks, premium wine brands, medical services, purchases at hotel concessions (gift shop, tour desk, car
          rental, etc.), room deliveries, audiovisual, lighting, music, teambuilding activities, theme parties, room
          deliveries, any items not included in the contract.</span>
        </v-col>
        <v-col cols="9" style="margin-top: 20px;">
          <h3>Special concessions:</h3>
          <span>
          <ul>
            <li>Welcome drink upon arrival</li>
            <li>Private check in if at least 10 rooms arrive together</li>
            <li>20% discount at the spa (This discount is not combinable with any other spa offer. Does not apply for
              spa packages and beauty salon services). The bookings for the spa may be done before the group arrival or
              upon arrival.
            </li>
          </ul>
            </span>
        </v-col>
      </v-row>
    </Section>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      rooms: [
        {
          roomType: 'Luxury Junior Suite',
          singlePrice: '$223.13',
          dblPrice: '$148.75',
          tripleQuadPrice: '$111.56',
          firstChildPrice: '$74.38',
          secondChildPrice: '$74.38',
          firstTeenPrice: '$74.38',
          secondTeenPrice: '$111.56'
        },
        {
          roomType: 'Luxury Junior Suite Ocean View',
          singlePrice: '$250.22',
          dblPrice: '$166.81',
          tripleQuadPrice: '$125.11',
          firstChildPrice: '$83.41',
          secondChildPrice: '$83.41',
          firstTeenPrice: '$83.41',
          secondTeenPrice: '$125.11'
        },
        {
          roomType: 'Luxury Junior Suite Swim Out',
          singlePrice: '$261.38',
          dblPrice: '$174.25',
          tripleQuadPrice: '$130.69',
          firstChildPrice: '$87.13',
          secondChildPrice: '$87.13',
          firstTeenPrice: '$87.13',
          secondTeenPrice: '$130.69'
        },
        {
          roomType: 'Luxury Suite with Terrace Jacuzzi',
          singlePrice: '$235.88',
          dblPrice: '$157.25',
          tripleQuadPrice: '$117.94',
          firstChildPrice: '$78.63',
          secondChildPrice: '$78.63',
          firstTeenPrice: '$78.63',
          secondTeenPrice: '$117.94'
        },
        {
          roomType: 'Luxury Suite Ocean View with Terrace Jacuzzi',
          singlePrice: '$255.00',
          dblPrice: '$170.00',
          tripleQuadPrice: '$127.50',
          firstChildPrice: '$85.00',
          secondChildPrice: '$85.00',
          firstTeenPrice: '$85.00',
          secondTeenPrice: '$127.50'
        },
        {
          roomType: 'Luxury Family Suite Ocean View',
          singlePrice: '$374.00',
          dblPrice: '$187.00',
          tripleQuadPrice: '$140.25',
          firstChildPrice: '<b>FREE</b>',
          secondChildPrice: '$93.50',
          firstTeenPrice: '<b>FREE</b>',
          secondTeenPrice: '$140.25'
        },
        {
          roomType: 'Luxury Presidential One Bedroom Suite Ocean View',
          singlePrice: '$408.00',
          dblPrice: '$204.00',
          tripleQuadPrice: '$153.00',
          firstChildPrice: '<b>FREE</b>',
          secondChildPrice: '$102.00',
          firstTeenPrice: '<b>FREE</b>',
          secondTeenPrice: '$153.00',
        },
        {
          roomType: 'Luxury Presidential Two Bedroom Suite Ocean View',
          singlePrice: '$731.00',
          dblPrice: '$365.50',
          tripleQuadPrice: '$146.20',
          firstChildPrice: '<b>FREE</b>',
          secondChildPrice: '$91.38',
          firstTeenPrice: '<b>FREE</b>',
          secondTeenPrice: '$146.20'
        },
        {
          roomType: 'Luxury Presidential One Bedroom Suite Swim Out',
          singlePrice: '$459.00',
          dblPrice: '$229.50',
          tripleQuadPrice: '$172.13',
          firstChildPrice: '<b>FREE</b>',
          secondChildPrice: '$114.75',
          firstTeenPrice: '<b>FREE</b>',
          secondTeenPrice: '$172.13'
        },
        {
          roomType: 'Luxury Presidential Two Bedroom Suite Swim Out',
          singlePrice: '$807.50',
          dblPrice: '$403.75',
          tripleQuadPrice: '$161.50',
          firstChildPrice: '<b>FREE</b>',
          secondChildPrice: '$100.94',
          firstTeenPrice: '<b>FREE</b>',
          secondTeenPrice: '$161.50'
        },
        {
          roomType: 'Luxury Presidential One Bedroom Suite Ocean View Rooftop Oversized Jacuzzi',
          singlePrice: '$467.50',
          dblPrice: '$233.75',
          tripleQuadPrice: '$175.31',
          firstChildPrice: '<b>FREE</b>',
          secondChildPrice: '$116.88',
          firstTeenPrice: '<b>FREE</b>',
          secondTeenPrice: '$175.31'
        },
        {
          roomType: 'Luxury Junior Suite Ocean View <b>DC</b>',
          singlePrice: '$305.37',
          dblPrice: '$203.58',
          tripleQuadPrice: '$152.69',
          firstChildPrice: '$101.79',
          secondChildPrice: '$101.79',
          firstTeenPrice: '$101.79',
          secondTeenPrice: '$152.69'
        },
        {
          roomType: 'Luxury Junior Suite Swim Out <b>DC</b>',
          singlePrice: '$328.32',
          dblPrice: '$218.88',
          tripleQuadPrice: '$164.16',
          firstChildPrice: '$109.44',
          secondChildPrice: '$109.44',
          firstTeenPrice: '$109.44',
          secondTeenPrice: '$164.16'
        },
        {
          roomType: 'Luxury Suite Ocean View with Terrace Jacuzzi <b>DC</b>',
          singlePrice: '$294.21',
          dblPrice: '$196.14',
          tripleQuadPrice: '$147.11',
          firstChildPrice: '$98.07',
          secondChildPrice: '$98.07',
          firstTeenPrice: '$98.07',
          secondTeenPrice: '$147.11'
        },
        {
          roomType: 'Luxury Family Suite Ocean View <b>DC</b>',
          singlePrice: '$450.50',
          dblPrice: '$225.25',
          tripleQuadPrice: '$168.94',
          firstChildPrice: '<b>FREE</b>',
          secondChildPrice: '$112.63',
          firstTeenPrice: '<b>FREE</b>',
          secondTeenPrice: '$168.94'
        },
        {
          roomType: 'Luxury Presidential One Bedroom Suite <b>DC</b>',
          singlePrice: '$488.76',
          dblPrice: '$244.38',
          tripleQuadPrice: '$183.29',
          firstChildPrice: '<b>FREE</b>',
          secondChildPrice: '$122.19',
          firstTeenPrice: '<b>FREE</b>',
          secondTeenPrice: '$183.29'
        },
        {
          roomType: 'Luxury Presidential One Bedroom Suite Ocean View <b>DC</b>',
          singlePrice: '$522.76',
          dblPrice: '$261.38',
          tripleQuadPrice: '$196.04',
          firstChildPrice: '<b>FREE</b>',
          secondChildPrice: '$130.69',
          firstTeenPrice: '<b>FREE</b>',
          secondTeenPrice: '$196.04'
        },
        {
          roomType: 'Luxury Presidential Two Bedroom Suite Ocean View <b>DC</b>',
          singlePrice: '$896.76',
          dblPrice: '$448.38',
          tripleQuadPrice: '$179.35',
          firstChildPrice: '<b>FREE</b>',
          secondChildPrice: '$112.10',
          firstTeenPrice: '<b>FREE</b>',
          secondTeenPrice: '$179.35'
        },
        {
          roomType: 'Luxury Presidential One Bedroom Suite Swim Out <b>DC</b>',
          singlePrice: '$539.75',
          dblPrice: '$269.88',
          tripleQuadPrice: '$202.41',
          firstChildPrice: '<b>FREE</b>',
          secondChildPrice: '$134.94',
          firstTeenPrice: '<b>FREE</b>',
          secondTeenPrice: '$202.41'
        },
        {
          roomType: 'Luxury Presidential Two Bedroom Suite Swim Out <b>DC</b>',
          singlePrice: '$947.76',
          dblPrice: '$473.88',
          tripleQuadPrice: '$189.55',
          firstChildPrice: '<b>FREE</b>',
          secondChildPrice: '$118.47',
          firstTeenPrice: '<b>FREE</b>',
          secondTeenPrice: '$189.55'
        },
        {
          roomType: 'Luxury Chairman ́s Two Bedroom Suite Ocean Front <b>DC</b>',
          singlePrice: '$1,279.26',
          dblPrice: '$639.63',
          tripleQuadPrice: '$255.85',
          firstChildPrice: '<b>FREE</b>',
          secondChildPrice: '$159.91',
          firstTeenPrice: '<b>FREE</b>',
          secondTeenPrice: '$255.85'
        },
        {
          roomType: 'Luxury Chairman ́s Three Bedroom Suite Ocean Front <b>DC</b>',
          singlePrice: '$1,661.76',
          dblPrice: '$830.88',
          tripleQuadPrice: '$332.35',
          firstChildPrice: '<b>FREE</b>',
          secondChildPrice: '$207.72',
          firstTeenPrice: '<b>FREE</b>',
          secondTeenPrice: '$332.35'
        }
      ],
    }
  }
}
</script>

<style>
@media all and (max-width: 768px) {
  .v-image__image {
    max-height: 150px;
  }
}

.border-left {
  border-left: thin solid rgba(0, 0, 0, 0.12);
}

.border-right {
  border-right: thin solid rgba(0, 0, 0, 0.12);
}
</style>
