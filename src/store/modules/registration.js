/* eslint-disable no-shadow */

import { HDNode } from 'bitcoinjs-lib';
import { validateMnemonic, mnemonicToSeed, generateMnemonic } from 'bip39';
import { createCipher, createDecipher, randomBytes } from 'crypto';


export const state = {
  email: null,
  username: null,
  password: null,
  phrase: null,
  seedBuffer: null,
  masterKeychain: null,
  encryptedBackupPhrase: null,
};

export const mutations = {
  COMMIT_INPUT_VALUE(state, key, value) {
    state[key] = value;
  },
  SET_PHRASE(state, bytes) {
    state.phrase = generateMnemonic(128, bytes);
    state.seedBuffer = mnemonicToSeed(state.phrase);
    state.masterKeychain = HDNode.fromSeedBuffer(state.seedBuffer);
  },
  ENCRYPT_PHRASE(state) {
    const cipher = createCipher('aes192', state.password);
    let enc = cipher.update(state.phrase, 'utf8', 'hex');
    enc += cipher.final('hex');
    state.encryptedBackupPhrase = enc;
  },
};

export const actions = {
  SET_INPUT_VALUE({ commit }, key, value) {
    commit('COMMIT_INPUT_VALUE', key, value);
  },
  INTIALIZE_WALLET({ commit }) {
    console.log('Initializing Wallet!');
    commit('SET_CONFIG', randomBytes);
    commit('ENCRYPT_PHRASE');
  },
  CREATE_ACCOUNT({ commit }) {

  },
};

export const getters = {};

export function initializeIdentity() {
  console.log('Initializing Identity!');
}
