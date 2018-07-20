import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ProcessDots from './components/processDots';
import './style.css';

class VerifySMSCodeModal extends Component {
  state = {
    errorFormate: false,
    phoneNumber: '',
  }

  render() {
    const { isOpen, hideModal, mobile } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => hideModal()}
        className="login__area"
      >
        <div className="login__box">
          <ProcessDots step={2} />
          <div className="login__item--description">
            <h3>請輸入4位數的驗證碼</h3>
            <p>我們發送了一則簡訊到 <span>{mobile}</span>，請輸入簡訊中的驗證碼。</p>
          </div>
          <div className="login__item--input2">
            <input className="verificationCode" type="text" maxLength="1" onInput={() => { this.next('input').focus(); }} />
            <input className="verificationCode" type="text" maxLength="1" />
            <input className="verificationCode" type="text" maxLength="1" />
            <input className="verificationCode" type="text" maxLength="1" />
          </div>
          <div className="login__item--notice2">
            <div>請於 <span>180</span> 秒內輸入</div>
          </div>
        </div>
      </Modal>
    );
  }
}

VerifySMSCodeModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  mobile: PropTypes.string.isRequired,
};

export default VerifySMSCodeModal;
