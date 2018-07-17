import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import '../style.css';

const style = {
  backgroundImage: 'url(/assets/img/welcome.jpg)',
};

const WelcomeModal = props => (
  <Modal
    isOpen={true}
    // onRequestClose={() => hideRegisterModal()}
    className="login__area"
  >
    <div className="login__box welcome" style={style}>
      <div className="login__item--description">
        <img className="logo" src="/assets/img/logo.svg" alt="logo" />
        <h3>歡迎使用 CocarMaster</h3>
        <p>在CocarMaster車創網上面的車源皆是由真實車主提供的自家用車，為確保體驗以及購賣流程的品質，請協助我們完成剩下的幾項步驟，才能正式啟用您的帳號。</p>
      </div>
      <div className="login__item--button1">
        <button className="normal">下一步</button>
      </div>
    </div>
  </Modal>
);

WelcomeModal.propTypes = {

};

export default WelcomeModal;
