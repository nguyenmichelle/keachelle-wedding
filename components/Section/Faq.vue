<template>
  <Section id="faq" title="FREQUENTLY ASKED QUESTIONS" background-color="var(--base-green)">
    <v-row>
      <v-col cols="8">
        <faq-card v-for="(faq, index) in faqs" :question="faq.question" :answer="faq.answer" :id="'faq_'+index"></faq-card>
      </v-col>
    </v-row>
  </Section>
</template>

<script>
export default {
  data() {
    return {
      faqs: [{question: 'Is it indoors or outdoors', answer: ''}, {}]
    }
  }
}
</script>
