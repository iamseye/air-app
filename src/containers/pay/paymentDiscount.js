import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Radio, Button, Input } from 'antd';

const RadioGroup = Radio.Group;

class PaymentDiscount extends Component {
  state = {
    promoCode: '',
  }

  getPromoCode = promoCode => this.props.getPromoCode(promoCode);
  cancelPromoCode = () => this.props.cancelPromoCode();

  checkDiscount = (discountType, discountValue) => this.props.checkDiscount(discountType, discountValue);

  render() {
    const { userWallets, userPoints, errorMessage, chosenDiscount, chosenDiscountValue } = this.props

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <div className="payment__infoItem">
        <h3>選擇優惠</h3>

        <div className="payment__content--offer">
          <RadioGroup onChange={e => this.checkDiscount(e.target.value, e.target.amount)} value={chosenDiscount}>
            { userWallets !== 0 ?
              <Radio style={radioStyle} value="WALLET" amount={userWallets}>使用電子錢包折抵 （可折抵金額{userWallets}）</Radio>
              : '' }
            { userPoints !== 0 ?
              <Radio style={radioStyle} value="POINT" amount={userPoints}>使用優惠點數折抵 （可折抵金額{userPoints}）</Radio>
              : '' }
            <Radio style={radioStyle} value="PROMOCODE" amount={0}>
              使用代碼優惠
              {chosenDiscount === 'PROMOCODE' && chosenDiscountValue === 0 ?
                <span>
                  <Input
                    type="text"
                    placeholder="請輸入優惠代碼"
                    name="promoCode"
                    value={this.state.promoCode}
                    onInput={(e) => { this.setState({ promoCode: e.target.value }); }}
                  />
                  <Button onClick={() => this.getPromoCode(this.state.promoCode)}>兌換</Button>
                </span> : ''}
              {chosenDiscount === 'PROMOCODE' && chosenDiscountValue !== 0 ?
                <span>
                  <span>（可折抵金額{chosenDiscountValue})</span>
                  <Button onClick={() => this.cancelPromoCode()}>更換</Button>
                </span> : ''}
              {chosenDiscount === 'PROMOCODE' && errorMessage !== null ?
                <span>{errorMessage}</span> : ''}
            </Radio>
          </RadioGroup>
        </div>
      </div>
    );
  }
}

PaymentDiscount.propTypes = {
  userWallets: PropTypes.number.isRequired,
  userPoints: PropTypes.number.isRequired,
  getPromoCode: PropTypes.func.isRequired,
  cancelPromoCode: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  chosenDiscount: PropTypes.string.isRequired,
  checkDiscount: PropTypes.func.isRequired,
  chosenDiscountValue: PropTypes.number.isRequired,
};

export default PaymentDiscount;
