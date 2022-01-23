<template>
  <div class="scrollContainer indigo lighten-5">
    <div v-if="tasks.length > 0">
      <task-card v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>
<script>
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
    async fetchData() {
      try {
        const { data } = await defaultAxios.get("task/pendings");
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
};
</script>
