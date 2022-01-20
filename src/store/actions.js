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
};
