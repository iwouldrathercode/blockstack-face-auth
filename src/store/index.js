import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
  },
  mutations: {
    SET_LOADING_STATE(state, value) {
      state.loading = value;
    },
  },
  actions: {
    SET_LOADING_STATE({ commit }, value) {
      commit('SET_LOADING_STATE', value);
    },
  },
  modules: {
  },
});
