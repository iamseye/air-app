import React, { Component } from 'react';
import Modal from 'react-modal';
import './style.css';

class PayModal extends Component {
  state = {}

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={() => this.props.hideModal()}
        ariaHideApp={false}
      >
        <div dangerouslySetInnerHTML={{ __html: this.props.returnHTML }} />
      </Modal>
    );
  }
}

PayModal.propTypes = {
};

export default PayModal;
