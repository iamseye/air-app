import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import '../style.css';

const WelcomeModal = props => (
  <Modal
    isOpen={props.isOpen}
    onRequestClose={() => props.hideModal()}
    className="login__area"
  >
    <div className="login__box welcome" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      <div className="login__item--description">
        <img className="logo" src="/assets/img/logo.svg" alt="logo" />
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
      <div className="login__item--button1">
        <button className="normal" onClick={() => props.nextStepAction()}>下一步</button>
      </div>
    </div>
  </Modal>
);

WelcomeModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  nextStepAction: PropTypes.func.isRequired,
};

export default WelcomeModal;
