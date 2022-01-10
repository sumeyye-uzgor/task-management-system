<template>
  <v-snackbar
    shaped
    v-model="this.toastInfo.isOpen"
    timeout="4000"
    color="#8bc34a"
    top
    right
  >
    {{ this.toastInfo.message }}
    {{ this.toastInfo.type }}
    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="closeAlert()"> CLose </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["toastInfo"]),
  },
};
</script>

<style scoped></style>
