import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchMultipalItem from './searchMultipalItem';
import SearchBrandItem from './searchBrandItem';
import SearchDates from './searchDates';
import * as searchActions from '../../../actions/searchAction';
import './searchBar.css';

class SearchBar extends Component {
  state = {
    showOptions: false,
    activeOption: '',
  };

  handleSelectItem = (selectCategory, selectedItem) => {
    if (selectCategory === 'areas') {
      this.props.searchActions.setSearchArea(selectedItem);
    } else if (selectCategory === 'vehicleTypes') {
      this.props.searchActions.setSearchVehicleType(selectedItem);
    }
  }

  render() {
    return (
      <div className="searchBar">
        <SearchMultipalItem
          selectCategory="areas"
          name="地區"
          options={this.props.areaOptions}
          handleSelectItem={this.handleSelectItem}
          submitSearch={this.props.submitSearch}
        />
        <SearchMultipalItem
          selectCategory="vehicleTypes"
          name="車型"
          options={this.props.vehicleTypeOptions}
          handleSelectItem={this.handleSelectItem}
          submitSearch={this.props.submitSearch}
        />
        <SearchBrandItem
          selectCategory="brand"
          name="車款"
          brandOptions={this.props.brandOptions}
          submitSearch={this.props.submitSearch}
        />
        <SearchDates
          selectCategory="dates"
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
  brandOptions: state.search.brandOptions,
  vehicleTypeOptions: state.search.vehicleTypeOptions,
  areaOptions: state.search.areaOptions,
});

const mapDispatchToProps = dispatch => ({
  searchActions: bindActionCreators(searchActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
