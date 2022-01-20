<template>
  <v-snackbar
    shaped
    v-model="toastInfo.isOpen"
    timeout="4000"
    :color="getColor"
    top
    right
  >
    {{ toastInfo.message }}
    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="closeToast()"> X </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["toastInfo"]),
    getColor() {
      let color = "";
      switch (this.toastInfo.type) {
        case "success":
          color = "green";
          break;
        case "error":
          color = "red";
          break;
        default:
          color = "blue";
          break;
      }
      return color;
    },
  },
  methods: {
    ...mapMutations(["closeToast"]),
  },
};
</script>

<style scoped></style>
