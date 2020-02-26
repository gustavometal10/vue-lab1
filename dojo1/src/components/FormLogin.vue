<template>
    <div>
    <h1> Login </h1>
    <input type="email" placeholder="Email" v-model="email">
    <input type="text" placeholder="Senha" v-model="token">
    <button type="button" @click="doLogin"> Entrar </button>
    </div>
</template>

<style scoped>

</style>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {

  name: 'FormLogin',
  data() {
    return {
      token: '',
      email: '',
    };
  },
  computed: {
    ...mapGetters(['stToken', 'stEmail']),
  },

  methods: {
    ...mapActions([
      'setToken', 'setEmail',
    ]),
    doLogin() {
      this.setToken(this.token);
      this.setEmail(this.email);
    },
  },


};
</script>
