import React, { Component } from 'react';


class PaymentCard extends Component {
  state = {
  }

  // componentDidMount() {
  //   api.getTheSellCar(1)
  //     .then((json) => {
  //       if (json && json.data) {
  //         console.log(json.data);
  //
  //
  //         this.setState({
  //
  //         });
  //       }
  //     });
  // }

  render() {
    return (
      <div className="payment_list">
        <div
          className="payment_list--photo"
          style={{ backgroundImage: 'url(https://aircnc.com.tw/upload/users/album/source_img/2018-05-22-791-15449.jpg)' }}
        />
        <div className="payment_list--content">
          <h3><div>2016</div><div>Benz C250</div></h3>
          <ul>
            <li><div>體驗費用<span>x 1日</span></div><div>7,500</div></li>
            <li><div>保險費用<span>x 1日</span></div><div>750</div></li>
            <li><div>加急費用</div><div>1,125</div></li>
            <li><div>長租優惠</div><div>- 100</div></li>
            <li><div>代碼優惠</div><div>- 500</div></li>
          </ul>
          <ul>
            <li><div className="paymentCheck">使用電子錢包折抵</div><div> - <span>2,500</span></div></li>
            <li><div className="paymentCheck">使用優惠點數折抵</div><div> - <span>500</span></div></li>
          </ul>
          <div className="totalPrice">體驗總額 NT$ 5,500</div>
        </div>
      </div>
    );
  }
}

export default PaymentCard;
