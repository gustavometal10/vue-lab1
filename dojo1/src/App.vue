<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="this.stToken === '123456'" to="/">Home</router-link> |
      <router-link v-if="this.stToken === '123456'" to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link v-if="this.stToken === '123456'" to="/dashboard">Dash</router-link> |
      <router-link v-if="this.stToken === '123456'" to="/logoff">Logoff</router-link>
    </div>
    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import { mapGetters } from 'vuex';

export default {


  computed: {
    ...mapGetters(['stToken']),
  },

};
</script>
