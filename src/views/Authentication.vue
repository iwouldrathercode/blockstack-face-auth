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
            prepend-inner-icon="mdi-key"
            type="password"
            label="Password"
            placeholder="Password"
            solo
          ></v-text-field>
        </v-row>
    </div>
    <v-card-actions>
      <a class="subtitle-2 px-2 red--text" @click="forgotPasswordView">
        Forgot password ?
      </a>
      <v-spacer></v-spacer>
      <v-btn color="primary" :loading="loadingState" @click="faceAuthencticateView">
        Sign In
      </v-btn>
    </v-card-actions>
    <v-card-actions class="mt-6">
      <v-btn block text color="primary" :loading="loadingState" @click="registrationView">
        Create new account
      </v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Authentication',
  computed: {
    loadingState: {
      get() {
        return this.$store.state.loading;
      },
      set(value) { this.SET_LOADING_STATE(value); },
    },
  },
  methods: {
    ...mapActions(['SET_LOADING_STATE']),
    forgotPasswordView() {
      this.$router.push({ name: 'recovery' });
    },
    registrationView() {
      this.$router.push({ name: 'registration' });
    },
    faceAuthencticateView() {
      this.$router.push({ name: 'verification' });
    },
  },
};
</script>
