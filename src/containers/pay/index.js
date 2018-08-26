import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';
import * as orderActions from '../../actions/orderAction';
import PaymentCard from './paymentCard';
import PaymentDiscount from './paymentDiscount';
import PaymentCreditCard from './paymentCreditCard';
import api from '../../utils/api';
import './style.css';

class Pay extends Component {
  state = {
    startTime: '',
    startDate: '',
    endDate: '',
    sellCarId: '',
    checkedAgree: false,
  }

  componentDidMount() {
    const sellCarId = this.props.match.params.sellCarId ? this.props.match.params.sellCarId : 0;
    const url = new URL(window.location.href);

    this.setState({
      sellCarId,
      startTime: this.props.startTime || url.searchParams.get('startTime'),
      startDate: url.searchParams.get('startDate'),
      endDate: url.searchParams.get('endDate'),
    });

    const params = {
      sell_car_id: sellCarId,
      pickup_home_address: this.props.homeAddress || url.searchParams.get('homeAddress'),
      start_date: this.props.startDate || url.searchParams.get('startDate'),
      end_date: this.props.endDate || url.searchParams.get('endDate'),
    };

    api.getPaymentDetail(params)
      .then((json) => {
        if (json && json.data) {
          console.log(json.data);
          this.props.orderActions.setOrderDetail(json.data);
          this.props.orderActions.setTotalPrice(json.data.total_price);
        }
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isUsePromocode !== this.props.isUsePromocode) {
      if (!this.props.isUsePromocode) {
        this.props.orderActions.setTotalPrice(this.props.totalPrice + this.props.promoCodeDiscount);
        this.props.orderActions.setPromoCodeDiscount(0);
      } else {
        this.props.orderActions.setTotalPrice(this.props.totalPrice - this.props.promoCodeDiscount);
      }
    }
  }

  getPromoCode = (promoCode) => {
    api.getPromoCodePrice({ promo_code: promoCode })
      .then((json) => {
        if (json && json.data) {
          console.log(json.data);
          let discountAmount = 0;
          if (json.data.amount && json.data.amount !== 0) {
            discountAmount = json.data.amount;
          }
          if (json.data.percentage && json.data.percentage !== 0) {
            discountAmount =  this.props.totalPrice * (json.data.percentage / 100);
          }
          this.props.orderActions.setPromoCodeDiscount(discountAmount);
          this.props.orderActions.setIsUsePromoCode(true);
          this.props.orderActions.setErrorMessage('');
        } else if (json && json.status === 'error') {
          this.props.orderActions.setErrorMessage(json.message);
        }
      });
  }

  cancelPromoCode = () => {
    this.props.orderActions.setIsUsePromoCode(false);
  }

  useInsurance = (isUseInsurance) => {
    this.props.orderActions.setIsUseInsurance(isUseInsurance);

    if (!isUseInsurance) {
      this.props.orderActions.setTotalPrice(this.props.totalPrice - this.props.insurancePrice);
    } else {
      this.props.orderActions.setTotalPrice(this.props.totalPrice + this.props.insurancePrice);
    }
  }

  checkedDiscount = (discountType) => {
    if (discountType === 'POINT') {
      this.props.orderActions.setIsUsePoint(!this.props.isUsePoint);

      if (!this.props.isUsePoint) {
        this.props.orderActions.setTotalPrice(this.props.totalPrice - this.props.userPoints);
      } else {
        this.props.orderActions.setTotalPrice(this.props.totalPrice + this.props.userPoints);
      }
    }

    if (discountType === 'WALLET') {
      this.props.orderActions.setIsUseWallet(!this.props.isUseWallet);

      if (!this.props.isUseWallet) {
        this.props.orderActions.setTotalPrice(this.props.totalPrice - this.props.userWallets);
      } else {
        this.props.orderActions.setTotalPrice(this.props.totalPrice + this.props.userWallets);
      }
    }
  }

  submitPayment() {
    const params = {
      user_id: 1,
      sell_car_id: this.state.sellCarId,
      is_pickup_at_car_center: true,
      start_date: this.state.startDate,
      end_date: this.state.endDate,
      start_time: this.state.startTime,
      buy_insurance: true,
    };

    api.placeOrder(params)
      .then((text) => {
        this.setState({
          isOpen: true,
          returnHTML: text,
        });
      }).catch(() => {
        console.log('error');
      });
  }

  render() {
    return (
      <div className="payment">

        <div className="payment__wraper">
          <PaymentCard
            carName={this.props.orderDetail.car_name}
            carYear={this.props.orderDetail.car_year}
            pickupPrice={this.props.orderDetail.pickup_price}
            rentDays={this.props.orderDetail.rent_days}
            insurancePrice={this.props.orderDetail.insurance_price}
            emergencyFee={this.props.orderDetail.emergency_fee}
            longRentDiscount={this.props.orderDetail.long_rent_discount}
            rentPrice={this.props.orderDetail.rent_price}
            totalPrice={this.props.orderDetail.total_price}
            startDate={this.props.orderDetail.start_date}
            endDate={this.props.orderDetail.end_date}
            startTime={this.state.startTime}
            isUseInsurance={this.props.isUseInsurance}
            userWallets={this.props.userWallets}
            userPoints={this.props.userPoints}
            promoCodeDiscount={this.props.promoCodeDiscount}
            isUsePoint={this.props.isUsePoint}
            isUseWallet={this.props.isUseWallet}
            isUsePromocode={this.props.isUsePromocode}
          />
          <div className="payment_info">

            <div className="payment__infoItem">
              <h3>選擇保險</h3>

              <div className="payment__content--insurance">
                <div
                  className={this.props.isUseInsurance ? 'payment__content--item selected' : 'payment__content--item'}
                  onClick={() => this.useInsurance(true)}
                >
                  <h4>
                    <div>乙式保險</div>
                    <div>NT$ <span>{this.props.orderDetail.insurance_price}</span></div>
                  </h4>
                  <ul>
                    <li><div>・保障車輛自體或與其他車輛碰撞之損失</div><img src="/assets/img/check.png" alt="check icon" /></li>
                    <li><div>・保障火災、閃電、爆炸或墜落物造成之損失</div><img src="/assets/img/check.png" alt="check icon" /></li>
                    <li><div>・免追償條款</div><img src="/assets/img/check.png" alt="check icon" /></li>
                    <li><div>・失竊險</div><img src="/assets/img/check.png" alt="check icon" /></li>
                  </ul>
                </div>

                <div
                  className={this.props.isUseInsurance ? 'payment__content--item' : 'payment__content--item selected'}
                  onClick={() => this.useInsurance(false)}
                >
                  <h4>不需要保險</h4>
                  <p>我願意承擔體驗過程中發生的所有意外。</p>
                </div>
              </div>
            </div>

            <PaymentDiscount
              userWallets={this.props.userWallets}
              userPoints={this.props.userPoints}
              promoCodeDiscount={this.props.promoCodeDiscount}
              checkedDiscount={this.checkedDiscount}
              isUsePoint={this.props.isUsePoint}
              isUseWallet={this.props.isUseWallet}
              isUsePromocode={this.props.isUsePromocode}
              getPromoCode={this.getPromoCode}
              cancelPromoCode={this.cancelPromoCode}
              errorMessage={this.props.errorMessage}
            />

            <div className="payment__infoItem">
              <Checkbox
                checked={this.state.checkedAgree}
                onChange={() => { this.setState({ checkedAgree: !this.state.checkedAgree }); }}
              >
                <label htmlFor="rule">我同意</label><span>使用規則</span>
              </Checkbox>
              <div className="paymentBTN" onClick={() => this.submitPayment()}>前往付款</div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  startDate: state.order.startDate,
  endDate: state.order.endDate,
  startTime: state.order.startTime,
  isUseInsurance: state.order.isUseInsurance,
  isUseWallet: state.order.isUseWallet,
  isUsePoint: state.order.isUsePoint,
  isUsePromocode: state.order.isUsePromocode,
  homeAddress: state.order.homeAddress,
  promoCode: state.order.promoCode,
  orderDetail: state.order.orderDetail,
  totalPrice: state.order.orderDetail.total_price,
  insurancePrice: state.order.orderDetail.insurance_price,
  userWallets: state.order.orderDetail.user_wallets,
  userPoints: state.order.orderDetail.user_points,
  promoCodeDiscount: state.order.orderDetail.promo_code_discount,
  errorMessage: state.order.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  orderActions: bindActionCreators(orderActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pay);
