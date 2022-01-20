<template>
  <v-app>
    <v-main>
      <toast />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Toast from "./components/Navbar/Toast.vue";

export default {
  name: "App",
  components: {
    Toast,
  },
};
</script>
