import React, { Component } from 'react';
import Confirm from '../../components/confirm';

class EmailVerify extends Component {
  state = {}

  openLoginModal = () => {
    console.log('open login modal');
  }

  render() {
    return (
      <div>
        <Confirm
          description="恭喜您！Email驗證完成！"
          buttonText="馬上登入"
          buttonAction={() => this.openLoginModal()}
        />
      </div>
    );
  }
}


export default EmailVerify;
