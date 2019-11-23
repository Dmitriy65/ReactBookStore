import { connect } from "react-redux";
import { userLogin, testUserLogin } from "../actions/auth";
import Login from "../components/Login";

const mapDispatchToProps = dispatch => ({
  userLogin: user => dispatch(userLogin(user)),
  testUserLogin: user => dispatch(testUserLogin(user))
});

const mapStateToProps = ({ auth }) => ({
  loginError: auth.loginError
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
