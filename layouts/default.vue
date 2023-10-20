<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      :elevation="1"
      density="prominent"
      fixed
      app
      color="var(--base-color)"
    >
      <v-toolbar-title><nuxt-link to="/" class="nav-title">{{ title }}</nuxt-link></v-toolbar-title>
      <v-spacer />
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <router-link v-for="item in items" :key="item.title" :to="item.to">
        <v-list>
              <v-list-item>{{ item.title }}</v-list-item>
        </v-list>
        </router-link>
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
      color="var(--base-color)"
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
          title: 'Home',
          to: '/'
        },
        {
          title: 'Details',
          to: '/#details'
        },
        {
          title: 'Accommodations',
          to: '/#accommodations'
        },
        {
          title: 'Resort Details',
          to: '/resort'
        },
        {
          title: 'Wedding Party',
          to: '/#wedding-party'
        },
        {
          title: 'Gifts/Registry',
          to: '/#gifts'
        },
        {
          title: 'RSVP',
          to: '/#rsvp'
        },
        {
          title: 'FAQs',
          to: '/#faq'
        }
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
  .nav-title {
    color: black !important;
    font-family: 'La Luxes' !important;
  }
</style>
