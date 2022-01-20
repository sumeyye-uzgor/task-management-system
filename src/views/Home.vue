<template>
  <div class="scrollContainer">
    <div v-if="tasks.length > 1">
      <div v-for="task in tasks" :key="task.id">
        {{ task.title }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { mdiClipboardEditOutline } from "@mdi/js";
import axios from "axios";
export default {
  created() {
    this.fetchData();
  },
  data() {
    return {
      mdiClipboardEditOutline,
      tasks: [],
    };
  },
  methods: {
    ...mapMutations(["logOut"]),
    logMeOut() {
      this.logOut();
      this.$router.push({ name: "Login" });
    },
    async fetchData() {
      try {
        const { data } = await axios.get("http://localhost:5000/api/task");
        if (data && data.payload) {
          console.log(data.payload);
          this.tasks = data.payload;
        } else {
          throw new Error("no data");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
};
</script>
