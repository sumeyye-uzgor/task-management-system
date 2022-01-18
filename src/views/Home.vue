<template>
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="logMeOut">
        <span class="mr-2">LogOut</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <div class="about">
      <h1>{{ userInfo.name }}</h1>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["logOut"]),
    logMeOut() {
      this.logOut();

      this.$router.push({ name: "Login" });
    },
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  created() {
    console.log(this.userInfo);
    // if (this.userInfo.jwtToken?.length < 1) {
    //   this.$router.push("/");
    // }
  },
};
</script>
