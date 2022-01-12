export default {
  userInfo: (state) => state.userInfo,
  token: ({ userInfo }) => userInfo.jwtToken,
  toastInfo: (state) => state.toastInfo,
};
