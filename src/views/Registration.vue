<template>
  <v-container>
    <div class="px-7">
      <v-row class="pt-5">
        <v-text-field
          outlined
          prepend-inner-icon="mdi-account"
          :value="usernameField"
          label="Username"
          placeholder="Username"
          solo
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          outlined
          prepend-inner-icon="mdi-email"
          :value="emailField"
          label="Email address"
          placeholder="Your email address"
          solo
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          outlined
          prepend-inner-icon="mdi-key"
          :value="passwordField"
          type="password"
          label="Password"
          placeholder="Password"
          solo
        ></v-text-field>
      </v-row>
    </div>
    <v-card-actions>
      <a class="subtitle-2 px-2 primary--text" @click="authenticationView">
        Sign in to existing account
      </a>
      <v-spacer></v-spacer>
      <v-btn color="primary" :loading="loadingState" @click="register">
        Next
      </v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Registration',
  computed: {
    loadingState: {
      get() {
        return this.$store.state.loading;
      },
      set(value) { this.SET_LOADING_STATE(value); },
    },
    usernameField: {
      get() {
        return this.$store.state.registration.username;
      },
      set(value) { this.SET_INPUT_VALUE('username', value); },
    },
    passwordField: {
      get() {
        return this.$store.state.registration.password;
      },
      set(value) { this.SET_INPUT_VALUE('password', value); },
    },
    emailField: {
      get() {
        return this.$store.state.registration.email;
      },
      set(value) { this.SET_INPUT_VALUE('email', value); },
    },
  },
  methods: {
    ...mapActions([
      'SET_LOADING_STATE',
      'INTIALIZE_WALLET',
      'CREATE_ACCOUNT',
    ]),
    authenticationView() {
      this.$router.push({ name: 'authentication' });
    },
    register() {
      this.loadingState = true;
      this.INTIALIZE_WALLET().then(() => {
        this.CREATE_ACCOUNT();
      });
      this.loadingState = false;
    },
  },
};
</script>

<style>

</style>
