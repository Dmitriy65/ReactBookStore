import { connect } from "react-redux";
import { userLogin } from "../actions/auth";
import Login from "../components/Login";

const mapDispatchToProps = dispatch => ({
  userLogin: user => dispatch(userLogin(user))
});

export default connect(null, mapDispatchToProps)(Login);
