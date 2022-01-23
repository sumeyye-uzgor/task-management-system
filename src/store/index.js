import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({ userInfo: state.userInfo }),
});

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {},
  plugins: [vuexLocal.plugin],
});
