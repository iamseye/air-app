import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as searchActions from '../../actions/searchAction';
import DropDownButton from '../dropDownButton';
import './style.css';

class SearchBar extends Component {
  state = {
    brandValues: [],
    vehicleTypes: [],
    areas: [],
  };

  componentDidMount() {
    this.prepareData();
  }

  prepareData() {
    this.setState({
      brandValues: ['BMW', 'Audi', 'M BENZ'],
      vehicleTypes: ['四門房車', '休旅車', '敞篷車', '性能跑車'],
      areas: ['台北', '台中', '台南'],
    });
  }

  handleSelectOption(selectType, selectedOption) {
    if (selectType === 'brand') {
      console.log(selectedOption);
    }
  }

  submitSearch() {

  }

  render() {
    return (
      <div className="searchBar">
        <div>
          <span>我要預約體驗</span>
        </div>
        <DropDownButton onClick={this.props.searchActions.setSearchBrandType('123')}
          selectType="brand"
          name="廠牌"
          options={this.state.brandValues}
          handleSelectOption={this.handleSelectOption}
        />
        <DropDownButton
          selectType="vehicleTypes"
          name="車型"
          options={this.state.vehicleTypes}
          handleSelectOption={this.handleSelectOption}
        />
        <DropDownButton
          selectType="areas"
          name="地區"
          options={this.state.areas}
          handleSelectOption={this.handleSelectOption}
        />
        <div>
          <span onClick={()=> this.submitSearch()}>搜尋</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchBrandType: state.search.searchBrandType,
});

const mapDispatchToProps = dispatch => ({
  searchActions: bindActionCreators(searchActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
