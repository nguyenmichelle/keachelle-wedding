<template>
  <div>
    <Section id="details" background-color="var(--base-brown)" white-text="true" title="AUGUST 22, 2024">
      <v-row>
        <v-col cols="12" class="text-center">
          <p><b>TEA CEREMONY</b> @ 1:00 PM<br>
            <i>*Private Family Event Only</i><br>
            ROYALTON RIVIERA CANCÚN<br>
            77500 CANCÚN<br>
            QUINTANA ROO, MEXICO<br><br>
            <b>CATHOLIC CEREMONY</b> @ 5:00 PM<br>
            CHAPEL AT JARDÍN DEL MAR<br>
            77563 CANCÚN<br>
            QUINTANA ROO, MEXICO<br><br>
          <b>RECEPTION</b> TO FOLLOW<br>
            JARDÍN DEL MAR<br>
            QUINTANA ROO, MEXICO</p><br>
        </v-col>
        <v-col cols="12"><countdown></countdown></v-col>
        <v-col cols="12" class="text-center" style="margin-bottom:20px; margin-top: 50px;">
          <h1 class="section-title">Our Colors</h1>
        </v-col>
        <v-col cols="12" class="text-center" style="padding: 50px 0px">
          These are our wedding colors — feel free to coordinate with them, or not! We want you to feel comfortable and express your personal style on our special day.<br/><br/>
        </v-col>
        <v-col cols="12" class="text-center">
          <div class="colors-pic"></div>
        </v-col>
      </v-row>
    </Section>
  </div>
</template>

<style>
  .colors-pic {
    width: 100%;
    height: 90px; /* Adjust the height as needed */
    background-image: url('~/assets/colors.png'); /* Set the path to your image */
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    background-position: center center;
  }
</style>
