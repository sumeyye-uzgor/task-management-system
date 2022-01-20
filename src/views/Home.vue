<template>
  <!-- <v-app-bar app color="indigo darken-3" dark>
      <div class="d-flex align-center">
        <v-icon height="200px" width="200" contain>{{
          mdiClipboardEditOutline
        }}</v-icon>

        <div class="ml-3">Task Management System</div>
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="logMeOut">
        <span class="mr-2">LogOut</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->
  <div>
    <h1>{{ userInfo.name }}</h1>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { mdiClipboardEditOutline } from "@mdi/js";
export default {
  data() {
    return {
      mdiClipboardEditOutline,
    };
  },
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
};
</script>
