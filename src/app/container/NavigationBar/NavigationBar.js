import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import MenuItem from "react-bootstrap/lib/MenuItem";
import history from "browserHistory";

import "./style.scss";

class NavigationBar extends Component {
  goToProfile = () => {
    const { authUser } = this.props;
    const profileId = authUser && authUser.get("profileId");

    if (profileId) {
      history.push(`/doctor/${profileId}`);
    }
  };

  gotoExplained = () => {
    const { authUser } = this.props;
    const profileId = authUser && authUser.get("profileId");

    if (profileId) {
      history.push(`/personal/${profileId}`);
    }
  };

  renderLoggedIn() {
    const { authUser } = this.props;

    return (
      <React.Fragment>
        <a className="nav__top-bell" />
        <Menu className="profile-menu">
          <MenuItem eventKey="1" onClick={this.gotoPlans}>
            NBN Plans
          </MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="2" onClick={this.gotoSpread}>
            Spread
          </MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="3" onClick={this.gotoExplained}>
            NBN Explained
          </MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4" onClick={this.gotoMoving}>
            Moving
          </MenuItem>
        </Menu>
      </React.Fragment>
    );
  }

  renderLoggedOut() {
    return (
      <React.Fragment>
        <a className="nav__top-link" onClick={this.props.showLogin}>
          Sign In
        </a>
      </React.Fragment>
    );
  }

  render() {
    const { authUser } = this.props;
    return (
      <nav className="nav">
        <div className="nav-desktop">
          {authUser ? this.renderLoggedIn() : this.renderLoggedOut()}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  authUser: makeSelectAuthUser()
});

const withConnect = connect(
  mapStateToProps,
  null
);

export default withConnect(NavigationBar);
