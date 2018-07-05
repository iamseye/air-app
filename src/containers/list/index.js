import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchBar from './components/searchBar';
import * as styleActions from '../../actions/styleAction';
import * as searchActions from '../../actions/searchAction';
import CarCard from '../../components/carCard';
import api from '../../utils/api';
import './style.css';

class List extends Component {
  state = {
    carArray: [],
  }

  componentDidMount() {
    api.getInitailInfo()
      .then((json) => {
        if (json && json.data) {
          this.props.searchActions.setSearchBrandOptions(json.data.vehicleBrand);
          this.props.searchActions.setSearchVehicleTypeOptions(json.data.vehicleType);
          this.props.searchActions.setSearchAreaOptions(json.data.area);
          this.props.searchActions.setSearchPriceOptions(json.data.price);
        }
      });

    this.submitSearch();
  }

  submitSearch = () => {
    const params = {
      area: this.props.area,
      brand: this.props.brand,
      vehicle_type: this.props.vehicleType,
      series: this.props.series,
      series_model: this.props.seriesModel,
      year: this.props.year,
      start_date: new Date(this.props.startDate).getTime() / 1000,
      end_date: new Date(this.props.endDate).getTime() / 1000,
      price: this.props.price,
    };

    api.getSearchSellCars(params)
      .then((json) => {
        if (json && json.data) {
          console.log(json.data);
          this.setState({ carArray: json.data });
        }
      });
  }

  render() {
    return (
      <div className="list">
        <SearchBar
          submitSearch={this.submitSearch}
        />

        <div className="listSection__wraper">
          <div className="cardSlider__list">
          { this.state.carArray.map((item, i) => (
            <CarCard
              key={item.id}
              rentPrice={item.rent_price}
              buyPrice={item.buy_price}
              year={item.car.data.year}
              brand={item.car.data.brand}
              seriesModel={item.car.data.series_model}
            />
          ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isActiveWhiteFilter: state.style.isActiveWhiteFilter,
  brand: state.search.brand,
  vehicleType: state.search.vehicleType,
  area: state.search.area,
  series: state.search.series,
  seriesModel: state.search.seriesModel,
  year: state.search.year,
  startDate: state.search.startDate,
  endDate: state.search.endDate,
  price: state.search.price,
});

const mapDispatchToProps = dispatch => ({
  styleActions: bindActionCreators(styleActions, dispatch),
  searchActions: bindActionCreators(searchActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
