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
  createNewTask: async ({ commit }, value) => {
    try {
      const { data } = await axios.post("task", value);
      if (data.payload) {
        commit("successHandler", "Task created succesfully!");
        return true;
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
  getMyTasks: async ({ commit }) => {
    try {
      const { data } = await axios.get("task/my-tasks");
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
  getPendingTasks: async ({ commit }) => {
    try {
      const { data } = await axios.get("task/pendings");
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
  updateTask: async ({ commit }, value) => {
    try {
      const { data } = await axios.put(`task/${value.id}`, {
        title: value.title,
        description: value.description,
      });
      if (data.payload) {
        commit("successHandler", "Task updated succesfully!");
        return true;
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
  resetData: async ({ commit }) => {
    try {
      const { data } = await axios.get("task/reset-data");
      if (data && data.payload) {
        commit("successHandler", "Data resetted succesfully!");
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
  deleteTask: async ({ commit }, value) => {
    try {
      const { data } = await axios.delete(`task/${value}`);
      if (data && data.payload) {
        commit("successHandler", "Task deleted succesfully!");
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
  completeTask: async ({ commit }, value) => {
    try {
      const { data } = await axios.get(`task/complete/${value}`);
      if (data && data.payload) {
        commit("successHandler", "Task completed succesfully!");
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
  rejectTask: async ({ commit }, value) => {
    try {
      const { data } = await axios.get(`task/reject/${value}`);
      if (data && data.payload) {
        commit("successHandler", "Task completed succesfully!");
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
