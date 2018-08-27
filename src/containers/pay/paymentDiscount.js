import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Radio, Button, Input } from 'antd';

const RadioGroup = Radio.Group;

class PaymentDiscount extends Component {
  state = {
    promoCode: '',
    value: 1,
  }

  checkedDiscount = discountType => this.props.checkedDiscount(discountType);
  getPromoCode = promoCode => this.props.getPromoCode(promoCode);
  cancelPromoCode = () => this.props.cancelPromoCode();

  chooseDiscount = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const { userWallets, userPoints, isUsePoint, isUseWallet, isUsePromocode, promoCodeDiscount, errorMessage } = this.props

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <div className="payment__infoItem">
        <h3>選擇優惠</h3>

        <div className="payment__content--offer">
          <RadioGroup onChange={e => this.chooseDiscount(e)} value={this.state.value}>
            { userWallets !== 0 ?
              <Radio style={radioStyle} value="WALLET">使用電子錢包折抵 （可折抵金額{userWallets}）</Radio>
              : '' }
            { userPoints !== 0 ?
              <Radio style={radioStyle} value="POINT">使用優惠點數折抵 （可折抵金額{userPoints}）</Radio>
              : '' }
            <Radio style={radioStyle} value="PROMOCODE">
              { promoCodeDiscount === 0 ? <label htmlFor="promoCode">使用代碼優惠</label> : ''}
              {this.state.value === 'PROMOCODE' && promoCodeDiscount === 0 ?
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
              {this.state.value === 'PROMOCODE' && promoCodeDiscount !== 0 ?
                <span>
                  使用代碼優惠 <span>（可折抵金額{promoCodeDiscount})</span>
                  <Button onClick={() => this.cancelPromoCode()}>更換</Button>
                </span> : ''}
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
