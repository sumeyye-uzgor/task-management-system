<template>
  <div class="scrollContainer indigo lighten-5">
    <v-card shaped elevation="8" class="pa-10">
      <v-card-actions class="d-block">
        <v-form ref="form" v-model="valid">
          <v-text-field
            class="indigo--text darken-3"
            color="indigo darken-3"
            label="Task Title"
            type="text"
            :rules="[(v) => v.length > 0 || 'Item is required']"
            outlined
            hide-details="auto"
            v-model="title"
            required
          />
          <v-textarea
            outlined
            class="indigo--text darken-3 mt-5"
            color="indigo darken-3"
            label="Task Description"
            type="text"
            :rules="[(v) => v.length > 0 || 'Item is required']"
            hide-details="auto"
            v-model="description"
            required
          />
          <v-select
            outlined
            required
            class="indigo--text darken-3 mt-5"
            color="indigo darken-3"
            v-model="department"
            label="Task Department"
            :rules="[(v) => !!v || 'Item is required']"
            :items="departments"
            :reduce="(department) => department.name"
          />
          <v-btn outlined class="indigo--text darken-3" @click="createTask"
            >Create New Task</v-btn
          >
        </v-form>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import { mdiClipboardEditOutline } from "@mdi/js";
import { mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
      mdiClipboardEditOutline,
      valid: false,
      title: "",
      description: "",
      department: 0,
      departments: [
        { text: "HR Department", value: 1 },
        { text: "Sales Department", value: 2 },
        { text: "Marketing Department", value: 3 },
      ],
    };
  },
  methods: {
    ...mapActions(["createNewTask"]),
    async createTask() {
      this.$refs.form.validate();
      if (this.valid) {
        const isCreated = await this.createNewTask({
          title: this.title,
          description: this.description,
          assignedDepartment: this.department,
        });
        if (isCreated) {
          this.$refs.form.reset();
          this.department = 0;
          this.description = "";
          this.title = "";
          this.$router.push({ name: "Home" });
        }
      }
    },
  },
};
</script>
