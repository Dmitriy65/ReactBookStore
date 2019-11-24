export const userRegister = user => {
  return dispatch => {
    return fetch("http://localhost:4000/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          console.log(data.message);
          if (data.message.includes("E11000 duplicate key error collection")) {
            dispatch(registerUserErrorAction("This email already exist"));
          }
        } else {
          localStorage.removeItem("token");
          localStorage.setItem("isLogged", false);
          window.location.href = "http://localhost:3000/login";
        }
      });
  };
};

export const userLogin = user => {
  return dispatch => {
    return fetch("http://localhost:4000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          dispatch(loginUserErrorAction(data.message));
        } else {
          localStorage.setItem("token", data.token);
          localStorage.setItem("isLogged", true);
          dispatch(loginUserAction(data.user));
          window.location.href = "http://localhost:3000/profile";
        }
      });
  };
};

export const getProfile = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:4000/api/v1/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            localStorage.removeItem("token");
          } else {
            localStorage.setItem("isLogged", true);
            dispatch(loginUserAction(data.user));
            console.log('data.user');
            console.log(data.user);
            if (window.location.href !== "http://localhost:3000/profile") {
              window.location.href = "http://localhost:3000/profile";
            }
          }
        });
    }
  };
};

export const userLogout = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      localStorage.removeItem("token");
    }
    localStorage.setItem("isLogged", false);
    dispatch(logoutUserAction());
    window.location.href = "http://localhost:3000/";
  };
};

export const testUserLogin = user => {
  return dispatch => {
    localStorage.setItem("isLogged", true);
    dispatch(loginUserAction(user));
    window.location.href = "http://localhost:3000/profile";
  };
};

const loginUserAction = user => ({
  type: "LOGIN_USER",
  payload: user
});

const loginUserErrorAction = err => ({
  type: "LOGIN_USER_ERROR",
  payload: err
});

const registerUserErrorAction = err => ({
  type: "REGISTER_USER_ERROR",
  payload: err
});

export const logoutUserAction = () => ({
  type: "LOGOUT_USER"
});
