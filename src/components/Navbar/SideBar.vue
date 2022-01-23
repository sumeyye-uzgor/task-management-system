<template>
  <v-navigation-drawer
    expand-on-hover
    permanent
    height="100vh"
    width="310"
    color="white"
    light
  >
    <v-list nav dense>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo darken-3">{{ mdiAlphaTBox }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          <v-icon color="indigo darken-3"> {{ mdiAlphaABox }} </v-icon>
          <v-icon color="indigo darken-3"> {{ mdiAlphaSBox }} </v-icon>
          <v-icon color="indigo darken-3"> {{ mdiAlphaKBox }} </v-icon>
        </v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo darken-3">{{ mdiAlphaMBox }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          <v-icon color="indigo darken-3"> {{ mdiAlphaABox }} </v-icon>
          <v-icon color="indigo darken-3"> {{ mdiAlphaNBox }} </v-icon>
          <v-icon color="indigo darken-3"> {{ mdiAlphaABox }} </v-icon>
          <v-icon color="indigo darken-3"> {{ mdiAlphaGBox }} </v-icon>
          <v-icon color="indigo darken-3"> {{ mdiAlphaEBox }} </v-icon>
          <v-icon color="indigo darken-3"> {{ mdiAlphaMBox }} </v-icon>
          <v-icon color="indigo darken-3"> {{ mdiAlphaEBox }} </v-icon>
          <v-icon color="indigo darken-3"> {{ mdiAlphaNBox }} </v-icon>
          <v-icon color="indigo darken-3"> {{ mdiAlphaTBox }} </v-icon>
        </v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo darken-3">{{ mdiAlphaSBox }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          <v-icon color="indigo darken-3"> {{ mdiAlphaYBox }} </v-icon>
          <v-icon color="indigo darken-3"> {{ mdiAlphaSBox }} </v-icon>
          <v-icon color="indigo darken-3"> {{ mdiAlphaTBox }} </v-icon>
          <v-icon color="indigo darken-3"> {{ mdiAlphaEBox }} </v-icon>
          <v-icon color="indigo darken-3"> {{ mdiAlphaMBox }} </v-icon>
        </v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo darken-3">{{ mdiAccountCircle }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="indigo--text darken-3">
          {{ userInfo.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item link :to="{ name: 'Home' }">
        <v-list-item-icon>
          <v-icon color="indigo darken-3">{{ mdiClipboardList }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="indigo--text darken-3"
          >All Tasks</v-list-item-title
        >
      </v-list-item>
      <v-list-item link :to="{ name: 'MyTasks' }">
        <v-list-item-icon>
          <v-icon color="indigo darken-3">{{
            mdiAccountDetailsOutline
          }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="indigo--text darken-3"
          >My Tasks</v-list-item-title
        >
      </v-list-item>
      <v-list-item link :to="{ name: 'PendingTasks' }">
        <v-list-item-icon>
          <v-icon color="indigo darken-3">{{ mdiClockCheck }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="indigo--text darken-3"
          >Pending Tasks</v-list-item-title
        >
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon color="indigo darken-3">{{ mdiPlaylistPlus }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="indigo--text darken-3"
          >Create New Task</v-list-item-title
        >
      </v-list-item>
      <v-list-item @click="resetData">
        <v-list-item-icon>
          <v-icon color="indigo darken-3">{{ mdiReloadAlert }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="indigo--text darken-3"
          >Reset Data</v-list-item-title
        >
      </v-list-item>
      <v-list-item @click="logOutUser">
        <v-list-item-icon>
          <v-icon color="indigo darken-3">{{ mdiExitToApp }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="indigo--text darken-3"
          >Log Out</v-list-item-title
        >
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
  mdiAccountCircle,
} from "@mdi/js";
import { mapGetters, mapMutations } from "vuex";
import { defaultAxios } from "../../store/actions";
export default {
  name: "SideBar",
  methods: {
    ...mapMutations(["logOut"]),
    logOutUser() {
      this.logOut();
      this.$router.push({ name: "Login" });
    },
    async resetData() {
      try {
        const { data } = await defaultAxios.get("task/reset-data");
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
  computed: {
    ...mapGetters(["userInfo"]),
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
      mdiAccountCircle,
    };
  },
};
</script>
