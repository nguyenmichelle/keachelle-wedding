<template>
  <Section id="rsvp" background-color="#B8A283" white-text="true" title="KINDLY RESPOND">
    <v-row>
      <v-col cols="12" class="text-center">
        <p>Please RSVP by April 20, 2024</p>
      </v-col>
      <v-col cols="12" class=" d-flex justify-center align-center">
        <v-sheet class="sheet mx-auto" rounded>
          <v-form @submit.prevent>
            Please enter the first and last name of one member of your party below.
            If you're responding for you and a guest (or your family), you'll be able to RSVP for your entire group on the next page.<br><br>
            <v-text-field
              label="First and last name"
            ></v-text-field>
            <v-btn outlined type="submit" block class="mt-2">Continue</v-btn>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </Section>
</template>

<style>
  .sheet {
    width: 500px;
    padding: 60px;
  }
</style>
