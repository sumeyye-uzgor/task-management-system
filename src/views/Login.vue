<template>
  <v-container fill-height fluid class="indigo lighten-5">
    <v-row align-items="center" justify="center">
      <v-col xs="12" md="6" lg="4">
        <v-card
          class="white pa-4 d-flex justify-center align-center flex-column"
          elevation="2"
          rounded="10"
        >
          <v-text-field
            class="indigo--text darken-3"
            color="indigo darken-3"
            label="Email"
            type="email"
            width="200"
            hint="We will never share your email!"
            persistent-hint
            hide-details="auto"
            v-model="email"
          >
          </v-text-field>
          <v-btn
            class="mt-4 indigo--text darken-3"
            width="100"
            outlined
            dark
            @click="register"
            >LOGIN</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { mdiEmail } from "@mdi/js";
import axios from "axios";

export default {
  name: "Login",
  data: () => ({
    email: "",
    mdiEmail,
  }),
  computed: {
    ...mapGetters(["userInfo"]),
  },
  methods: {
    ...mapActions(["registerUser"]),
    register: async function () {
      const token = await this.registerUser({ email: this.email });
      axios.defaults.baseURL = "http://localhost:5000/api";
      axios.defaults.headers.common = {
        Authorization: `Bearer ${token}`,
      };
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
