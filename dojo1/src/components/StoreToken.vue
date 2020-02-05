<template>
  <div class="about">
    <div :value="token"></div>
    <!-- <button @click="methodK">setar token aqui !!!</button> -->
    <div class="text">{{ this.stToken }}</div>
    <input type="text" v-model="tokenInput">
        <div class="token_input">{{this.tokenInput}}</div>

    <button class="btn" @click="setToken(tokenInput)">setar token aqui !!!</button>
  </div>
</template>

<style scoped>
.about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    .btn {
        background-color: whitesmoke;
        border: 1px solid lightgray;
        border-radius: 5px;
        height: 40px;
        width: 200px;
        font-size: 20px;
        color: lightcoral;
        margin: 10px;
    }
    .text {
        font-size: 25px;
        color: blue;
        font-weight: 300px;
        margin: 10px;
    }
    .text:hover {
        color: coral;
    }
    .token_input {
        margin: 25px;
    }
    input {
        background-color: whitesmoke;
        height: 40px;
        width: 200px;
        border: 3px dotted black;
        margin: 20px;
    }
</style>

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
