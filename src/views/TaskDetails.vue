<template>
  <div class="scrollContainer indigo lighten-5">
    <v-card
      shaped
      class="indigo--text darken-3"
      light
      elevation="2"
      v-if="task.title"
    >
      <v-card-title>{{ task.title }}</v-card-title>
      <v-card-subtitle class="mt-1 font-italic">{{
        task.description
      }}</v-card-subtitle>
      <v-list>
        <v-list-item>Assigned To: {{ getAssignedDepartment }}</v-list-item>
        <v-list-item>Status: {{ getStatus }}</v-list-item>
        <v-list-item>Created By: {{ task.user.name }}</v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  created() {
    this.fetchData();
  },
  data() {
    return {
      task: {},
    };
  },
  computed: {
    getAssignedDepartment() {
      let department = "";
      switch (this.task.assignedDepartment) {
        case 1:
          department = "HR Department";
          break;
        case 2:
          department = "Sales Department";
          break;
        case 3:
          department = "Marketing Department";
          break;
        default:
          break;
      }
      return department;
    },
    getStatus() {
      let status = "";
      switch (this.task.status) {
        case 0:
          status = "Pending";
          break;
        case 1:
          status = "Completed";
          break;
        case 2:
          status = "Rejected";
          break;
        default:
          break;
      }
      return status;
    },
  },
  methods: {
    ...mapActions(["getTaskDetails"]),
    async fetchData() {
      this.task = await this.getTaskDetails(this.$route.params.id);
    },
  },
};
</script>
