<template>
  <v-main>
    <toast />
    <slot />
  </v-main>
</template>

<script>
import Toast from "../components/Navbar/Toast.vue";

export default {
  components: {
    Toast,
  },
};
</script>
