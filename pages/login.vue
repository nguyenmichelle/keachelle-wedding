<!-- LoginPage.vue -->
<template>
  <div>
    <h1>Login</h1>
    <input type="password" v-model="pin" placeholder="Enter 4-digit PIN">
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pin: ''
    };
  },
  methods: {
    login() {
      if (/^\d{4}$/.test(this.pin)) {
        // PIN is 4 digits
        // Perform authentication logic here
        console.log('Authenticated');
        // Redirect to protected page
        this.$router.push('/rsvp');
      } else {
        alert('Please enter a valid 4-digit PIN');
      }
    }
  }
};
</script>
