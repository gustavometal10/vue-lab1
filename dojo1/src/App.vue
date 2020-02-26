<template>
  <div id="app">
    <div id="nav">
      <img class="logo" src="../src/assets/Dojologo.png" />
      <div class="menu">
        <ul class="menu__principal">
      <li><router-link v-if="this.stToken === '123456'" to="/">Home</router-link></li>
      <li><router-link v-if="this.stToken === '123456'" to="/about">About</router-link></li>
      <li><router-link v-if="this.stToken === '123456'" to="/dashboard">Dashboard</router-link></li>
      <li><router-link v-if="this.stToken === '123456'" to="/testes">Testes</router-link></li>
        </ul>
        <ul class="menu__secondary">
      <li><router-link v-if="this.stToken != '123456'" to="/login">Login</router-link></li>
      <li><router-link v-if="this.stToken === '123456'" to="/logoff">Logoff</router-link></li>
        </ul>
      </div>
    </div>
    <div id="container">
    <router-view/>
    </div>
  </div>
</template>


<style>
html,body{
  margin:0;
  padding:0;
  overflow:hidden
  }
.logo {
  margin: 10px;
  height: 70px;
  width: auto;
}
.menu {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.menu ul {
  font-size: 20px;
  width: 50%;
  list-style:none;
  padding: 0px;
}
.menu li {
  display: inline;
  margin: 0px 10px;
}
.menu li a {
  text-decoration: none;
  color: #696E72;
  font-weight: 500;
}
.menu li a:hover {
  color: #5F3F66;
  border-bottom: 3px solid #5F3F66;
}
.menu__secondary {
  text-align: end;
  margin-right: 20px;
}
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #292D2D;
}

#nav {
  border: 2px solid black;
  padding: 0px;
  display: flex;
  align-items: center;
}
#nav a.router-link-exact-active {
  color: black;
  border-bottom: 3px solid black;
}
#nav a.router-link-exact-active:hover {
  color: #5F3F66;
  border-bottom: 3px solid #5F3F66;
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
