import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentCard extends Component {
  state = {
  }

  render() {
    const {
      carName, carYear, pickupPrice, rentDays, insurancePrice, isUseInsurance,
      emergencyFee, promoCodeDiscount, longRentDiscount, rentPrice, totalPrice,
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
            { promoCodeDiscount !== 0 ?
              <li><div>代碼優惠</div><div>- {promoCodeDiscount}</div></li> : '' }
          </ul>
          <ul>
            <li><div className="paymentCheck"><input id="package" type="checkbox" /><label htmlFor="package">使用電子錢包折抵</label></div><div> - <span>2,500</span></div></li>
            <li><div className="paymentCheck"><input id="point" type="checkbox" /><label htmlFor="point">使用優惠點數折抵</label></div><div> - <span>500</span></div></li>
          </ul>
          <div className="totalPrice">體驗總額 NT$ {totalPrice}</div>
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
  promoCodeDiscount: PropTypes.number.isRequired,
  longRentDiscount: PropTypes.number.isRequired,
  rentPrice: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  isUseInsurance: PropTypes.bool.isRequired,
  startTime: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default PaymentCard;
