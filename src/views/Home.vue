<template>
  <div class="fill-height align-center justify-center home">
    <v-card class="mx-auto" max-width="344" outlined elevation="1">
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
            @click="toggleCreateAccountView"
          >Create new account</a>
          <a
            v-show="createAccountView"
            class="subtitle-2 px-2 primary--text"
            @click="toggleLoginView"
          >Use existing account</a>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="next">Next</v-btn>
        </v-card-actions>
      </v-container>

      <v-container fluid v-show="step === 2">
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <vue-web-cam
              ref="webcam"
              :device-id="deviceId"
              width="100%"
              @started="onStarted"
              @stopped="onStopped"
              @error="onError"
              @cameras="onCameras"
              @camera-change="onCameraChange"
            />

            <select v-model="camera">
              <option>-- Select Device --</option>
              <option
                v-for="device in devices"
                :key="device.deviceId"
                :value="device.deviceId"
              >{{ device.label }}</option>
            </select>

            <button type="button" class="btn btn-primary" @click="onCapture">Capture Photo</button>
            <button type="button" class="btn btn-danger" @click="onStop">Stop Camera</button>
            <button type="button" class="btn btn-success" @click="onStart">Start Camera</button>

            <figure class="figure">
              <img :src="img" class="img-responsive" />
            </figure>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12" sm="12" class="justify-center">
            <v-btn block color="success" @click="submit">Verify &amp; Signin</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { WebCam } from 'vue-web-cam';

export default {
  name: 'home',
  components: {
    'vue-web-cam': WebCam,
  },
  data: () => ({
    step: 1,
    loginView: true,
    createAccountView: false,
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
