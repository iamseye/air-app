import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ProcessDots from './components/processDots';
import './style.css';

class VerifySMSCodeModal extends Component {
  state = {
    code1: '',
    code2: '',
    code3: '',
    code4: '',
  }

  verifySMS = value => this.props.verifySMS(value);

  updateCode1(value) {
    this.setState({
      code1: value,
    });
  }

  updateCode2(value) {
    this.setState({
      code2: value,
    });
  }

  updateCode3(value) {
    this.setState({
      code3: value,
    });
  }

  sendSMS(value) {
    this.setState(
      {
        code4: value,
      },
      () => {
        const code = this.state.code1 + this.state.code2 + this.state.code3 + this.state.code4;
        this.verifySMS(code);
      },
    );
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
            <input
              className="verificationCode"
              type="text"
              maxLength="1"
              value={this.state.code1}
              onInput={(e) => { this.textInput1.focus(); this.updateCode1(e.target.value); }}
            />
            <input
              className="verificationCode"
              type="text"
              maxLength="1"
              value={this.state.code2}
              onInput={(e) => { this.textInput2.focus(); this.updateCode2(e.target.value); }}
              ref={input => this.textInput1 = input}
            />
            <input
              className="verificationCode"
              type="text"
              maxLength="1"
              value={this.state.code3}
              onInput={(e) => { this.textInput3.focus(); this.updateCode3(e.target.value); }}
              ref={input => this.textInput2 = input}
            />
            <input
              className="verificationCode"
              type="text"
              maxLength="1"
              value={this.state.code4}
              onInput={e => this.sendSMS(e.target.value)}
              ref={input => this.textInput3 = input}
            />
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
  verifySMS: PropTypes.func.isRequired,
};

export default VerifySMSCodeModal;
