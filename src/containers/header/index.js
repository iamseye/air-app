import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';
import RegisterModal from '../authModals/RegisterModal';
import './style.css';
import Modal from 'react-modal';


class Header extends Component {
  state = {
  }

  registerSubmit() {
    console.log('submit register form');
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
          registerSubmit={() => this.registerSubmit()}
        />
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
