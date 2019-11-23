const initialState = {
  currentUser: {},
  isLogged: localStorage.getItem("isLogged"),
  loginError: "",
  registerError: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, currentUser: action.payload, isLogged: "true" };
    case "LOGOUT_USER":
      return { ...state, currentUser: {}, isLogged: "false" };
    case "LOGIN_USER_ERROR":
      return { ...state, loginError: action.payload };
    case "REGISTER_USER_ERROR":
      return { ...state, registerError: action.payload };
    default:
      return state;
  }
};
