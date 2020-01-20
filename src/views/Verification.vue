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
      <v-col cols="12" md="12" sm="12" class="justify-center pa-6">
        <v-btn block color="success" :loading="loadingState"
          @click="submit">Verify &amp; Sign in</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { WebCam } from 'vue-web-cam';

export default {
  name: 'Verification',
  data: () => ({
    img: null,
    camera: null,
    deviceId: null,
    devices: [],
  }),
  components: {
    'vue-web-cam': WebCam,
  },
  computed: {
    loadingState: {
      get() {
        return this.$store.state.loading;
      },
      set() {},
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
      this.onCapture();
    },
    onCapture() {
      this.img = this.$refs.webcam.capture();
    },
    onStarted(stream) {
      console.log('On Started Event', stream);
    },
    onStopped(stream) {
      console.log('On Stopped Event', stream);
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
      this.devices = cameras;
      console.log('On Cameras Event', cameras);
    },
    onCameraChange(deviceId) {
      this.deviceId = deviceId;
      this.camera = deviceId;
      console.log('On Camera Change Event', deviceId);
    },
  },
};
</script>

<style>

</style>
