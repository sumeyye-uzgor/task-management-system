import axios from "axios";

export default {
  registerUser: async ({ commit }, value) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        value
      );
      if (data && data.payload) {
        commit("setUserInfo", { ...data.payload });
        return data.payload.jwtToken;
      } else {
        throw new Error("You can not log in!");
      }
    } catch (err) {
      commit("errorHandler", "Check your email and try again...");
      setTimeout(() => {
        commit("closeToast");
      }, 4000);
    }
  },
  getAllTasks: async ({ commit }) => {
    try {
      const { data } = await axios.get("task");
      if (data && data.payload) {
        return data.payload;
      } else {
        throw new Error("There is a problem, try again later...");
      }
    } catch (err) {
      commit("errorHandler", "There is a problem, try again later...");
      setTimeout(() => {
        commit("closeToast");
      }, 4000);
    }
  },
};
