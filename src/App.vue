<template>
  <v-app>
    <empty v-if="getLayout === 'empty'">
      <router-view />
    </empty>
    <default v-else>
      <router-view />
    </default>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Default from "./layouts/default.vue";
import Empty from "./layouts/empty.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Empty,
    Default,
  },
  computed: {
    ...mapGetters(["userInfo"]),
    getLayout() {
      return this.$route.name === "Login" ? "empty" : "default";
    },
  },
  created() {
    if (this.userInfo.jwtToken.length > 0) {
      axios.defaults.baseURL = "http://localhost:5000/api";
      axios.defaults.headers.common = {
        Authorization: `Bearer ${this.userInfo.jwtToken}`,
      };
    }
  },
};
</script>
<style lang="scss">
html {
  overflow: hidden;
}
.scrollContainer {
  overflow-y: auto;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
}
</style>
