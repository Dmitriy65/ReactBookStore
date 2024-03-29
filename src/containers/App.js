import { connect } from "react-redux";
import { getProfile } from "./../actions/auth";
import App from "../components/App";

const mapDispatchToProps = dispatch => ({
  getProfile: () => dispatch(getProfile())
});

const mapStateToProps = ({ auth }) => ({
  isLogged: auth.isLogged
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
