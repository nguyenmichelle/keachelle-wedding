<template>
  <div>
    <v-card :title="question">
      {{answer}}
    </v-card>
  </div>
</template>

<script>
  export default {
    props: ['question', 'answer']
  }
</script>
