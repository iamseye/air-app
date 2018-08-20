import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as orderActions from '../../actions/orderAction';
import api from '../../utils/api';
import CarExaminationModal from './components/carExaminationModal';
import ExaminationSection from './components/examinationSection';
import PaymentCard from './components/paymentCard';
import CarDetailSection from './components/carDetailSection';
import './style.css';

class Detail extends Component {
  state = {
    year: 0,
    name: '',
    description: '',
    mileage: 0,
    class: '',
    outsideColor: '',
    insideColor: '',
    displacement: 0,
    shiftSystem: '',
    fuel: '',
    doorNumber: 0,
    passengerNumber: 0,
    drivenMethod: '',
    examination_date: '',
    examination: [],
    accessories: [],
    equipment: [],
    rentPrice: 0,
    buyPrice: 0,
    carCenterAddress: '',
    showModal: false,
    canSubmitToPay: false,
    sellCarId: '',
    availableFrom: '',
    availableTo: '',
    carUnavailable: [],
  }

  componentDidMount() {
    const sellCarId = this.props.match.params.sellCarId ? this.props.match.params.sellCarId : 0;

    api.getTheSellCar(sellCarId)
      .then((json) => {
        if (json && json.data && json.data.car && json.data.car.data && json.data.car_center.data && json.data.sell_car_accessory.data) {
          console.log(json.data);
          const car = json.data.car.data;
          const carCenter = json.data.car_center.data;
          const examination = json.data.sell_car_examination.data;
          const equipment = json.data.sell_car_equipment.data;
          const sellCar = json.data;
          let carUnavailable = [];

          if (json.data.car_unavailable_dates && json.data.car_unavailable_dates.data) {
            carUnavailable = json.data.car_unavailable_dates.data;
          }

          this.setState({
            year: car.year,
            name: `${car.brand} ${car.brand_ch} ${car.series}`,
            availableFrom: json.data.available_from,
            availableTo: json.data.available_to,
            description: sellCar.description,
            mileage: sellCar.mileage,
            class: sellCar.class,
            outsideColor: sellCar.outside_color,
            insideColor: sellCar.inside_color,
            displacement: sellCar.displacement,
            shiftSystem: sellCar.shift_system,
            fuel: sellCar.fuel,
            doorNumber: sellCar.door_number,
            passengerNumber: sellCar.passenger_number,
            drivenMethod: sellCar.driven_method,
            examination_date: sellCar.examination_date,
            examination,
            equipment,
            accessories: json.data.sell_car_accessory.data,
            rentPrice: json.data.rent_price,
            buyPrice: json.data.buy_price,
            carCenterAddress: carCenter.address,
            sellCarId,
            carUnavailable,
          });
        }
      });
  }

  showModal = () => {
    this.setState({
      showModal: true,
    });
  }

  hideModal = () => {
    this.setState({
      showModal: false,
    });
  }

  submitToPay = () => {
    if (this.props.startDate && this.props.endDate && this.props.startTime) {
      this.setState({
        canSubmitToPay: true,
      });
    } else {
      this.setState({
        canSubmitToPay: false,
      });
    }
  }

  render() {
    if (this.state.canSubmitToPay) {
      return <Redirect to={`/pay/${this.state.sellCarId}?startDate=${this.props.startDate}&endDate=${this.props.endDate}&startTime=${this.props.startTime}&promoCode=${this.props.promoCode}&homeAddress=${this.props.homeAddress}`} />;
    }

    return (
      <div className="detail">
        <div className="detail__banner">
          <div className="function">
            <div className="function__button">更多照片</div>
          </div>
        </div>

        <div className="detail__wraper">
          <div className="detail_info">
            <div className="detail__infoItem">
              <h3>
                <div className="detail__name">
                  <span>{this.state.year}</span>
                  <div>{this.state.name}</div>
                </div>
              </h3>
              <p>
                {this.state.description}
              </p>
            </div>

            <CarDetailSection
              year={this.state.year}
              outsideColor={this.state.outsideColor}
              insideColor={this.state.insideColor}
              displacement={this.state.displacement}
              shiftSystem={this.state.shiftSystem}
              fuel={this.state.fuel}
              doorNumber={this.state.doorNumber}
              passengerNumber={this.state.passengerNumber}
              drivenMethod={this.state.drivenMethod}
            />

            <ExaminationSection
              examination_date={this.state.examination_date}
              classLevel={this.state.class}
              mileage={this.state.mileage}
              examination={this.state.examination}
              showModal={() => this.showModal()}
            />

            <div className="detail__infoItem">
              <h3>體驗保險</h3>
              <p><span>乙式車險</span>、<span>失竊險</span>、<span>免追償</span><span className="insurance">詳細說明</span></p>
            </div>

            <div className="detail__infoItem">
              <h3>隨車配件</h3>
              <ul className="detail__equipment">
                { this.state.accessories.map(item => (
                  <li key={item.name}><img src={`/assets/img/icon_accessories_.svg`} alt="accessory_icon" />{ item.name }</li>
                  ))
                }
              </ul>
            </div>
          </div>

          <PaymentCard
            rentPrice={this.state.rentPrice}
            buyPrice={this.state.buyPrice}
            carCenterAddress={this.state.carCenterAddress}
            submitToPay={() => this.submitToPay()}
            carUnavailable={this.state.carUnavailable}
            availableFrom={this.state.availableFrom}
            availableTo={this.state.availableTo}
            canSubmitToPay={this.state.canSubmitToPay}
          />

        </div>

        <CarExaminationModal
          examination_date={this.state.examination_date}
          classLevel={this.state.class}
          mileage={this.state.mileage}
          examination={this.state.examination}
          equipment={this.state.equipment}
          year={this.state.year}
          name={this.state.name}
          isOpen={this.state.showModal}
          hideModal={() => this.hideModal()}
        />

      </div>
    );
  }
}

const mapStateToProps = state => ({
  startDate: state.order.startDate,
  endDate: state.order.endDate,
  startTime: state.order.startTime,
  promoCode: state.order.promoCode,
  homeAddress: state.order.homeAddress,
});

const mapDispatchToProps = dispatch => ({
  orderActions: bindActionCreators(orderActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
