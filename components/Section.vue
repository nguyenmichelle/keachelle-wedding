<template>
  <v-container fluid
               :style="'background-color:' + backgroundColor + '; position: relative;'"
               :class="[hasPadding ? 'padding' : 'no-padding', {'whitetext': whiteText}]">
    <section :id="sectionId">
      <v-row>
        <v-col cols="12" class="text-center" style="margin-bottom:20px;">
          <h1 class="section-title">{{ title }}</h1>
        </v-col>
      </v-row>
      <slot></slot>
    </section>
  </v-container>
</template>

<script>
export default {
  props: {
    sectionId: { default: '' },
    backgroundColor: { default: 'var(--base-color)' },
    title: { default: '' },
    whiteText: { default: false },
    hasPadding: { default: true }
  }
}
</script>

<style>
.whitetext {
  color: white;
}

.padding {
  padding: 80px 0px !important;
}

.no-padding {
  padding: 30px 0px !important;
}
</style>
