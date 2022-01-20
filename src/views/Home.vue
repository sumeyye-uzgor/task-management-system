<template>
  <div class="scrollContainer">
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
