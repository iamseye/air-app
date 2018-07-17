import React, { Component } from 'react';
import { DatePicker, TimePicker } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as orderActions from '../../../actions/orderAction';

class PaymentCard extends Component {
  state = {
    pickUpAtHome: false,
    endTime: '',
  }

  pickStartDate(date, dateString) {
    this.props.orderActions.setStartDate(dateString);
  }

  pickEndDate(date, dateString) {
    this.props.orderActions.setEndDate(dateString);
  }

  pickStartTime(time, timeString) {
    this.props.orderActions.setStartTime(timeString);
    this.props.orderActions.setEndTime(timeString);
    this.setState({ endTime: timeString });
  }

  editHomeAddress(value) {
    this.props.orderActions.setHomeAdress(value);
    this.setState({ homeAddress: value });
  }

  editPromoCode(value) {
    this.props.orderActions.setPromoCode(value);
    this.setState({ promoCode: value });
  }

  selectPickUpLocation = () => {
    this.setState({ pickUpAtHome: !this.state.pickUpAtHome });
  }

  render() {
    return (
      <div className="payment_info--detail">
        <div className="detail__price">
          <span>短租體驗價 NT$</span><div>{this.props.rentPrice}</div><span>/日</span>
        </div>

        <div className="detail__otherPrice">
          <div>月租體驗價 NT$ <span>{this.props.rentPrice / 2 }</span>/日</div>
          <div>直接購買價 NT$ <span>{this.props.buyPrice / 10000}萬</span></div>
          <a>預約購買</a>
        </div>

        <div className="detail__select">
          <DatePicker onChange={this.pickStartDate.bind(this)} />

          <TimePicker format="HH:mm" onChange={this.pickStartTime.bind(this)} />
        </div>

        <div className="detail__select">
          <DatePicker onChange={this.pickEndDate.bind(this)} />

          { this.state.endTime !== '' ?
            <TimePicker format="HH:mm" disabled value={moment(this.state.endTime, 'HH:mm')} /> :
            <TimePicker format="HH:mm" disabled />
          }

        </div>

        <div className="detail__alert">
          <a href="">預約三天內的體驗，將會有額外的加急費用</a>
        </div>

        <div className="detail__positoin">
          <div className="detail__positionSelect">
            { this.state.pickUpAtHome ?
              <div onClick={() => this.selectPickUpLocation()}>交車站取車</div> :
              <div className="position__selected" onClick={() => this.selectPickUpLocation()}>交車站取車</div> }

            { this.state.pickUpAtHome ?
              <div className="position__selected" onClick={() => this.selectPickUpLocation()}>自定取車地點</div> :
              <div onClick={() => this.selectPickUpLocation()}>自定取車地點</div> }

          </div>
          <div className="detail__positionContent">
            { this.state.pickUpAtHome ?
              <div>
                <input type="text" placeholder="請輸入地址" value={this.props.homeAddress} onChange={e => this.editHomeAddress(e.target.value)} />
              </div> :
              <div>
                <div>{this.props.carCenterAddress}</div>
              </div> }
          </div>
          { this.state.pickUpAtHome ?
            <div className="detail__alert">
              <a href="">自訂取車地點將會有額外的費用</a>
            </div> : '' }
        </div>

        <input type="text" className="detail__code" placeholder="請輸入優惠代碼" value={this.props.promoCode} onChange={e => this.editPromoCode(e.target.value)} />

        <Link to="/pay">
          <div className="detail__goPayment">
            預約體驗
          </div>
        </Link>
      </div>
    );
  }
}

PaymentCard.propTypes = {
  rentPrice: PropTypes.number.isRequired,
  buyPrice: PropTypes.number.isRequired,
  carCenterAddress: PropTypes.string.isRequired,
};


const mapStateToProps = state => ({
  promoCode: state.order.promoCode,
  homeAddress: state.order.homeAddress,
});

const mapDispatchToProps = dispatch => ({
  orderActions: bindActionCreators(orderActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentCard);
