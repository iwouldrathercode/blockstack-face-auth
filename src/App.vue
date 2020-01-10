<template>
  <v-app>
    <v-content>
      <v-container class="fill-height">
        <v-layout wrap class="justify-center align-center">
          <v-flex xs12>
            <router-view />
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
</style>
