import React, { Component } from 'react';
import { DatePicker, TimePicker } from 'antd';
import PropTypes from 'prop-types';

class PaymentCard extends Component {
  state = {
    pickUpAtHome: false,
  }

  handleSubmit = () => this.props.handleSubmit();

  pickStartDate(date, dateString) {
    console.log(date, dateString);
  }

  pickEndDate(date, dateString) {
    console.log(date, dateString);
  }

  pickStartTime(time, timeString) {
    console.log(time, timeString);
  }

  pickEndTime(time, timeString) {
    console.log(time, timeString);
  }

  selectPickUpLocation = () => {
    this.setState({ pickUpAtHome: !this.state.pickUpAtHome });
  }

  render() {
    return (
      <div className="payment_info">
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

          <TimePicker format="HH:mm" onChange={this.pickEndTime.bind(this)} />
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
                <input placeholder="請輸入地址" value="" />
              </div> :
              <div>
                <input readOnly value={this.state.carCenterAddress} />
              </div> }
          </div>
          { this.state.pickUpAtHome ?
            <div className="detail__alert">
              <a href="">自訂取車地點將會有額外的費用</a>
            </div> : '' }
        </div>

        <input className="detail__code" placeholder="請輸入優惠代碼" />

        <div className="detail__goPayment" onClick={() => this.handleSubmit()}>預約體驗</div>
      </div>
    );
  }
}

PaymentCard.propTypes = {
  rentPrice: PropTypes.number.isRequired,
  buyPrice: PropTypes.number.isRequired,
  carCenterAddress: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default PaymentCard;
