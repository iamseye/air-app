import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import './style.css';

class LoginMethodModal extends Component {
  state = {
  }

  render() {
    const { isOpen, hideModal, openLoginModal } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => hideModal()}
        className="login__area"
        ariaHideApp={false}
      >
        <div className="login__box">
          <div className="login__item--title">
            <h3>登入</h3>
          </div>
          <div className="login__item--button1">
            <button className="fb"><images src="./images/fb.png" />使用Facebook帳號 登入</button>
          </div>
          <div className="login__item--notice1">
            <span>或者改用以下帳號</span>
          </div>
          <div className="login__item--button1">
            <button className="google"><images src="./images/google.png" />使用Google帳號 登入</button>
          </div>
          <div className="login__item--button1" onClick={() => openLoginModal()}>
            <button className="other"><images src="./images/fb.png" />使用CocarMaster 登入</button>
          </div>
          <div className="login__close" />
        </div>
      </Modal>
    );
  }
}

LoginMethodModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  openLoginModal: PropTypes.func.isRequired,
};

export default LoginMethodModal;
