<template>
  <v-container>
    <!-- <v-alert type="success" style="display:hidden"></v-alert> -->
    <v-text-field
      label="Email"
      type="email"
      hide-details="auto"
      v-model="email"
    ></v-text-field>
    <v-btn @click="registerMethod">Sign In</v-btn>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "HelloWorld",

  data: () => ({
    email: "",
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
          if (data.payload) {
            console.log(data.payload);
          } else {
            console.log(data);
            throw new Error("You can not logged in!");
          }
        })
        .catch((err) => console.error(err));
    },
    registerMethod: function () {
      this.registerUser({ email: this.email }).then(() =>
        this.$router.push("/about")
      );
    },
  },
};
</script>
