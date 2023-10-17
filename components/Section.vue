<template>
  <v-container fluid :style="'background-color:' + backgroundColor + '; padding: 80px 0px !important;'" :class="{ whitetext: whiteText }">
    <section :id="sectionId">
      <v-row>
        <v-col cols="12" class="text-center">
          <h1 class="section-title">{{ title }}</h1>
        </v-col>
      </v-row>
      <slot></slot>
    </section>
  </v-container>
</template>

<script>
export default {
  props: ['sectionId', 'backgroundColor', 'title', 'whiteText']
}
</script>

<style>
.whitetext {
  color: white;
}
</style>
