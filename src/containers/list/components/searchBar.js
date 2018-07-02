import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBarItem from './searchBarItem';
import * as searchActions from '../../../actions/searchAction';
import './searchBar.css';
//import api from '../../../utils/api';

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
    // console.log(selectedItem);
    // const selectedArray = [];
    // selectedArray.push(selectedItem);
    // if (selectCategory === 'brand') {
    //   // only set english brand into store
    //   const selectedEnglishBrand = selectedItem.split(' ');
    //   this.props.searchActions.setSearchBrand(selectedEnglishBrand[1]);
    // } else if (selectCategory === 'vehicleTypes') {
    //   this.props.searchActions.setSearchVehicleType(selectedArray);
    // } else if (selectCategory === 'areas') {
    //   this.props.searchActions.setSearchArea(selectedArray);
    // }
  }

  render() {
    return (
      <div className="searchBar">
        <SearchBarItem
          selectCategory="areas"
          name="地區"
          options={this.props.areaOptions}
          handleSelectItem={this.handleSelectItem}
          submitSearch={this.props.submitSearch}
        />
        <SearchBarItem
          selectCategory="vehicleTypes"
          name="車型"
          options={this.props.vehicleTypeOptions}
          handleSelectItem={this.handleSelectItem}
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
