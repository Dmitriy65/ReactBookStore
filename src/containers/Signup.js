import { connect } from "react-redux";
import { userRegister } from "../actions/auth";
import Signup from "../components/Signup";

const mapDispatchToProps = dispatch => ({
  userRegister: user => dispatch(userRegister(user))
});

const mapStateToProps = ({ auth }) => ({
  registerError: auth.registerError
});
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
