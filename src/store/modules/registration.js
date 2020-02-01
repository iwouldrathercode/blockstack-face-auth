/* eslint-disable no-shadow */

export const state = {
  email: null,
  username: null,
  password: null,
};

export const mutations = {
  COMMIT_INPUT_VALUE(state, key, value) {
    state[key] = value;
  },
};

export const actions = {
  SET_INPUT_VALUE({ commit }, key, value) {
    commit('COMMIT_INPUT_VALUE', key, value);
  },
  CREATE_ACCOUNT() {
    console.log('create account!');
  },
};

export const getters = {};
