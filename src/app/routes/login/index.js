import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Page from "../../components/page";

//import { loginUser } from '../../../modules/auth';
import { getUserAction } from "../../../modules/auth/actions";

const loginData = {
  name: "Awesome User",
  email: "user@mydomain.com",
  password: "password123"
};

const Login = props => {
  console.log("render");
  return (
    <Page id="login" title="Login" description="We need to log in to stuff.">
      <button onClick={() => props.getUserAction(loginData)}>
        Click the button...
      </button>
      {props.isAuthenticated ? <p>abcdekfjls</p> : <p>failed</p>}
    </Page>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getUserAction }, dispatch);

// const mapDispatchToProps = {
//   loginUser: userLoginAction
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
