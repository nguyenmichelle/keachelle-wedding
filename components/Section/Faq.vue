<template>
  <Section id="faq" title="FREQUENTLY ASKED QUESTIONS" background-color="var(--base-green)">
    <v-row class="faq-card-container d-flex justify-center align-center" v-for="(faq, index) in faqs" :id="'faq_container_'+index">
      <v-col cols="8" :id="'faq_col_'+index">
        <faq-card :question="faq.question" :answer="faq.answer" :id="'faq_card_'+index"></faq-card>
      </v-col>
    </v-row>
  </Section>
</template>

<script>
export default {
  data() {
    return {
      faqs: [{question: 'Will the wedding be indoors or outdoors?', answer: 'The event venue is along the beach, however we will be in an enclosed building. There will be a 3-minute walk along the beach and sand from the resort to the venu'},
        {question: 'When do the rooms need to be booked by?', answer: 'Indoors'},
        {question: 'What is included in all-inclusive?', answer: 'Indoors'},
        {question: 'What dates are the room block for?', answer: 'August 20, 2024 - August 23, 2024. We wanted to give everyone time to fly in and get settled a day before festivities begin!'},
        {question: 'Can I bring a plus one?', answer: 'Please restrict the attendees in your party to those listed on your invitation. We wish we could accommodate all our friends and family, but resources don\'t allow for this'},
        {question: 'Do I have to stay at the Royalton?', answer: 'Not necessarily, if you would like to stay off-site at a cheaper resort that could save you some money. However, it is important to keep in mind that most of the other resorts nearby are also all-inclusive and would not come with a group rate. You would most likely need to pay for transportation to the event venue as well.'},
        {question: 'Any other questions?', answer: 'Indoors'},
      ]
    }
  }
}
</script>

<style>
  .faq-card-container {
    margin: 10px 0px !important;
  }
</style>
