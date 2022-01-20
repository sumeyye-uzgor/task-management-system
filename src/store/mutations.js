export default {
  setUserInfo: (state, value) => {
    state.userInfo = value;
  },
  errorHandler: (state, value) => {
    state.toastInfo = {
      type: "error",
      message: value,
      isOpen: true,
    };
  },

  closeToast: (state) => {
    state.toastInfo = {
      type: "",
      message: "",
      isOpen: false,
    };
  },
  successHandler: (state, value) => {
    state.toastInfo = {
      type: "error",
      message: value,
      isOpen: true,
    };
  },
  logOut: (state) => {
    state.userInfo = {
      department: 0,
      id: 0,
      name: "",
      email: "",
      jwtToken: "",
    };
  },
};
