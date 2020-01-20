<template>
  <v-app>
    <v-content>
      <v-container class="fill-height">
        <v-layout wrap class="justify-center align-center">
          <v-flex xs12>
            <div class="fill-height align-center justify-center home">
              <v-card class="mx-auto" max-width="344" outlined elevation="1" min-height="450">
                <v-list-item>
                  <v-list-item-content>
                    <v-img src="/blockstack-logo-landscape.svg" />
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                  <router-view />
              </v-card>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.fill-height {
  height: 100vh;
}
.img-responsive {
  height: auto;
  max-width: -webkit-fill-available;
}
</style>
