import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    notification: {
      visibility: false,
      type: null,
      message: null,
    },
  },
  mutations: {
    COMMIT_LOADING_STATE(state, value) {
      state.loading = value;
    },
    COMMIT_NOTIFICATION(state, notification) {
      state.notification = notification;
    },
  },
  actions: {
    SET_LOADING_STATE({ commit }, value) {
      commit('COMMIT_LOADING_STATE', value);
    },
    SET_NOTIFICATION({ commit }, notification) {
      commit('COMMIT_NOTIFICATION', notification);
    },
  },
  modules: {
  },
});
