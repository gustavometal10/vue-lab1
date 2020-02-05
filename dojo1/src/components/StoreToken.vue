<template>
  <div class="about">
    <div :value="token"></div>
    <button @click="setToken(tokenInput)">setar token aqui !!!</button>
    <div>{{ this.stToken }} ---- {{this.tokenInput}}</div>
    <input type="text" v-model="tokenInput">

  </div>

</template>

<script>

// import router from '@/router';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'StoreToken',
  created() {
    this.token = this.stToken;
  },

  data() {
    return {
      token: '',
      tokenInput: '',
    };
  },

  computed: {
    ...mapGetters(['stToken']),
  },

  methods: {
    ...mapActions([
      'setToken',
    ]),
    // methodK() {
    //   this.setToken(this.tokenInput);
    // },
  },
};
</script>
