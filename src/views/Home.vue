<template>
  <div class="scrollContainer indigo lighten-5">
    <div v-if="tasks.length > 0">
      <task-card
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @refresh="fetchData"
      />
    </div>
  </div>
</template>
<script>
import { mdiClipboardEditOutline } from "@mdi/js";
import TaskCard from "../components/TaskCard.vue";
import { mapActions } from "vuex";
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
    ...mapActions(["getAllTasks"]),
    async fetchData() {
      this.tasks = await this.getAllTasks();
    },
  },
};
</script>
