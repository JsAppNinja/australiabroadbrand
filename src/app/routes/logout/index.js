import { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//import { logoutUser } from '../../../modules/auth';

import { userLogoutAction } from "../../../modules/auth/actions";
class Logout extends Component {
  componentWillMount() {
    this.props.userLogoutAction();
    this.props.history.push("/");
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ userLogoutAction }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Logout);
