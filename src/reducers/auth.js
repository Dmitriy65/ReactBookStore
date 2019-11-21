const initialState = {
  currentUser: {},
  isLogged: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, currentUser: action.payload, isLogged: true };
    case "LOGOUT_USER":
      return { ...state, currentUser: {}, isLogged: false };
    default:
      return state;
  }
};
