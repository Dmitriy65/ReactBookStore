import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    //for interaction with app if you can`t access to DB.
    if (
      this.state.email === "test@test.ru" &&
      this.state.password === "test123"
    ) {
      this.props.testUserLogin(this.state);
    } else {
      this.props.userLogin(this.state);
    }

    this.setState({
      password: ""
    });
  };

  render() {
    const { loginError } = this.props;
    const errorMessage = loginError ? (
      <span style={{ fontSize: "15px", color: "red" }}>{loginError}</span>
    ) : (
      ""
    );
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ textAlign: "center", marginTop: "250px" }}
      >
        <h1>Login in the BookStore</h1>

        <TextField
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
          error={errorMessage}
          helperText={this.state.email === "" ? "Empty field!" : ""}
        />
        <br />

        <TextField
          placeholder="Password"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          error={errorMessage}
          helperText={this.state.email === "" ? "Empty field!" : ""}
        />

        <br />
        <input
          type="submit"
          style={{
            marginTop: "15px",
            borderRadius: "100px",
            padding: "5px",
            backgroundColor: "aqua"
          }}
        />
        <br />
        {errorMessage}
      </form>
    );
  }
}

export default Login;
