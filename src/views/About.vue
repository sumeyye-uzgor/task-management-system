<template>
  <div class="about">
    <h1>{{ userInfo.name }}</h1>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["userInfo"]),
  },
  created() {
    console.log(this.userInfo);
    if (this.userInfo.jwtToken?.length < 1) {
      this.$router.push("/");
    }
  },
};
</script>
