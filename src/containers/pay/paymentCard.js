import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentCard extends Component {
  state = {
  }

  render() {
    const {
      carName, carYear, pickupPrice, rentDays, insurancePrice, isUseInsurance,
      emergencyFee, promoCodeDiscount, longRentDiscount, rentPrice, totalPrice,
      userWallets, userPoints, isUsePoint, isUseWallet, isUsePromocode
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
          </ul>
          <ul>
            { isUsePromocode && promoCodeDiscount !== 0 ?
              <li><div>代碼優惠</div><div>- {promoCodeDiscount}</div></li> : '' }
            { isUseWallet && userWallets !== 0 ?
              <li><div>代碼優惠</div><div>- {userWallets}</div></li> : '' }
            { isUsePoint && userPoints !== 0 ?
              <li><div>代碼優惠</div><div>- {userPoints}</div></li> : '' }
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
  isUsePoint: PropTypes.bool.isRequired,
  isUseWallet: PropTypes.bool.isRequired,
  isUsePromocode: PropTypes.bool.isRequired,
  userWallets: PropTypes.number.isRequired,
  userPoints: PropTypes.number.isRequired,
};

export default PaymentCard;
