<template>
  <div class="fill-height align-center justify-center home">
    <v-card
    class="mx-auto"
    max-width="344"
    outlined
    elevation="1"
  >
    <v-list-item>
      <v-list-item-content>
        <v-img src="/blockstack-logo-landscape.svg" />
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-container v-show="step === 1">
      <div class="px-7">
      <div v-show="loginView">
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
      <div v-show="createAccountView">
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
      </div>
      <v-card-actions>
        <a
          v-show="loginView"
          class="subtitle-2 px-2 primary--text"
          @click="toggleCreateAccountView">
          Create new account
        </a>
        <a
          v-show="createAccountView"
          class="subtitle-2 px-2 primary--text"
          @click="toggleLoginView">
          Use existing account
        </a>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="next">Next</v-btn>
      </v-card-actions>
    </v-container>

    <v-container fluid v-show="step === 2">
      <v-row>
        <v-col cols="12" md="12" sm="12" class="justify-center">
          <v-btn block color="success" @click="submit">
            Verify &amp; Signin
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

  </v-card>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    step: 1,
    loginView: true,
    createAccountView: false,
  }),
  methods: {
    submit() {
      console.log('signin');
    },
    back() {
      this.step = this.step - 1;
    },
    next() {
      this.step = this.step + 1;
    },
    toggleCreateAccountView() {
      this.createAccountView = true;
      this.loginView = false;
    },
    toggleLoginView() {
      this.createAccountView = false;
      this.loginView = true;
    },
  },
};
</script>
