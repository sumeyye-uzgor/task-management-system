<template>
  <v-card shaped class="indigo--text darken-3" light elevation="2">
    <v-card-title>{{ task.title }}</v-card-title>
    <v-list>
      <v-list-item class="indigo--text darken-3">
        Assigned To: {{ getAssignedDepartment }}
      </v-list-item>
      <v-list-item class="indigo--text darken-3">
        Status: {{ getStatus }}
      </v-list-item>
    </v-list>
    <v-card-actions>
      <v-btn
        outlined
        class="indigo--text darken-3"
        v-if="getIsMyTask"
        @click="completeTask"
        >Complete</v-btn
      >
      <v-btn
        outlined
        class="indigo--text darken-3"
        v-if="getIsMyTask"
        @click="rejectTask"
        >Reject</v-btn
      >
      <v-btn
        outlined
        class="indigo--text darken-3"
        v-if="getIsCreatedByMe"
        @click="updateTask"
        >Update</v-btn
      >
      <v-btn
        outlined
        class="indigo--text darken-3"
        v-if="getIsCreatedByMe"
        @click="deleteTask"
        >Delete</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    updateTask() {
      this.$router.push({
        name: "UpdateTask",
        params: { id: this.task.id },
        query: { title: this.task.title, description: this.task.description },
      });
    },
    deleteTask() {
      console.log("task deleted");
    },
    rejectTask() {
      console.log("task rejected");
    },
    completeTask() {
      console.log("task completed");
    },
  },
  props: {
    task: {
      type: Object,
      default: () => ({
        title: "",
        id: "",
        assignedDepartment: 0,
        status: 0,
        user: {
          id: 0,
          name: "",
        },
      }),
    },
  },
  computed: {
    ...mapGetters(["userInfo"]),
    getIsMyTask() {
      return this.userInfo.department === this.task.assignedDepartment;
    },
    getIsCreatedByMe() {
      return this.userInfo.id === this.task.user.id;
    },
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
};
</script>
<style lang="scss" scoped></style>
