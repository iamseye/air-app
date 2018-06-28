import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as styleActions from '../../actions/styleAction';
import * as searchActions from '../../actions/searchAction';
import CarCard from '../../components/carCard';
import api from '../../utils/api';
import './style.css';

class List extends Component {
  state = {
    brand: [],
    vehicleType: [],
    area: [],
    carArray: [],
  }

  componentWillMount() {
    this.setState({
      brand: this.props.brand,
      vehicleType: this.props.vehicleType,
      area: this.props.area
    });
  }

  componentDidMount() {
    const params = {
      'area': this.state.area,
      'brand': this.state.brand,
      'vehicle_type': this.state.vehicleType,
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
    );
  }
}

const mapStateToProps = state => ({
  isActiveWhiteFilter: state.style.isActiveWhiteFilter,
  brand: state.search.brand,
  vehicleType: state.search.vehicleType,
  area: state.search.area,
});

const mapDispatchToProps = dispatch => ({
  styleActions: bindActionCreators(styleActions, dispatch),
  searchAction: bindActionCreators(searchActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
