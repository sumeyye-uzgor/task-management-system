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
import Default from "./layouts/default.vue";
import Empty from "./layouts/empty.vue";

export default {
  name: "App",
  components: {
    Empty,
    Default,
  },
  computed: {
    getLayout() {
      return this.$route.name === "Login" ? "empty" : "default";
    },
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
  top: 5;
  left: 10px;
  width: 100%;
  padding: 20px;
}
</style>
