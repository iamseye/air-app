import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import '../style.css';

const style = {
  backgroundImage: 'url(/assets/img/welcome.jpg)',
};

const WelcomeModal = props => (
  <Modal
    isOpen={props.isOpen}
    onRequestClose={() => props.hideModal()}
    className="login__area"
  >
    <div className="login__box welcome" style={style}>
      <div className="login__item--description">
        <img className="logo" src="/assets/img/logo.svg" alt="logo" />
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
      <div className="login__item--button1">
        <button className="normal">下一步</button>
      </div>
    </div>
  </Modal>
);

WelcomeModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default WelcomeModal;
