export const requestLoggedIn = () => {
  dsipatch({
    type: "LOGGED_IN",
  });
};

export const requestRedux = () => (dispatch) => {
  dispatch({
    type: "REQUEST_MIDDLEWARE",
    payload: "ubah data nya",
  });
};
