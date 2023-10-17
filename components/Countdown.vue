<template>
  <div class="container">
    <div id="countdown">
      <ul>
        <li><span id="days">{{days}}</span>days</li>
        <li><span id="hours">{{hours}}</span>Hours</li>
        <li><span id="minutes">{{minutes}}</span>Minutes</li>
        <li><span id="seconds">{{seconds}}</span>Seconds</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetDate: new Date('2024-08-22T23:59:59').getTime(), // Replace with your target date
      remainingTime: 0,
    }
  },
  methods: {
    updateRemainingTime() {
      const now = new Date().getTime();
      const timeDifference = this.targetDate - now;

      if (timeDifference > 0) {
        this.remainingTime = timeDifference;
      } else {
        this.remainingTime = 0;
        clearInterval(this.timer);
      }
    },
    formatRemainingTime(time) {
      this.days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((time % (1000 * 60)) / 1000);
      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  },
  computed: {
    days() {
      return Math.floor(this.remainingTime / (1000 * 60 * 60 * 24));
    },
    hours() {
      return Math.floor((this.remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    },
    minutes() {
      return Math.floor((this.remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    },
    seconds() {
      return Math.floor((this.remainingTime % (1000 * 60)) / 1000);
    }
  },
  mounted() {
    this.timer = setInterval(this.updateRemainingTime, 1000); // Update every second
  }
}
</script>

<style scoped>
/* general styling */
.container {
  margin: 0 auto;
  text-align: center;
}

li {
  display: inline-block;
  font-size: 1em;
  list-style-type: none;
  padding: 1em;
  text-transform: uppercase;
  font-family: "La Luxes";
}

li span {
  display: block;
  font-size: 2rem;
}

@media all and (max-width: 768px) {
  h1 {
    font-size: calc(1rem * var(--smaller));
  }

  li {
    font-size: calc(1rem * var(--smaller));
  }

  li span {
    font-size: calc(1.725rem * var(--smaller));
  }
}
</style>
