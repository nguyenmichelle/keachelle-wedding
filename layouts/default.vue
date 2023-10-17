<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      :elevation="1"
      density="prominent"
      fixed
      app
      color="#f7f6f3"
    >
      <v-toolbar-title class="header-title">{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list v-for="item in items">
          <v-list-item>
            <router-link :to="item.to">
              <v-list-item>{{ item.title }}</v-list-item>
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
      color="#f7f6f3"
    >
      <span>&copy; {{ new Date().getFullYear() }} - Developed by Michelle Nguyen</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          title: 'Details',
          to: '#details'
        },
        {
          title: 'Accommodations',
          to: '#accommodations'
        },
        {
          title: 'Bridal Party',
          to: '#bridal-party'
        },
        {
          title: 'Gifts/Registry',
          to: '#gifts'
        },
        {
          title: 'RSVP',
          to: '#rsvp'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'MICHELLE & KEATON'
    }
  }
}
</script>

<style>
  .header-title {
    font-family: 'La Luxes'
  }
</style>
