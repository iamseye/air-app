import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Button, Input } from 'antd';

class PaymentDiscount extends Component {
  state = {
    checkedPointDiscount: false,
    checkedWalletDiscount: false,
  }

  checkedPointDiscount() {
    this.setState({ checkedPointDiscount: !this.state.checkedPointDiscount });
  }

  checkedWalletDiscount() {
    this.setState({ checkedWalletDiscount: !this.state.checkedWalletDiscount });
  }

  render() {
    return (
      <div className="payment__infoItem">
        <h3>選擇優惠</h3>

        <div className="payment__content--offer">
          <ul>
            <li>
              <div className="paymentCheck">
                <Checkbox checked={this.state.checkedWalletDiscount} onChange={() => this.checkedWalletDiscount()}>
                  使用電子錢包折抵 - <span>500</span>
                </Checkbox>
              </div>
            </li>

            <li>
              <div className="paymentCheck">
                <Checkbox checked={this.state.checkedPointDiscount} onChange={() => this.checkedPointDiscount()}>
                  使用優惠點數折抵 - <span>500</span>
                </Checkbox>
              </div>
            </li>
            <li>
              <div className="paymentCheck">
                <label htmlFor="promoCode">使用代碼優惠</label>
                <input type="text" placeholder="請輸入優惠代碼" name="promoCode" />
                <Button>兌換</Button>
              </div>
            </li>
            <li>
              <div className="paymentCheck">
                <span>使用代碼優惠 - 500</span>
                <Button>取消</Button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

PaymentDiscount.propTypes = {

};

export default PaymentDiscount;
