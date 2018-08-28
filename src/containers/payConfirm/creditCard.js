import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';


class CreditCard extends Component {
  state = {
    errorMessage: '',
    canGetPrime: false,
  }

  componentDidMount() {
    const defaultCardViewStyle = {
      color: 'rgb(0,0,0)',
      fontSize: '15px',
      lineHeight: '24px',
      fontWeight: '300',
      errorColor: 'red',
      placeholderColor: '',
    };

    window.TPDirect.card.setup('#tappay-iframe', defaultCardViewStyle);
    window.TPDirect.card.onUpdate((update) => {
      console.log(update.canGetPrime);
      if (update.canGetPrime) {
        this.setState({ canGetPrime: true });
      }

      console.log(update.status.number);
      if (update.status.number === 2) {
        this.setState({ errorMessage: '填寫資料錯誤' });
      }
      if (update.status.number === 0) {
        this.setState({ errorMessage: '' });
      }
    });
  }

  getPrimeAndPay = () => {
    if (this.state.canGetPrime && this.state.errorMessage === '') {
      window.TPDirect.card.getPrime((result) => {
        if (result.status !== 0) {
          console.err('getPrime error');
        }
        const prime = result.card.prime;
        console.log(`getPrime success: ${prime}`);
      })
    }
  }

  saveCreditCard() {

  }

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
          <label htmlFor="tappay">CardView</label>
          <div name="tappay" id="tappay-iframe" />
        </div>
        <Checkbox onChange={() => this.saveCreditCard()}>儲存這張信用卡</Checkbox>
        { this.state.errorMessage !== '' ? this.state.errorMessage : '' }
        <div className="paymentBTN" onClick={() => this.getPrimeAndPay()}>付款</div>
      </div>
    );
  }
}

CreditCard.propTypes = {

};

export default CreditCard;
