<template>
  <div class="d-flex flex-row">
    <side-bar />
    <v-main style="position: relative">
      <toast />
      <slot />
    </v-main>
  </div>
</template>

<script>
import Toast from "../components/Navbar/Toast.vue";
import SideBar from "../components/Navbar/SideBar.vue";

export default {
  name: "App",
  components: {
    Toast,
    SideBar,
  },
};
</script>
