<template>
  <v-card
    shaped
    class="indigo--text darken-3"
    light
    style="border-color: #590329"
    elevation="2"
  >
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
      <v-btn outlined class="indigo--text darken-3">Accept</v-btn>
      <v-btn outlined class="indigo--text darken-3">Reject</v-btn>
      <v-btn outlined class="indigo--text darken-3">Complete</v-btn>
      <v-btn outlined class="indigo--text darken-3">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      default: () => ({
        title: "",
        id: "",
        assignedDepartment: 0,
        status: 0,
      }),
    },
  },
  computed: {
    getAssignedDepartment() {
      let department = "";
      switch (this.task.assignedDepartment) {
        case 1:
          department = "Human Resources";
          break;
        case 2:
          department = "Sales and Marketing";
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
          status = "In Progress";
          break;
        case 2:
          status = "Completed";
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
