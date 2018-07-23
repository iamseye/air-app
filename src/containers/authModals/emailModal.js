import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ProcessDots from './components/processDots';
import './style.css';

class EmailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
    };
  }
  state = {
    errorFormate: false,
    editEmail: false,
    updateEmail: '',
  }

  validateEmailFormate(updateEmail) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(updateEmail)) {
      this.setState({ errorFormate: true, updateEmail });
    } else {
      this.setState({ errorFormate: false });
    }
  }

  render() {
    const { isOpen, hideModal, errorMessage, sendValidiationEmail, email } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => hideModal()}
        className="login__area"
        ariaHideApp={false}
      >
        <div className="login__box">
          <ProcessDots step={3} />
          <div className="login__item--description">
            <h3>發送註冊信</h3>
            <p>只剩最後一步了，請您發送註冊信並點擊其中的驗證連結，即可正式啟用你的帳號。</p>
          </div>
          <div className="login__item--input">
            {this.state.editEmail ?
              <input type="email" value={this.state.email} onInput={(e) => { this.setState({ email: e.target.value }); this.validateEmailFormate(e.target.value); }} /> :
              <input className="readOnly" type="email" value={email} readOnly />
            }
            {this.state.errorFormate ?
              <div className="login__alert--show">請輸入正確的e-mail格式</div> :
            ''}

            {errorMessage !== '' ?
              <div className="login__alert--show">{errorMessage}</div> :
            ''}
          </div>
          <div className="login__item--button1">
            {this.state.errorFormate ?
              <button className="notyet" disable="true">發送驗證信</button> :
              <button className="normal" onClick={() => sendValidiationEmail(this.state.updateEmail)}>發送驗證信</button>
            }
          </div>
          <div className="login__item--notice2">
            <span onClick={() => this.setState({ editEmail: true })}>更改e-mail</span>
          </div>
        </div>
      </Modal>
    );
  }
}

EmailModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  sendValidiationEmail: PropTypes.func.isRequired,
};

export default EmailModal;
