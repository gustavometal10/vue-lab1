<template>
    <div class="form">
    <div class="form__inputs">
    <label>Email</label>
    <input type="email" placeholder="Email" v-model="email">
    <label>Senha</label>
    <input type="password" placeholder="Senha" v-model="token">
    </div>
    <div class="form__button">
    <button type="button" @click="doLogin"> Entrar </button>
    </div>
    </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 400px;
  height: 450px;
  border-radius: 8px;
-webkit-box-shadow: 2px 13px 17px 2px rgba(173,173,173,1);
-moz-box-shadow: 2px 13px 17px 2px rgba(173,173,173,1);
box-shadow: 2px 13px 17px 2px rgba(173,173,173,1);
}
.form__inputs {
  width: 100%;
  text-align: center;
}
input {
  margin: 10px 0px;
  height: 30px;
  font-size: 18px;
  width: 90%;
}
.form__button {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
button {
  font-size: 20px;
  color: white;
  height: 50px;
  width: 80%;
  background-color: #F4A259;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 5px 0px 0px rgb(172, 113, 62);
}
button:hover {
  height: 48px;
  background-color: #F4A259;
  box-shadow: 0px 0px 0px 0px rgb(172, 113, 62);
}
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
