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
            v-model="task.title"
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
            v-model="task.description"
            required
          />
          <v-btn outlined class="indigo--text darken-3 mt-5" @click="updateTask"
            >Update Task</v-btn
          >
        </v-form>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import { mdiClipboardEditOutline } from "@mdi/js";
import { defaultAxios } from "../store/actions";
import { mapMutations } from "vuex";
export default {
  components: {},
  created() {
    this.fetchTask();
  },
  data() {
    return {
      mdiClipboardEditOutline,
      valid: false,
      task: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    ...mapMutations(["errorHandler"]),
    async fetchTask() {
      try {
        const { data } = await defaultAxios.get(
          `task/${this.$route.params.id}`
        );
        if (data.payload) {
          this.task = data.payload;
        } else {
          throw new Error("There is a problem, try again later...");
        }
      } catch (err) {
        this.errorHandler(err.message);
      }
    },
    async updateTask() {
      this.$refs.form.validate();
      if (this.valid) {
        try {
          const { data } = await defaultAxios.put(
            `task/${this.$route.params.id}`,
            {
              title: this.task.title,
              description: this.task.description,
            }
          );
          if (data.payload) {
            this.$refs.form.reset();
            this.description = "";
            this.title = "";
            this.$router.push({ name: "Home" });
          } else {
            throw new Error("There is a problem, try again later...");
          }
        } catch (err) {
          this.errorHandler(err.message);
        }
      }
    },
  },
};
</script>
