<template>
  <v-container>
    <v-card outlined color="var(--base-color)">
      <v-card-title @click="toggleAnswerVisibility">
        <v-col cols="10">
          <p>{{question}}</p>
          </v-col>
        <v-col cols="2" class="text-right">
          <v-icon v-if="!showAnswer">mdi-arrow-down</v-icon>
          <v-icon v-else>mdi-arrow-up</v-icon>
        </v-col>
      </v-card-title>
      <v-card-text v-if="showAnswer" v-html="answer">
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

<style>
  .v-card__title {
    white-space:pre-wrap;
    word-break:break-word;
    line-height: 1;
  }

  .v-application p {
    margin-bottom: 0 !important;
  }
</style>
