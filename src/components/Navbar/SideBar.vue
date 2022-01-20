<template>
  <v-navigation-drawer
    expand-on-hover
    permanent
    height="100vh"
    width="310"
    color="indigo darken-3"
    dark
  >
    <v-list nav dense>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>{{ mdiAlphaTBox }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          <v-icon> {{ mdiAlphaABox }} </v-icon>
          <v-icon> {{ mdiAlphaSBox }} </v-icon>
          <v-icon> {{ mdiAlphaKBox }} </v-icon>
        </v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>{{ mdiAlphaMBox }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          <v-icon> {{ mdiAlphaABox }} </v-icon>
          <v-icon> {{ mdiAlphaNBox }} </v-icon>
          <v-icon> {{ mdiAlphaABox }} </v-icon>
          <v-icon> {{ mdiAlphaGBox }} </v-icon>
          <v-icon> {{ mdiAlphaEBox }} </v-icon>
          <v-icon> {{ mdiAlphaMBox }} </v-icon>
          <v-icon> {{ mdiAlphaEBox }} </v-icon>
          <v-icon> {{ mdiAlphaNBox }} </v-icon>
          <v-icon> {{ mdiAlphaTBox }} </v-icon>
        </v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>{{ mdiAlphaSBox }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          <v-icon> {{ mdiAlphaYBox }} </v-icon>
          <v-icon> {{ mdiAlphaSBox }} </v-icon>
          <v-icon> {{ mdiAlphaTBox }} </v-icon>
          <v-icon> {{ mdiAlphaEBox }} </v-icon>
          <v-icon> {{ mdiAlphaMBox }} </v-icon>
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item link :to="{ name: 'Home' }">
        <v-list-item-icon>
          <v-icon>{{ mdiClipboardList }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>All Tasks</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>{{ mdiAccountDetailsOutline }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>My Tasks</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>{{ mdiClockCheck }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Pending Tasks</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>{{ mdiPlaylistPlus }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Create New Task</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>{{ mdiReloadAlert }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Reset Data</v-list-item-title>
      </v-list-item>
      <v-list-item @click="logOutUser">
        <v-list-item-icon>
          <v-icon>{{ mdiExitToApp }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Log Out</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import {
  mdiClipboardEditOutline,
  mdiClipboardList,
  mdiAlphaTBox,
  mdiAlphaMBox,
  mdiAlphaSBox,
  mdiAlphaKBox,
  mdiAlphaABox,
  mdiAlphaNBox,
  mdiAlphaGBox,
  mdiAlphaEBox,
  mdiAlphaYBox,
  mdiAccountDetailsOutline,
  mdiPlaylistPlus,
  mdiReloadAlert,
  mdiExitToApp,
  mdiClockCheck,
} from "@mdi/js";
import { mapMutations } from "vuex";
export default {
  name: "SideBar",
  methods: {
    ...mapMutations(["logOut"]),
    logOutUser() {
      this.logOut();
      this.$router.push({ name: "Login" });
    },
  },
  data() {
    return {
      mdiClipboardEditOutline,
      mdiClipboardList,
      mdiAlphaTBox,
      mdiAlphaSBox,
      mdiAlphaABox,
      mdiAlphaMBox,
      mdiAlphaKBox,
      mdiAlphaNBox,
      mdiAlphaGBox,
      mdiAlphaEBox,
      mdiAlphaYBox,
      mdiAccountDetailsOutline,
      mdiPlaylistPlus,
      mdiReloadAlert,
      mdiExitToApp,
      mdiClockCheck,
    };
  },
};
</script>
