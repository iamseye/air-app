import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ProcessDots from './components/processDots';
import './style.css';

class VerifyPhoneModal extends Component {
  state = {
    errorFormate: false,
    phoneNumber: '',
  }

  validatePhoneFormate(phoneNumber) {
    this.setState({ phoneNumber });

    if (!/^09[0-9]{8}$/.test(phoneNumber)) {
      this.setState({ errorFormate: true });
    } else {
      this.setState({ errorFormate: false });
    }
  }

  render() {
    const { isOpen, hideModal, verifyPhone } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => hideModal()}
        className="login__area"
      >
        <div className="login__box">
          <ProcessDots step={1} />
          <div className="login__item--description">
            <h3>請確認您的手機號碼</h3>
            <p>請協助我們完成手機號碼的驗證，這樣一來在體驗或是買賣過程中我們就能第一時間聯繫到您。放心，我們不會有任何的推銷電話。</p>
          </div>
          <div className="login__item--input">
            <input type="email" placeholder="請輸入手機號碼，ex:09xxxxxxxx" value={this.state.phoneNumber} onInput={e => this.validatePhoneFormate(e.target.value)} />
            { this.state.errorFormate ? <div className="login__alert--show">請輸入正確的手機格式</div> : ''}
          </div>
          <div className="login__item--button1">
            { this.state.errorFormate || !this.state.phoneNumber ?
              <button className="notyet">成為會員</button> :
              <button className="normal" onClick={() => verifyPhone(this.state.phoneNumber)}>成為會員</button>
            }
          </div>
        </div>
      </Modal>
    );
  }
}

VerifyPhoneModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  verifyPhone: PropTypes.func.isRequired,
};

export default VerifyPhoneModal;
