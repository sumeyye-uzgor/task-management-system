import axios from "axios";

let defaultAxios = {};
export default {
  registerUser: async ({ commit }, value) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        value
      );
      if (data && data.payload) {
        defaultAxios = axios.create({
          baseURL: "http://localhost:5000/api/",
          timeout: 1000,
          headers: { Authorization: "Bearer " + data.payload.jwtToken },
        });
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
  getAllTasks: async ({ commit }) => {
    try {
      const { data } = await defaultAxios.get("task");
      if (data && data.payload) {
        return data.payload;
      } else {
        throw new Error("There is a problem, try again later...");
      }
    } catch (err) {
      commit("errorHandler", "Check your email and try again...");
      setTimeout(() => {
        commit("closeToast");
      }, 4000);
    }
  },
};
export { defaultAxios };
