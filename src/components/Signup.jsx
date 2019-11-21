import React, { Component } from "react";

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
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up In the BookStore</h1>

        <label>Username</label>
        <input
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br />

        <label>Email</label>
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />

        <input type="submit" />
      </form>
    );
  }
}

export default SignUp;
