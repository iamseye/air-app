import React, { Component } from 'react';
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

  render() {
    return (
      <div className="searchBar">
        <div>
          <span>我要預約體驗</span>
        </div>
        <DropDownButton
          name="廠牌"
          options={this.state.brandValues}
        />
        <DropDownButton
          name="車型"
          options={this.state.vehicleTypes}
        />
        <DropDownButton
          name="地區"
          options={this.state.areas}
        />
      </div>
    );
  }
}

export default SearchBar;
