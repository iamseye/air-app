import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';
import RegisterModal from '../authModals/registerModal';
import WelcomeModal from '../authModals/components/welcomeModal';

import api from '../../utils/api';
import './style.css';

class Header extends Component {
  state = {
    registerErrorMessage: '',
    registerSuccess: false,
  }

  registerSubmit(values) {
    console.log('submit register form');

    api.signUp(values)
      .then((json) => {
        if (json && json.data) {
          this.props.authActions.signupUser(json.data);
          this.props.authActions.hideRegisterModal();
          this.setState({ registerSuccess: true });
        } else if (json && json.errors) {
          if (json.errors.email) {
            this.setState({
              registerErrorMessage: '此帳號已被註冊!',
            });
          }
        }
      });
  }

  render() {
    const { authActions } = this.props;
    const { isRegisterModalShow } = this.props;

    return (
      <div className="header">
        <img src="/assets/img/headerlogo.svg" alt="" />
        <ul className="mainMenu">
          <li className="active"><Link to="/">我要賣車</Link></li>
          <li><Link to="/">預約體驗</Link></li>
          <li><Link to="/">如何使用?</Link></li>
          <li><Link to="#" onClick={() => authActions.showRegisterModal()}>註冊</Link></li>
          <li><Link to="/">登入</Link></li>
        </ul>

        <RegisterModal
          isOpen={isRegisterModalShow}
          hideRegisterModal={() => authActions.hideRegisterModal()}
          registerSubmit={values => this.registerSubmit(values)}
          signUp={values => authActions.signUp(values)}
          registerErrorMessage={this.state.registerErrorMessage}
        />

        <WelcomeModal />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isRegisterModalShow: state.auth.isRegisterModalShow,
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
