import Login from './Login';
import React from 'react';
import { connect } from 'react-redux';
import { LoginUser } from '../../redux/auth-reducer'
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class LoginContainer extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Login
        {...this.props}
        LoginUser={this.props.LoginUser} />
    )
  }
}

let mapStateToProps = (state) => ({

});

export default compose(
  connect(mapStateToProps, { LoginUser }),
  withRouter,
  withAuthRedirect,
)(LoginContainer);