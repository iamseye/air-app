import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';
import RegisterModal from '../authModals/registerModal';
import WelcomeModal from '../authModals/components/welcomeModal';
import VerifyPhoneModal from '../authModals/verifyPhoneModal';
import VerifySMSCodeModal from '../authModals/verifySMSCodeModal';
import EmailModal from '../authModals/emailModal';
import LoginMethodModal from '../authModals/loginMethodModal';
import LoginModal from '../authModals/loginModal';

import api from '../../utils/api';
import './style.css';

class Header extends Component {
  state = {
  }

  loginSubmit(values) {
    console.log('login submit ');
    console.log(values);

    api.login(values)
      .then((json) => {
        if (json && json.data) {
          console.log(json.data);
          this.props.authActions.loginUser(json.data);
          localStorage.setItem('USER_TOKEN', json.data.api_token);
          this.props.authActions.showModal('');
        } else if (json && json.errors) {
          this.props.authActions.setErrorMessage(json.message);
        }
      });
  }

  registerSubmit(values) {
    console.log('===== submit register form =======');
    api.signUp(values)
      .then((json) => {
        if (json && json.data) {
          console.log(json.data);
          this.props.authActions.signupUser(json.data);
          this.props.authActions.showModal('welcomeModal');
        } else if (json && json.errors) {
          if (json.errors.email) {
            this.props.authActions.setErrorMessage('此帳號已被註冊!');
          }
        }
      });
  }

  verifyPhone = (phoneNumber) => {
    console.log(this.props.email);
    console.log('===== verify phone =======');
    console.log(phoneNumber);
    const params = {
      mobile: phoneNumber,
      user_id: this.props.userId,
    };

    api.sendVerifySMSCode(params)
      .then((json) => {
        if (json && json.status === 'ok') {
          this.props.authActions.setMobile(phoneNumber);
          this.props.authActions.showModal('verifySMSCodeModal');
        } else if (json && json.status === 'error' && json.message) {
          console.log(json.message);
          this.props.authActions.setErrorMessage(json.message);
        }
      });
  }

  verifySMS = (code) => {
    console.log('===== verify SMS =======');
    console.log(code);
    const params = {
      mobile: this.props.mobile,
      code,
    };

    api.verifySMS(params)
      .then((json) => {
        if (json && json.status === 'ok') {
          this.props.authActions.showModal('emailModal');
        } else if (json && json.status === 'error' && json.message) {
          console.log(json.message);
          this.props.authActions.setErrorMessage(json.message);
        }
      });
  }

  reSendSMS = () => {
    console.log('===== resend SMS =======');

    const params = {
      mobile: this.props.mobile,
      user_id: this.props.userId,
      resend: true,
    };

    api.sendVerifySMSCode(params)
      .then((json) => {
        if (json && json.status === 'ok') {
          this.props.authActions.showModal('verifySMSCodeModal');
        } else if (json && json.status === 'error' && json.message) {
          console.log(json.message);
          this.props.authActions.setErrorMessage(json.message);
        }
      });
  }

  sendValidiationEmail = (updateEmail) => {
    const email = this.props.email;
    console.log(email);
    console.log(updateEmail);
    const params = {
      email,
      updateEmail,
    };

    api.sendValidiationEmail(params)
      .then((json) => {
        if (json && json.status === 'ok') {
          this.props.authActions.setEmail(updateEmail);
          this.props.authActions.showModal('registerSuccessModal');
        } else if (json && json.status === 'error' && json.message) {
          console.log(json.message);
          this.props.authActions.setErrorMessage(json.message);
        }
      });
  }

  render() {
    const { authActions, showModal, mobile, errorMessage, email } = this.props;

    return (
      <div className="header">
        <img src="/assets/img/headerlogo.svg" alt="" />
        <ul className="mainMenu">
          <li className="active"><Link to="/">我要賣車</Link></li>
          <li><Link to="/">預約體驗</Link></li>
          <li><Link to="/">如何使用?</Link></li>
          <li><Link to="#" onClick={() => authActions.showModal('registerModal')}>註冊</Link></li>
          <li><Link to="#" onClick={() => authActions.showModal('loginMethodModal')}>登入</Link></li>
        </ul>

        <RegisterModal
          isOpen={showModal === 'registerModal'}
          hideModal={() => authActions.showModal('')}
          registerSubmit={values => this.registerSubmit(values)}
          signUp={values => authActions.signUp(values)}
          errorMessage={errorMessage}
          openLoginModal={() => authActions.showModal('loginModal')}
        />

        <WelcomeModal
          isOpen={showModal === 'welcomeModal'}
          hideModal={() => authActions.showModal('')}
          title="歡迎使用 CocarMaster"
          content="在CocarMaster車創網上面的車源皆是由真實車主提供的自家用車，為確保體驗以及購賣流程的品質，請協助我們完成剩下的幾項步驟，才能正式啟用您的帳號。"
          buttonText="下一步"
          backgroundImage="/assets/img/welcome.jpg"
          nextStepAction={() => authActions.showModal('verifyPhoneModal')}
        />

        <VerifyPhoneModal
          isOpen={showModal === 'verifyPhoneModal'}
          hideModal={() => authActions.showModal('')}
          verifyPhone={value => this.verifyPhone(value)}
          errorMessage={errorMessage}
        />

        <VerifySMSCodeModal
          isOpen={showModal === 'verifySMSCodeModal'}
          hideModal={() => authActions.showModal('')}
          mobile={mobile}
          verifySMS={value => this.verifySMS(value)}
          errorMessage={errorMessage}
          showChangePhone={() => authActions.showModal('verifyPhoneModal')}
          reSendSMS={() => this.reSendSMS()}
        />

        <EmailModal
          isOpen={showModal === 'emailModal'}
          hideModal={() => authActions.showModal('')}
          errorMessage={errorMessage}
          email={email}
          sendValidiationEmail={value => this.sendValidiationEmail(value)}
        />

        <WelcomeModal
          isOpen={showModal === 'registerSuccessModal'}
          hideModal={() => authActions.showModal('')}
          title="歡迎加入 CocarMaster"
          content="恭喜你完成註冊！記得去信箱收件，點擊註冊信裡的連結，即可正式啟用帳、開始探索平台上的車源，並且盡情享受CocarMaster創新的購新體驗！"
          buttonText="開始探索"
          backgroundImage="/assets/img/finish.jpg"
          nextStepAction={() => authActions.showModal('')}
        />

        <LoginMethodModal
          isOpen={showModal === 'loginMethodModal'}
          hideModal={() => authActions.showModal('')}
          openLoginModal={() => authActions.showModal('loginModal')}
        />

        <LoginModal
          isOpen={showModal === 'loginModal'}
          hideModal={() => authActions.showModal('')}
          loginSubmit={values => this.loginSubmit(values)}
          errorMessage={errorMessage}
          openRegisterModal={() => authActions.showModal('registerModal')}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isRegisterModalShow: state.auth.isRegisterModalShow,
  showModal: state.auth.showModal,
  userId: state.auth.id,
  mobile: state.auth.mobile,
  errorMessage: state.auth.errorMessage,
  email: state.auth.email,
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
