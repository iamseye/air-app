import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchCascader from './searchCascader';
import SearchDates from './searchDates';
import SearchPriceItem from './searchPriceItem';
import SearchMultiSelect from './searchMultiSelect';
import SearchSlider from './searchSlider';

import * as searchActions from '../../../actions/searchAction';
import './searchBar.css';

class SearchBar extends Component {
  state = {
  };

  handleSelectItem = (selectCategory, selectedItem) => {
    if (selectCategory === 'areas') {
      this.props.searchActions.setSearchArea(selectedItem);
    } else if (selectCategory === 'vehicleTypes') {
      this.props.searchActions.setSearchVehicleType(selectedItem);
    }
  }

  handleSelectBrand = (valueArray) => {
    this.props.searchActions.setSearchBrand(valueArray[0] ? valueArray[0] : '');
    this.props.searchActions.setSearchSeries(valueArray[1] ? valueArray[1] : '');
    this.props.searchActions.setSearchSeriesModel(valueArray[2] ? valueArray[2] : '');
    this.props.searchActions.setSearchYear(valueArray[3] ? valueArray[3] : '');
  }

  componentDidUpdate(prevProps) {
    if (this.props.area !== prevProps.area ||
        this.props.vehicleType !== prevProps.vehicleType ||
        this.props.brand !== prevProps.brand ||
        this.props.series !== prevProps.series ||
        this.props.seriesModel !== prevProps.seriesModel ||
        this.props.year !== prevProps.year ||
        this.props.price !== prevProps.price
    ) {
      this.props.submitSearch();
    }
  }

  render() {
    return (
      <div className="searchBar">
        <SearchMultiSelect
          selectCategory="areas"
          name="地區"
          options={this.props.areaOptions}
          handleSelectItem={this.handleSelectItem}
        />
        <SearchMultiSelect
          selectCategory="vehicleTypes"
          name="車型"
          options={this.props.vehicleTypeOptions}
          handleSelectItem={this.handleSelectItem}
        />
        <SearchCascader
          options={this.props.brandOptions}
          handleSelectBrand={this.handleSelectBrand}
        />

        <SearchSlider
          name="單日體驗價格"
          submitSearch={this.props.submitSearch}
          defaultOptions={this.props.priceOptions}
        />


        <SearchDates
          submitSearch={this.props.submitSearch}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  submitSearch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  area: state.search.area,
  vehicleType: state.search.vehicleType,
  brand: state.search.brand,
  series: state.search.series,
  seriesModel: state.search.seriesModel,
  year: state.search.year,
  price: state.search.price,
  brandOptions: state.search.brandOptions,
  vehicleTypeOptions: state.search.vehicleTypeOptions,
  areaOptions: state.search.areaOptions,
  priceOptions: state.search.priceOptions,
});

const mapDispatchToProps = dispatch => ({
  searchActions: bindActionCreators(searchActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
