import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class SignUp extends Component {
  state = {
    name: "",
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
    this.props.userRegister(this.state);
  };

  render() {
    const { registerError } = this.props;
    const errorMessage = registerError ? (
      <span style={{ fontSize: "15px", color: "red" }}>{registerError}</span>
    ) : (
      ""
    );
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ textAlign: "center", marginTop: "250px" }}
      >
        <h1>Sign Up In the BookStore</h1>

        <TextField
          name="name"
          placeholder="userName"
          value={this.state.name}
          onChange={this.handleChange}
          error={registerError}
          helperText={this.state.email === "" ? "Empty field!" : ""}
        />
        <br />

        <TextField
          name="email"
          placeholder="Email"
          value={this.state.email}
          error={registerError}
          onChange={this.handleChange}
          helperText={this.state.email === "" ? "Empty field!" : ""}
        />
        <br />

        <TextField
          type="password"
          name="password"
          placeholder="Password"
          error={registerError}
          value={this.state.password}
          onChange={this.handleChange}
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

export default SignUp;
