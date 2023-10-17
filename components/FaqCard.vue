<template>
  <v-container>
    <v-card outlined color="var(--base-color)">
      <v-card-title @click="toggleAnswerVisibility">
        <span>{{question}}</span>
        <v-spacer />
        <v-icon v-if="!showAnswer">mdi-arrow-down</v-icon>
        <v-icon v-else>mdi-arrow-up</v-icon>
      </v-card-title>
      <v-card-text v-if="showAnswer">
        {{answer}}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    props: ['question', 'answer'],
    data() {
      return {
        showAnswer: false
      }
    },
    methods: {
      toggleAnswerVisibility() {
        this.showAnswer = !this.showAnswer
      }
    }
  }
</script>
