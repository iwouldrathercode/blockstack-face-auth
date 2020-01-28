<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col cols="12" md="12" sm="12" class="ma-0 pa-0">
        <div v-show="image === null" class="ma-0 pa-0">
          <v-container class="ma-0 pa-0">
            <v-row class="ma-0 pa-0">
              <v-col cols="12" md="12" sm="12" class="ma-0 pa-0 camera-placeholder">
                <vue-web-cam
                  ref="webcam" :device-id="deviceId"
                  class="img-responsive" @cameras="onCameras"/>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div v-show="image !== null" class="ma-0 pa-0">
          <v-container class="ma-0 pa-0">
            <v-row class="ma-0 pa-0">
              <v-col cols="12" md="12" sm="12" class="ma-0 pa-0">
                <figure class="figure">
                  <img :src="image" class="img-responsive" />
                </figure>
                <figure class="figure d-none">
                  <img :src="savedImage" class="img-responsive" />
                </figure>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12" sm="12" class="justify-center pa-6">
        <v-btn block color="primary" :loading="loadingState"
          @click="submit">Verify &amp; Sign in</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { WebCam } from 'vue-web-cam';
import { mapActions } from 'vuex';
import * as faceapi from 'face-api.js';

export default {
  name: 'Verification',
  data: () => ({
    // vue-web-cam
    image: null,
    savedImage: 'http://localhost:8080/tests/test-002.jpeg',
    camera: null,
    deviceId: null,
    devices: [],
    // face-api.js and Similarity matching
    threshold: 0.6,
    descriptors: { desc1: null, desc2: null },
  }),
  async beforeMount() {
    const WEIGHTS_URL = '/weights';
    await faceapi.loadTinyFaceDetectorModel(WEIGHTS_URL);
    await faceapi.loadFaceLandmarkTinyModel(WEIGHTS_URL);
    await faceapi.loadFaceLandmarkModel(WEIGHTS_URL);
    await faceapi.loadFaceRecognitionModel(WEIGHTS_URL);
    await faceapi.loadFaceExpressionModel(WEIGHTS_URL);
    await faceapi.loadAgeGenderModel(WEIGHTS_URL);
    await faceapi.loadFaceDetectionModel(WEIGHTS_URL);
  },
  components: {
    'vue-web-cam': WebCam,
  },
  computed: {
    loadingState: {
      get() {
        return this.$store.state.loading;
      },
      set(value) { this.SET_LOADING_STATE(value); },
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
    ...mapActions(['SET_LOADING_STATE']),
    submit() {
      this.loadingState = true;
      this.onCapture();
      this.onStop();
      this.verifyFace();
    },
    onCapture() {
      this.image = this.$refs.webcam.capture();
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
    b64toBlob(dataURI) {
      const byteString = atob(dataURI.split(',')[1]);
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);

      for (let i = 0; i < byteString.length; i += 1) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], { type: 'image/jpeg' });
    },
    async verifyFace() {
      const webCamInput = await faceapi.fetchImage(this.image);
      const faceDescriptor = await faceapi.computeFaceDescriptor(webCamInput);

      const referenceImage = await faceapi.fetchImage(this.savedImage);
      const savedImageDescriptor = await faceapi.computeFaceDescriptor(referenceImage);

      const distance = faceapi.utils.round(faceapi.euclideanDistance(
        faceDescriptor,
        savedImageDescriptor,
      ));
      console.log(distance);

      if (distance > this.threshold) {
        console.log('not matching');
      } else {
        console.log('matching');
      }
      this.loadingState = false;
    },
  },
};
</script>

<style>
.camera-placeholder {
  background: url('/infinity.gif') no-repeat center center;
  min-height: 263.5px;
}
</style>
