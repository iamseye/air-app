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
  }

  registerSubmit(values) {
    console.log('submit register form');
    console.log(values);
    api.signUp(values)
      .then((json) => {
        if (json && json.data) {
          console.log(json.data);
          this.props.authActions.signupUser(json.data);
          this.props.authActions.showModal('welcomeModal');
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
    const { authActions, showModal } = this.props;

    return (
      <div className="header">
        <img src="/assets/img/headerlogo.svg" alt="" />
        <ul className="mainMenu">
          <li className="active"><Link to="/">我要賣車</Link></li>
          <li><Link to="/">預約體驗</Link></li>
          <li><Link to="/">如何使用?</Link></li>
          <li><Link to="#" onClick={() => authActions.showModal('registerModal')}>註冊</Link></li>
          <li><Link to="/">登入</Link></li>
        </ul>

        <RegisterModal
          isOpen={showModal === 'registerModal'}
          hideModal={() => authActions.showModal('')}
          registerSubmit={values => this.registerSubmit(values)}
          signUp={values => authActions.signUp(values)}
          registerErrorMessage={this.state.registerErrorMessage}
        />

        <WelcomeModal
          isOpen={showModal === 'welcomeModal'}
          hideModal={() => authActions.showModal('')}
          title="歡迎使用 CocarMaster"
          content="在CocarMaster車創網上面的車源皆是由真實車主提供的自家用車，為確保體驗以及購賣流程的品質，請協助我們完成剩下的幾項步驟，才能正式啟用您的帳號。"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isRegisterModalShow: state.auth.isRegisterModalShow,
  showModal: state.auth.showModal,
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
