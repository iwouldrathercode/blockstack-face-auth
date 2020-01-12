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

    <v-list-item>
      <v-list-item-content>
        <v-text-field
            outlined
            label="Username"
            placeholder="Username"
            solo
          ></v-text-field>
      </v-list-item-content>
    </v-list-item>

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
      <v-btn small color="primary">Next</v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    loginView: true,
    createAccountView: false,
  }),
  components: {

  },
  methods: {
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
