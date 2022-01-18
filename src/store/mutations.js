export default {
  setUserInfo: (state, value) => {
    state.userInfo = value;
  },
  errorHandler: (state, value) => {
    state.toastMessage = {
      type: "error",
      message: value,
      isOpen: true,
    };
  },
  closeToast: (state) => {
    state.toastMessage = {
      type: "",
      message: "",
      isOpen: false,
    };
  },
  successHandler: (state, value) => {
    state.toastMessage = {
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
