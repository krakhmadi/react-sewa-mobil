const initialState = {
  status: "not_LoggedIn",
};

const AuthLogin = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return { ...state, status: action.payload };

    default:
      return { ...state };
  }
};

export default AuthLogin;
