import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as orderActions from '../../actions/orderAction';
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
    const { orderDetail, isUseInsurance, isUsePromocode, isUsePoint, isUseWallet, userPoints, userWallets } = this.props;
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
              </ul>
              <ul>
                { isUsePromocode ?
                  <li><div>代碼優惠</div><div> - {orderDetail.promo_code_discount}</div></li>
                : '' }
                { isUseWallet ?
                  <li><div>電子錢包折抵</div><div> - {userWallets}</div></li>
                : '' }
                { isUsePoint ?
                  <li><div>優惠點數折抵</div><div> - {userPoints}</div></li>
                : '' }
              </ul>
              <ul>
                <li><div>體驗總額</div><div>NT$ {orderDetail.total_price}</div></li>
              </ul>
            </div>

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
              <input type="text" className="payment__input" placeholder="XXXX-XXXX-XXXX-XXXX" />
              <input type="checkbox" id="saveCard" /><label for="saveCard">儲存這張信用卡</label>
              <div className="paymentBTN">付款</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isUseInsurance: state.order.isUseInsurance,
  isUseWallet: state.order.isUseWallet,
  isUsePoint: state.order.isUsePoint,
  isUsePromocode: state.order.isUsePromocode,
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

export default connect(mapStateToProps, mapDispatchToProps)(PayConfirm);
