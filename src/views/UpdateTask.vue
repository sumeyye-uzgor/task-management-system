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
          <v-btn outlined class="indigo--text darken-3 mt-5" @click="update"
            >Update Task</v-btn
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
  created() {
    this.id = this.$route.params.id;
    this.description = this.$route.query.description;
    this.title = this.$route.query.title;
  },
  data() {
    return {
      mdiClipboardEditOutline,
      valid: false,
      title: "",
      description: "",
      id: "",
    };
  },
  methods: {
    ...mapActions(["updateTask"]),
    async update() {
      this.$refs.form.validate();
      if (this.valid) {
        const isUpdated = await this.updateTask({
          id: this.id,
          title: this.title,
          description: this.description,
        });
        if (isUpdated) {
          this.$refs.form.reset();
          this.description = "";
          this.title = "";
          this.$router.push({ name: "Home" });
        }
      }
    },
  },
};
</script>
