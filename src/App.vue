<template>
  <v-app>
    <toast />

    <v-main>
      <router-view />
    </v-main>
    <v-btn @click="toRouter">Login</v-btn>
  </v-app>
</template>

<script>
import Toast from "./components/Navbar/Toast.vue";

export default {
  name: "App",
  components: {
    Toast,
  },
  methods: {
    toRouter() {
      this.$router.push("/login");
    },
  },
};
</script>
