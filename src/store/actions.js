import axios from "axios";

export default {
  registerUser2: ({ dispatch }, value) => {
    return axios
      .post("https://harmantepenaturel.com/api/register", value)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        dispatch("errorHandler", err);
      });
  },
  registerUser: ({ dispatch }, value) => {
    axios
      .post("http://localhost:5000/api/auth/login", value)
      .then(({ data }) => {
        if (data.payload) {
          dispatch("setUserInfo", data.payload);
        } else {
          console.log(data);
          throw new Error("You can not log in!");
        }
      })
      .catch((err) => {
        dispatch("errorHandler", err);
      });
  },
};
