<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col cols="12" md="12" sm="12" class="ma-0 pa-0">
        <div v-show="img === null" class="ma-0 pa-0">
          <v-container class="ma-0 pa-0">
            <v-row class="ma-0 pa-0">
              <v-col cols="12" md="12" sm="12" class="ma-0 pa-0">
                <vue-web-cam
                  ref="webcam" :device-id="deviceId"
                  class="img-responsive" @cameras="onCameras"/>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div v-show="img !== null" class="ma-0 pa-0">
          <v-container class="ma-0 pa-0">
            <v-row class="ma-0 pa-0">
              <v-col cols="12" md="12" sm="12" class="ma-0 pa-0">
                <figure class="figure">
                  <img :src="img" class="img-responsive" />
                </figure>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12" sm="12" class="justify-center">
        <v-btn block color="success" @click="submit">Verify &amp; Signin</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { WebCam } from 'vue-web-cam';

export default {
  name: 'FaceAuthComponent',
  components: {
    'vue-web-cam': WebCam,
  },
  data: () => ({
    img: null,
    camera: null,
    deviceId: null,
    devices: [],
  }),
  computed: {
    device() {
      return this.devices.find(n => n.deviceId === this.deviceId);
    },
  },
  watch: {
    camera(id) {
      this.deviceId = id;
    },
    devices() {
      // Once we have a list select the first one
      const [first] = this.devices;
      if (first) {
        this.camera = first.deviceId;
        this.deviceId = first.deviceId;
      }
    },
  },
  methods: {
    submit() {
      this.img = this.$refs.webcam.capture();
      this.$refs.webcam.stop();
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
    onCapture() {
      this.img = this.$refs.webcam.capture();
    },
    onStop() {
      this.$refs.webcam.stop();
    },
    onStart() {
      this.$refs.webcam.start();
    },
    onError(error) {
      console.log('On Error Event', error);
    },
    onCameras(cameras) {
      if (this.step === 2) {
        this.devices = cameras;
        console.log('On Cameras Event', cameras);
      }
    },
  },
};
</script>
