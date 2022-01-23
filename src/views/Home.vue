<template>
  <div class="scrollContainer indigo lighten-5">
    <div v-if="tasks.length > 1">
      <task-card v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { defaultAxios } from "../store/actions";
import { mdiClipboardEditOutline } from "@mdi/js";
import TaskCard from "../components/TaskCard.vue";
export default {
  components: {
    TaskCard,
  },
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
        const { data } = await defaultAxios.get("task");
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
