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
      <a class="subtitle-2 px-2 primary--text" @click="registrationView">
        Create new account
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
  name: 'Authentication',
  computed: {
    loadingState: {
      get() {
        return this.$store.state.loading;
      },
      set() {},
    },
  },
  methods: {
    registrationView() {
      this.$router.push({ name: 'registration' });
    },
    faceAuthencticateView() {
      this.$router.push({ name: 'verification' });
    },
  },
};
</script>
