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

  sendSMS = (e) => {
    this.setState(
      {
        code4: e.target.value,
      },
      () => {
        const code = this.state.code1 + this.state.code2 + this.state.code3 + this.state.code4;
        this.verifySMS(code);
      },
    );
  }

  focusInput = (n, e) => {
    switch (n) {
      case 1:
        this.textInput2.focus();
        break;
      case 2:
        this.textInput3.focus();
        break;
      case 3:
        this.textInput4.focus(e);
        break;
      default:
        break;
    }
  }

  backSpace(n, e) {
    const value = e.target.value;
    if ((e.keyCode === 8 && !value)) {
      e.preventDefault();
      switch (n) {
        case 2:
          this.setState({ code1: '' });
          this.textInput1.focus();
          break;
        case 3:
          this.setState({ code2: '' });
          this.textInput2.focus();
          break;
        case 4:
          this.setState({ code3: '' });
          this.textInput3.focus();
          break;
        default:
          break;
      }
    }
  }

  render() {
    const { isOpen, hideModal, mobile, errorMessage, showChangePhone, reSendSMS } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => hideModal()}
        className="login__area"
        ariaHideApp={false}
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
              onInput={(e) => { this.setState({ code1: e.target.value }); this.focusInput(1, e); }}
              ref={input => this.textInput1 = input}
            />
            <input
              className="verificationCode"
              type="text"
              maxLength="1"
              value={this.state.code2}
              onInput={(e) => { this.setState({ code2: e.target.value }); this.focusInput(2, e); }}
              onKeyDown={e => this.backSpace(2, e)}
              ref={input => this.textInput2 = input}
            />
            <input
              className="verificationCode"
              type="text"
              maxLength="1"
              value={this.state.code3}
              onInput={(e) => { this.setState({ code3: e.target.value }); this.focusInput(3, e); }}
              onKeyDown={e => this.backSpace(3, e)}
              ref={input => this.textInput3 = input}
            />
            <input
              className="verificationCode"
              type="text"
              maxLength="1"
              value={this.state.code4}
              onInput={e => this.sendSMS(e)}
              onKeyDown={e => this.backSpace(4, e)}
              ref={input => this.textInput4 = input}
            />
          </div>
          <div className="login__item--notice2">
            { errorMessage !== '' ?
              <div>
                <div className="red">{errorMessage}</div>
                <div onClick={() => reSendSMS()}><span>重新發送驗證碼</span></div>
              </div> :
              <div>請於 <span>180</span> 秒內輸入</div>
            }
            <div onClick={() => showChangePhone()}><span>更改電話號碼</span></div>
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
  errorMessage: PropTypes.string.isRequired,
  showChangePhone: PropTypes.func.isRequired,
};

export default VerifySMSCodeModal;
