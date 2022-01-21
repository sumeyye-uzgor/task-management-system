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
      <v-list-item>
        {{ task.title }}
      </v-list-item>
      <v-list-item>
        {{ task.title }}
      </v-list-item>
    </v-list>
    <v-card-actions>
      <v-btn outlined>deneme</v-btn>
      <v-btn outlined>deneme</v-btn>
      <v-btn outlined>deneme</v-btn>
      <v-btn outlined>deneme</v-btn>
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
        assignement: "",
      }),
    },
  },
};
</script>
<style lang="scss" scoped></style>
