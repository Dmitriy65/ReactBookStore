import { connect } from "react-redux";
import { userRegister } from "../actions/auth";
import Signup from "../components/Signup";

const mapDispatchToProps = dispatch => ({
  userRegister: user => dispatch(userRegister(user))
});

export default connect(null, mapDispatchToProps)(Signup);
