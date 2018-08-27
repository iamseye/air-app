import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentCard extends Component {
  state = {
  }

  render() {
    const {
      carName, carYear, pickupPrice, rentDays, insurancePrice, isUseInsurance,
      emergencyFee, longRentDiscount, rentPrice, calTotalPrice,
      chosenDiscount, chosenDiscountValue
    } = this.props;

    return (
      <div className="payment_list">
        <div
          className="payment_list--photo"
          style={{ backgroundImage: 'url(https://aircnc.com.tw/upload/users/album/source_img/2018-05-22-791-15449.jpg)' }}
        />
        <div className="payment_list--content">
          <h3><div>{carYear}</div><div>{carName}</div></h3>
          <ul>
            <li><div>體驗費用<span>x {rentDays}日</span></div><div>{rentPrice * rentDays}</div></li>
            { isUseInsurance ?
              <li><div>保險費用<span>x {rentDays}日</span></div><div>{insurancePrice}</div></li> : ''}
            { emergencyFee !== 0 ?
              <li><div>加急費用</div><div>{emergencyFee}</div></li> : '' }
            { pickupPrice !== 0 ?
              <li><div>取車費用</div><div>{pickupPrice}</div></li> : '' }
            { longRentDiscount !== 0 ?
              <li><div>長租優惠</div><div>- {longRentDiscount}</div></li> : '' }
            { chosenDiscount === 'PROMOCODE' && chosenDiscountValue !== 0 ?
              <li><div>代碼優惠</div><div>- {chosenDiscountValue}</div></li> : '' }
            { chosenDiscount === 'WALLET' && chosenDiscountValue !== 0 ?
              <li><div>電子錢包折扣</div><div>- {chosenDiscountValue}</div></li> : '' }
            { chosenDiscount === 'POINT' && chosenDiscountValue !== 0 ?
              <li><div>優惠點數折扣</div><div>- {chosenDiscountValue}</div></li> : '' }
          </ul>
          <div className="totalPrice">體驗總額 NT$ {calTotalPrice}</div>
        </div>
      </div>
    );
  }
}

PaymentCard.propTypes = {
  carName: PropTypes.string.isRequired,
  carYear: PropTypes.number.isRequired,
  pickupPrice: PropTypes.number.isRequired,
  rentDays: PropTypes.number.isRequired,
  insurancePrice: PropTypes.number.isRequired,
  emergencyFee: PropTypes.number.isRequired,
  longRentDiscount: PropTypes.number.isRequired,
  rentPrice: PropTypes.number.isRequired,
  calTotalPrice: PropTypes.number.isRequired,
  isUseInsurance: PropTypes.bool.isRequired,
  chosenDiscount: PropTypes.string.isRequired,
  chosenDiscountValue: PropTypes.number.isRequired,
};

export default PaymentCard;
