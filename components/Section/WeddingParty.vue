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
                <h3>{{ person.firstName }}</h3>
                <h3>{{ person.lastName }}</h3>
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
                <h3>{{ person.firstName }}</h3>
                <h3>{{ person.lastName }}</h3>
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
      bridalParty: [{firstName: 'Julie', lastName: 'Nguyen', title: 'Matron of Honor', relation: 'Sister', picLink: 'https://i.ibb.co/6Wfz2QM/IMG-8414-2.jpg'},
        {firstName: 'Le', lastName: 'Vu-Diaz', title: 'Matron of Honor', relation: 'Friend', picLink: 'https://i.ibb.co/2ZfmRsw/IMG-0948.jpg'},
        {firstName: 'Alyssa', lastName: 'Tratos', title: 'Bridesmaid', relation: 'Friend', picLink: 'https://i.ibb.co/s304rKt/1253e903-c0b5-4f02-a046-f5a1672b0da2.jpg'},
        {firstName: 'Aubrey', lastName: 'Sengdeng', title: 'Bridesmaid', relation: 'Friend', picLink: 'https://i.ibb.co/vD5C2vs/e2aafcb7-0a30-4a1a-8eed-045a7f8d77ed.jpg'},
        {firstName: 'Autumrose', lastName: 'Stubbs', title: 'Bridesmaid', relation: 'Friend', picLink: 'https://i.ibb.co/WpLcymb/IMG-8420-2.jpg'},
        {firstName: 'Mylan', lastName: 'Chau', title: 'Bridesmaid', relation: 'Friend', picLink: 'https://i.ibb.co/JnYgDDL/IMG-8419-2.jpg'},
        {firstName: 'Prachi', lastName: 'Karna', title: 'Bridesmaid', relation: 'Friend', picLink: 'https://i.ibb.co/9vrgSM6/IMG-8424.jpg'}],
      groomsmanParty: [{firstName: 'Cade', lastName: 'Critchlow', title: 'Best Man', relation: 'Brother', picLink: 'https://i.ibb.co/gwN7fWR/IMG-2622.jpg'},
        {firstName: 'Kip', lastName: 'Critchlow', title: 'Groomsman', relation: 'Brother', picLink: 'https://i.ibb.co/RB5j81z/IMG-8427.jpg'},
        {firstName: 'Brian', lastName: 'Van Trease', title: 'Groomsman', relation: 'Friend', picLink: 'https://i.ibb.co/prWssQZ/e016e814-ba8a-4ba9-88b5-f66f42405cd0.jpg'},
        {firstName: 'Justice', lastName: 'Brown', title: 'Groomsman', relation: 'Friend', picLink: 'https://i.ibb.co/NxXgz3r/IMG-8430.jpg'},
        {firstName: 'Luc', lastName: 'Russell', title: 'Groomsman', relation: 'Friend', picLink: 'https://i.ibb.co/25WGG75/d1c7c235-e323-4fcb-80a0-284fd5d060a5.jpg'},
        {firstName: 'Scott', lastName: 'Nguyen', title: 'Groomsman', relation: 'Brother-in-law', picLink: 'https://i.ibb.co/qsJvtMk/2a50b08a-46f8-45f0-9b8d-a7a3dea226d3.jpg'},
        {firstName: 'Travis', lastName: 'Mitchell', title: 'Groomsman', relation: 'Friend', picLink: 'https://i.ibb.co/hF5zBXG/1fb162bd-bddf-4009-a5bb-77e03324b4e0.jpg'}]
    }
  }
}
</script>

<style>
.v-slide-group__content {
  justify-content: center;
}
</style>
