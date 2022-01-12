import axios from "axios";
export default {
  registerUser2: async ({ commit }, value) => {
    try {
      const response = await axios.post(
        "https://harmantepenaturel.com/api/register",
        value
      );
      return response;
    } catch (err) {
      commit("errorHandler", err);
      return;
    }
  },
  registerUser: async ({ commit }, value) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        value
      );
      if (data.payload) {
        commit("setUserInfo", { ...data.payload });
      } else {
        throw new Error("You can not log in!");
      }
    } catch (err) {
      commit("errorHandler", err);
    }
  },
};
