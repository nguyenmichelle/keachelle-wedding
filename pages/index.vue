<template>
  <div>
    <v-container fluid class="hero-banner">
      <div class="bgBox"></div>
      <span class="hero-title">Michelle <br>and<br>Keaton</span>
    </v-container>
    <section-details></section-details>
    <v-container fluid>
      <v-row>
        <v-col cols="6"><div class="side-banner left-top"></div></v-col>
        <v-col cols="6" class="text-center d-flex justify-center align-center right-top-banner">
          <div>
            <h1>THE DAY BEFORE</h1>
            <h2>Tea Ceremony
            <br>Welcome Party
            <br>Rehearsal Dinner
            <br>Cocktail Attire</h2>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="text-center d-flex justify-center align-center left-bottom-banner">
          <div>
            <h1>THE NEXT DAY</h1>
            <h2>Recovery/Check-out
              <br>Optional hang at the resort pool
            <br>Comfy/Casual Attire</h2>
          </div>
        </v-col>
        <v-col cols="6"><div class="side-banner right-bottom"></div></v-col>
      </v-row>
    </v-container>
    <section-accommodations></section-accommodations>
    <section-bridal-party></section-bridal-party>
    <section-gifts></section-gifts>
    <div class="couple-pic"></div>
    <section-rsvp></section-rsvp>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
.bgBox {
  position: absolute;
  padding: 40px !important;
  width: 100%;
  height: 100%; /* Adjust the height as needed */
  background-image: url('https://myblissandbone.com/aaron/_images/56f416a5d2cb5b5afd7579c6cbbcf4a1.jpeg'); /* Set the path to your image */
  filter: saturate(0%) hue-rotate(-39.6deg) brightness(100%) opacity(32%) blur(0px);
  letter-spacing: 0px;
  background-position: center center;
}
.hero-banner {
  display: flex;
  align-items: center;
  margin-top: 0;
  height: 80vh;
}

.hero-title {
  font-family: "La Luxes";
  font-size: 110px;
  line-height: 1;
  padding: 0px 50px;
  filter: drop-shadow(rgba(0, 0, 0, 0) -1px -1px 0px) drop-shadow(rgba(255, 255, 255, 0.95) 1px 1px 0px);
}

@media all and (max-width: 768px) {
  .hero-title {
    font-size: calc(3.5rem * var(--smaller));
  }
}

.couple-pic {
  width: 100%;
  height: 600px; /* Adjust the height as needed */
  background-image: url('~/assets/keachelle_landscape.jpg'); /* Set the path to your image */
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  background-position: center center;
}

.left-top {
  background-image: url('https://myblissandbone.com/aaron/_images/d3942ab5ec5e8aa540dfc57a1c50bac1.jpeg'); /* Set the path to your image */
}

.right-bottom {
  background-image: url('https://i.pinimg.com/originals/fb/ab/bd/fbabbd6f05856234ceba89433cda6a08.jpg'); /* Set the path to your image */
}

.side-banner {
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  background-position: center center;
  filter: saturate(100%) hue-rotate(0deg) brightness(100%) opacity(90%) blur(0px);
  height: 400px; /* Adjust the height as needed */
}

.right-top-banner {
  background-color: #858872;
}

.left-bottom-banner {
  background-color: #C2C4BA;
}

.col {
  padding: 0px !important;
}
</style>
