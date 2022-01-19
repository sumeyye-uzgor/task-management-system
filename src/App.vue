<template>
  <v-app>
    <toast />

    <v-main>
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
  methods: {},
};
</script>
