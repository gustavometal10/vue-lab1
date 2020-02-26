import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({ paths: ['token', 'email'] })],
  state: {
    token: '',
    email: '',
    language: '',
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setEmail(state, payload) {
      state.email = payload;
    },
    setLanguage(state, payload) {
      state.language = payload;
    },

  },
  getters: {
    stToken: state => state.token,
    stEmail: state => state.email,
    stLocale: state => state.language,
  },

  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    setEmail({ commit }, email) {
      commit('setEmail', email);
    },
    setLocale({ commit }, locale) {
      commit('setLanguage', locale);
    },
    selfDestroy({ commit }) {
      commit('setToken', null);
      commit('setEmail', null);
    },
  },
});
