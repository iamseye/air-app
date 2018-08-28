import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import * as TPDirect from 'https://js.tappaysdk.com/tpdirect/v2_3_3';

class CreditCard extends Component {
  state = {
  }

  // componentDidMount() {
  //   const defaultCardViewStyle = {
  //     color: 'rgb(0,0,0)',
  //     fontSize: '15px',
  //     lineHeight: '24px',
  //     fontWeight: '300',
  //     errorColor: 'red',
  //     placeholderColor: '',
  //   };
  //   TPDirect.setupSDK(12371, 'app_YfXNUmNpT47bb45EMEAKvvCVHXoexve7vM0xuWKUF4vDflGTWI4jaIVDVRKV', 'sandbox');
  //
  //   TPDirect.card.setup('#cardview-container', defaultCardViewStyle);
  // }
  render() {
    const {
    } = this.props;

    return (
      <div className="payment__infoItem center">
        <h3>選擇信用卡</h3>
        <div className="payment__content--item">
          <h4><div>發卡銀行</div><div>玉山銀行</div></h4>
          <ul>
            <li><div>付款類型</div><div>MasterCard</div></li>
            <li><div>信用卡號</div><div>5211-29XX-XXXX-8682</div></li>
            <li><div>有效期限</div><div>09-2024</div></li>
          </ul>
        </div>
        <div className="payment__other"><span>或是使用其他信用卡</span></div>
        <div>
          <div id="tappay-iframe" />
        </div>
        <input type="text" className="payment__input" placeholder="XXXX-XXXX-XXXX-XXXX" />
        <input type="checkbox" id="saveCard" /><label for="saveCard">儲存這張信用卡</label>
        <div className="paymentBTN">付款</div>
      </div>
    );
  }
}

CreditCard.propTypes = {

};

export default CreditCard;
