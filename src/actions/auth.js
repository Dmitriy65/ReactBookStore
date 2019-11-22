export const userRegister = user => {
  return () => {
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
          console.log(data.message);
        } else {
          localStorage.setItem("token", data.token);
          localStorage.setItem("isLogged", true);
          dispatch(loginUser(data.user));
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
            dispatch(loginUser(data.user));
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
      localStorage.setItem("isLogged", false);
      dispatch(logoutUser());
      window.location.href = "http://localhost:3000/";
    }
  };
};

const loginUser = user => ({
  type: "LOGIN_USER",
  payload: user
});
  
export const logoutUser = () => ({
  type: "LOGOUT_USER"
});
