import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as orderActions from '../../actions/orderAction';
import PaymentCard from './paymentCard';
import PaymentDiscount from './paymentDiscount';
import PaymentCreditCard from './paymentCreditCard';
import PayModal from './payModal';
import api from '../../utils/api';
import './style.css';

class Pay extends Component {
  state = {
    startTime: '',
    startDate: '',
    endDate: '',
    promoCode: '',
    pickupHomeAddress: '',
    sellCarId: '',
    returnHTML: '',
    isOpen: false,
  }

  componentDidMount() {
    const sellCarId = this.props.match.params.sellCarId ? this.props.match.params.sellCarId : 0;
    const url = new URL(window.location.href);

    this.setState({
      sellCarId,
      startTime: this.props.startTime || url.searchParams.get('startTime'),
      startDate: url.searchParams.get('startDate'),
      endDate: url.searchParams.get('endDate'),
      promoCode: url.searchParams.get('promoCode'),
      pickupHomeAddress: url.searchParams.get('homeAddress'),
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

  useInsurance = (isUseInsurance) => {
    this.props.orderActions.setIsUseInsurance(isUseInsurance);

    if (!isUseInsurance) {
      this.props.orderActions.setTotalPrice(this.props.totalPrice - this.props.insurancePrice);
    } else {
      this.props.orderActions.setTotalPrice(this.props.totalPrice + this.props.insurancePrice);
    }
  }

  createMarkup(text) {
    return { __html: text };
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
            promoCodeDiscount={this.props.orderDetail.promo_code_discount}
            longRentDiscount={this.props.orderDetail.long_rent_discount}
            rentPrice={this.props.orderDetail.rent_price}
            totalPrice={this.props.orderDetail.total_price}
            startDate={this.props.orderDetail.start_date}
            endDate={this.props.orderDetail.end_date}
            startTime={this.state.startTime}
            isUseInsurance={this.props.isUseInsurance}
          />
          <div className="payment_info">

            <div className="payment__infoItem">
              <h3>選擇保險</h3>

              <div className="payment__content--insurance">
                <div
                  className={this.props.isUseInsurance ? 'payment__content--item selected' : 'payment__content--item'}
                  onClick={() => this.useInsurance(true)}
                >
                  <h4><div>乙式保險</div><div>NT$ <span>250</span></div></h4>
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

            <PaymentDiscount />

            <div className="payment__infoItem">
              <div className="paymentCheck"><input id="rule" type="checkbox" /><label htmlFor="rule">我同意</label><span>使用規則</span></div>
              <div className="paymentBTN" onClick={() => this.submitPayment()}>確認並付款</div>
            </div>

          </div>
        </div>

        <PayModal
          isOpen={this.state.isOpen}
          returnHTML={this.state.returnHTML}
          hideModal={() => { this.setState({ isOpen: false }); }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  startDate: state.order.startDate,
  endDate: state.order.endDate,
  startTime: state.order.startTime,
  isUseInsurance: state.order.isUseInsurance,
  homeAddress: state.order.homeAddress,
  promoCode: state.order.promoCode,
  orderDetail: state.order.orderDetail,
  totalPrice: state.order.orderDetail.total_price,
  insurancePrice: state.order.orderDetail.insurance_price,
});

const mapDispatchToProps = dispatch => ({
  orderActions: bindActionCreators(orderActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pay);
