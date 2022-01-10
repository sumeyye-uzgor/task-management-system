<template>
  <v-container>
    <!-- <v-alert type="success" style="display:hidden"></v-alert> -->
    <v-text-field
      label="Email"
      type="email"
      hide-details="auto"
      v-model="email"
    ></v-text-field>
    <v-btn @click="register">Sign In</v-btn>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "HelloWorld",

  data: () => ({
    email: "",
  }),
  methods: {
    ...mapActions(["registerUser"]),
    register: function () {
      axios
        .post("http://localhost:5000/api/auth/login", {
          email: this.email,
        })
        .then(({ data }) => {
          if (data.payload) {
            console.log(data.payload);
          } else {
            console.log(data);
            throw new Error("You can not logged in!");
          }
        })
        .catch((err) => console.error(err));
    },
  },

  updated() {
    console.log(this.email);
  },
};
</script>
