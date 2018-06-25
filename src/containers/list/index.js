import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as styleActions from '../../actions/styleAction';
import CarCard from '../../components/carCard';
import './style.css';

class List extends Component {
  state = {}
  render() {
    return (
      <div className="list">
        <CarCard
          buyPrice="1200000"
          year="2016"
          brand="BENZ"
          series="C"
          seriesModel="C250"
        />
        <CarCard
          buyPrice="1200000"
          year="2016"
          brand="BENZ"
          series="C"
          seriesModel="C250"
        />
        <CarCard
          buyPrice="1200000"
          year="2016"
          brand="BENZ"
          series="C"
          seriesModel="C250"
        />
        <CarCard
          buyPrice="1200000"
          year="2016"
          brand="BENZ"
          series="C"
          seriesModel="C250"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isActiveWhiteFilter: state.style.isActiveWhiteFilter,
});

const mapDispatchToProps = dispatch => ({
  styleActions: bindActionCreators(styleActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
