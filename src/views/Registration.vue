<template>
  <v-container>
    <div class="px-7">
      <v-row class="pt-5">
        <v-text-field
          outlined
          prepend-inner-icon="mdi-account"
          label="Username"
          placeholder="Username"
          solo
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          outlined
          prepend-inner-icon="mdi-email"
          label="Email address"
          placeholder="Your email address"
          solo
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          outlined
          prepend-inner-icon="mdi-key"
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
      <v-btn color="primary" :loading="loadingState" @click="faceAuthencticateView">
        Next
      </v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
export default {
  name: 'Registration',
  computed: {
    loadingState: {
      get() {
        return this.$store.state.loading;
      },
      set() {},
    },
  },
  methods: {
    authenticationView() {
      this.$router.push({ name: 'authentication' });
    },
    faceAuthencticateView() {
      this.$router.push({ name: 'verification' });
    },
  },
};
</script>

<style>

</style>
