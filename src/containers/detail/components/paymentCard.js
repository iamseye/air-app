import React, { Component } from 'react';
import { DatePicker, TimePicker, Affix } from 'antd';
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
    top: 100,
    clickedSubmit: false,
  }

  submitToPay = () => this.props.submitToPay();

  disabledDate(current) {
    let unavailableDates = (current && current < moment().endOf('day'));
    this.props.carUnavailable.map((item) => {
      unavailableDates = unavailableDates || (current > moment(item.from) && current < moment(item.to));
    });

    return unavailableDates || current < moment(this.props.availableFrom) || current > moment(this.props.availableTo);
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

  selectPickUpLocation = () => {
    this.setState({ pickUpAtHome: !this.state.pickUpAtHome });
  }

  render() {
    return (
      <Affix offsetTop={this.state.top}>
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
            <DatePicker onChange={this.pickStartDate.bind(this)} disabledDate={current => this.disabledDate(current)} />

            <TimePicker format="HH:mm" onChange={this.pickStartTime.bind(this)} />
          </div>

          <div className="detail__select">
            <DatePicker onChange={this.pickEndDate.bind(this)} disabledDate={current => this.disabledDate(current)} />

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

          { !this.state.canSubmitToPay && this.state.clickedSubmit ?
            <span>請輸入日期與時間</span> : ''
          }

          <div className="detail__goPayment" onClick={() => {this.submitToPay(); { this.setState({ clickedSubmit: true }); }} }>
            預約體驗
          </div>
        </div>
      </Affix>
    );
  }
}

PaymentCard.propTypes = {
  rentPrice: PropTypes.number.isRequired,
  buyPrice: PropTypes.number.isRequired,
  carCenterAddress: PropTypes.string.isRequired,
  submitToPay: PropTypes.func.isRequired,
  carUnavailable: PropTypes.arrayOf(PropTypes.shape({
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  })).isRequired,
  availableFrom: PropTypes.string.isRequired,
  availableTo: PropTypes.string.isRequired,
};


const mapStateToProps = state => ({
  promoCode: state.order.promoCode,
  homeAddress: state.order.homeAddress,
});

const mapDispatchToProps = dispatch => ({
  orderActions: bindActionCreators(orderActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentCard);
