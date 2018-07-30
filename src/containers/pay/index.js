import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as orderActions from '../../actions/orderAction';
import PaymentCard from './paymentCard';
import api from '../../utils/api';
import './style.css';

class Pay extends Component {
  state = {
  }

  componentDidMount() {
    const sellCarId = this.props.match.params.sellCarId ? this.props.match.params.sellCarId : 0;

    const params = {
      sell_car_id: sellCarId,
      pickup_home_address: this.props.homeAddress,
      start_date: this.props.startDate,
      end_date: this.props.endDate,
      promo_code: this.props.promoCode,
    };

    api.getPaymentDetail(params)
      .then((json) => {
        if (json && json.data) {
          console.log(json.data);
          this.props.orderActions.setOrderDetail(json.data);
        }
      });
  }

  useInsurance = (isUseInsurance) => {
    this.props.orderActions.setIsUseInsurance(isUseInsurance);
  }

  render() {
    return (
      <div className="payment">

        <div className="payment__wraper">
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

            <div className="payment__infoItem">
              <h3>選擇付款信用卡</h3>
              <div className="payment__content">
                <div className="payment__content--item selected">
                  <h4><div>發卡銀行</div><div>玉山銀行</div></h4>
                  <ul>
                    <li><div>付款類型</div><div>MasterCard</div></li>
                    <li><div>信用卡號</div><div>5211-29XX-XXXX-8682</div></li>
                    <li><div>有效期限</div><div>09-2024</div></li>
                  </ul>
                </div>
                <div className="payment__content--item">新增信用卡</div>
              </div>
            </div>

            <div className="payment__infoItem">
              <div className="paymentCheck"><input id="rule" type="checkbox" /><label htmlFor="rule">我同意</label><a>使用規則</a></div>
              <div className="paymentBTN">確認並付款</div>
            </div>

          </div>

          <PaymentCard />
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
  homeAddress: state.order.homeAddress,
  promoCode: state.order.promoCode,
});

const mapDispatchToProps = dispatch => ({
  orderActions: bindActionCreators(orderActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pay);
