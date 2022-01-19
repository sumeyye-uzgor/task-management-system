<template>
  <v-container fill-height fluid class="indigo lighten-5">
    <!-- <v-alert type="success" style="display:hidden"></v-alert> -->
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
            @click="registerMethod"
            >LOGIN</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapActions, mapMutations } from "vuex";
import { mdiEmail } from "@mdi/js";

export default {
  name: "HelloWorld",

  data: () => ({
    email: "",
    mdiEmail,
  }),
  methods: {
    ...mapActions(["registerUser"]),
    ...mapMutations(["errorHandler"]),
    register: function () {
      axios
        .post("http://localhost:5000/api/auth/login", {
          email: this.email,
        })
        .then(({ data }) => {
          if (!data.payload) {
            throw new Error("You can not logged in!");
          }
        })
        .catch((err) => console.error(err));
    },
    registerMethod: function () {
      this.registerUser({ email: this.email }).then(() =>
        this.$router.push({ name: "Home" })
      );
    },
  },
};
</script>
