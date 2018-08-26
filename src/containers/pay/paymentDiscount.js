import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Button } from 'antd';

class PaymentDiscount extends Component {
  state = {
    promoCode: '',
  }

  checkedDiscount = discountType => this.props.checkedDiscount(discountType);
  getPromoCode = promoCode => this.props.getPromoCode(promoCode);
  cancelPromoCode = () => this.props.cancelPromoCode();


  render() {
    const { userWallets, userPoints, isUsePoint, isUseWallet, isUsePromocode, promoCodeDiscount, errorMessage } = this.props

    return (
      <div className="payment__infoItem">
        <h3>選擇優惠</h3>

        <div className="payment__content--offer">
          <ul>
            { userWallets !== 0 ?
              <li>
                <div className="paymentCheck">
                  <Checkbox checked={isUseWallet} onChange={() => this.checkedDiscount('WALLET')}>
                    使用電子錢包折抵 - <span>{userWallets}</span>
                  </Checkbox>
                </div>
              </li>
            : ''}

            { userPoints !== 0 ?
              <li>
                <div className="paymentCheck">
                  <Checkbox checked={isUsePoint} onChange={() => this.checkedDiscount('POINT')}>
                    使用優惠點數折抵 - <span>{userPoints}</span>
                  </Checkbox>
                </div>
              </li>
            : '' }

            { promoCodeDiscount === 0 ?
              <li>
                <div className="paymentCheck">
                  <label htmlFor="promoCode">使用代碼優惠</label>
                  <input
                    type="text"
                    placeholder="請輸入優惠代碼"
                    name="promoCode"
                    value={this.state.promoCode}
                    onInput={(e) => { this.setState({ promoCode: e.target.value }); }}
                    readOnly={promoCodeDiscount !== 0 ? 'readOnly' : ''}
                  />
                  <Button onClick={() => this.getPromoCode(this.state.promoCode)}>兌換</Button>
                </div>
              </li>
            : ''}
            { errorMessage !== '' ?
              <li><div>{errorMessage}</div></li>
            : ''}
            { promoCodeDiscount !== 0 ?
              <li>
                <div className="paymentCheck">
                  使用代碼優惠 - <span>{promoCodeDiscount}</span>
                  <Button onClick={() => this.cancelPromoCode()}>更換</Button>
                </div>
              </li>
            : '' }
          </ul>
        </div>
      </div>
    );
  }
}

PaymentDiscount.propTypes = {
  userWallets: PropTypes.number.isRequired,
  userPoints: PropTypes.number.isRequired,
  isUsePoint: PropTypes.bool.isRequired,
  isUseWallet: PropTypes.bool.isRequired,
  isUsePromocode: PropTypes.bool.isRequired,
  checkedDiscount: PropTypes.func.isRequired,
  getPromoCode: PropTypes.func.isRequired,
  cancelPromoCode: PropTypes.func.isRequired,
  promoCodeDiscount: PropTypes.number.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default PaymentDiscount;
