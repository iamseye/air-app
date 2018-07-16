import React, { Component } from 'react';
import Modal from 'react-modal';

class Register extends Component {
  state = {

  }
  render() {
    const { hideRegisterModal, isOpen } = this.props
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => hideRegisterModal()}
      >
        <div>
          test123
        </div>
      </Modal>
    );
  }
}

export default Register;
