import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentCreditCard extends Component {
  state = {
  }

  render() {
    const {
    } = this.props;

    return (
      <div className="payment__infoItem">
        <h3>選擇付款信用卡</h3>
        <div className="payment__content">
          <div className="payment__content--item selected">
            <h4><div>發卡銀行</div><div>玉山銀行</div></h4>
            <ul>
              <li><div>付款類型</div><div>MasterCard</div></li>
              <li><div>信用卡號</div><div>5211-29XX-XXXX-8682</div></li>
              <li><div>有效期限</div><div>09-2024</div></li>
            </ul>
          </div>
          <div className="payment__content--item">新增信用卡</div>
        </div>
      </div>
    );
  }
}

PaymentCreditCard.propTypes = {

};

export default PaymentCreditCard;
