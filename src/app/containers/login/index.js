import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from '../../components/Page';

// const loginData = {
//   name: "Awesome User",
//   email: "user@mydomain.com",
//   password: "password123"
// };

const Login = props => {
  return (
    <Page id="login" title="Login" description="We need to log in to stuff." />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ getUserAction }, dispatch);

export default connect(
  mapStateToProps,
  null
)(Login);
