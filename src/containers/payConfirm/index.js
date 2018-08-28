import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as orderActions from '../../actions/orderAction';
import CreditCard from './creditCard';
import api from '../../utils/api';
import '../pay/style.css';

class PayConfirm extends Component {
  state = {
  }

  componentDidMount() {

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
  }

  render() {
    const { orderDetail, isUseInsurance, chosenDiscount, chosenDiscountValue, calTotalPrice } = this.props;
    return (
      <div className="payment">
        <div className="payment__wraper final">
          <div className="payment_final">
            <div
              className="payment_list--photo"
              style={{ backgroundImage: 'url(https://aircnc.com.tw/upload/users/album/source_img/2018-05-22-791-15449.jpg)' }}
            />
            <div className="payment_list--content">
              <h3><div>{orderDetail.car_year}</div><div>{orderDetail.car_name}</div></h3>
              <ul>
                <li><div>體驗費用<span>x {orderDetail.rent_days}日</span></div><div>{orderDetail.rent_price * orderDetail.rent_days}</div></li>
                { isUseInsurance ?
                  <li><div>保險費用<span>x {orderDetail.rent_days}日</span></div><div>{orderDetail.insurance_price}</div></li>
                  : '' }
                { orderDetail.emergency_fee !== 0 ?
                  <li><div>加急費用</div><div>{orderDetail.emergency_fee}</div></li>
                  : '' }
                { orderDetail.long_rent_discount !== 0 ?
                  <li><div>長租優惠</div><div>- {orderDetail.long_rent_discount}</div></li>
                  : '' }
                { chosenDiscount === 'PROMOCODE' && chosenDiscountValue !== 0 ?
                  <li><div>代碼優惠</div><div> - {chosenDiscountValue}</div></li>
                : '' }
                { chosenDiscount === 'WALLET' && chosenDiscountValue !== 0 ?
                  <li><div>電子錢包折抵</div><div> - {chosenDiscountValue}</div></li>
                : '' }
                { chosenDiscount === 'POINT' && chosenDiscountValue !== 0 ?
                  <li><div>優惠點數折抵</div><div> - {chosenDiscountValue}</div></li>
                : '' }
              </ul>
              <ul>
                <li><div>體驗總額</div><div>NT$ {calTotalPrice}</div></li>
              </ul>
            </div>

            <CreditCard />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isUseInsurance: state.order.isUseInsurance,
  orderDetail: state.order.orderDetail,
  insurancePrice: state.order.orderDetail.insurance_price,
  userWallets: state.order.orderDetail.user_wallets,
  userPoints: state.order.orderDetail.user_points,
  chosenDiscount: state.order.chosenDiscount,
  chosenDiscountValue: state.order.chosenDiscountValue,
  calTotalPrice: state.order.calTotalPrice,
  errorMessage: state.order.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  orderActions: bindActionCreators(orderActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PayConfirm);
