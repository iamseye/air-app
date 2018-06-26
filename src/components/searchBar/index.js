import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as searchActions from '../../actions/searchAction';
import SearchBarItem from '../searchBarItem';
import './style.css';


class SearchBar extends Component {
  state = {
  };

  handleSelectItem = (selectCategory, selectedItem) => {
    if (selectCategory === 'brand') {
      this.props.searchActions.setSearchBrand(selectedItem);
    } else if (selectCategory === 'vehicleTypes') {
      this.props.searchActions.setSearchVehicleType(selectedItem);
    } else if (selectCategory === 'areas') {
      this.props.searchActions.setSearchArea(selectedItem);
    }
  }

  submitSearch() {

  }

  render() {
    return (
      <div className="searchBar">
        <div className="searchBar__title"><span>我要預約體驗</span></div>
        <SearchBarItem
          selectCategory="brand"
          name="廠牌"
          options={this.props.brandOptions}
          handleSelectItem={this.handleSelectItem}
        />
        <SearchBarItem
          selectCategory="vehicleTypes"
          name="車型"
          options={this.props.vehicleTypeOptions}
          handleSelectItem={this.handleSelectItem}
        />
        <SearchBarItem
          selectCategory="areas"
          name="地區"
          options={this.props.areaOptions}
          handleSelectItem={this.handleSelectItem}
        />
        <div className="searchBar__button" onClick={()=> this.submitSearch()}>
          <span>搜尋</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchBrandType: state.search.searchBrandType,
  brandOptions: state.search.brandOptions,
  vehicleTypeOptions: state.search.vehicleTypeOptions,
  areaOptions: state.search.areaOptions,
});

const mapDispatchToProps = dispatch => ({
  searchActions: bindActionCreators(searchActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
