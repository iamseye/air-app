import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from '../../../utils/Icon';
import { ICONS } from '../../../utils/constants';
import * as searchActions from '../../../actions/searchAction';
import './searchBar.css';
import api from '../../../utils/api';

class SearchBrandItem extends Component {
  state = {
    showOptions: false,
    seriesOptions: [],
    seriesModelOptions: [],
    yearOptions: [],
  }
  submitSearch = () => this.props.submitSearch();

  handleClickCategory = () => {
    this.setState({ showOptions: !this.state.showOptions });
  }

  cancelSelected() {
    this.props.searchActions.setSearchBrand('');
    this.props.searchActions.setSearchSeries('');
    this.props.searchActions.setSearchSeriesModel('');
    this.props.searchActions.setSearchYear('');
    this.closeOptionBox();
  }

  closeOptionBox = () => {
    this.setState({ showOptions: !this.state.showOptions });
  }

  selectBrand(value) {
    if (!value) {
      this.props.searchActions.setSearchBrand('');
    } else {
      const valueArray = value.split(' ');
      this.props.searchActions.setSearchBrand(valueArray[1]);

      const params = {
        brand: valueArray[1],
      };

      api.getCarBrandOptions(params)
        .then((json) => {
          if (json && json.data) {
            this.setState({ seriesOptions: json.data.series });
          }
        });
    }
  }

  selectSeries(value) {
    if (!value) {
      this.props.searchActions.setSearchSeries('');
    } else {
      this.props.searchActions.setSearchSeries(value);

      const params = {
        brand: this.props.brand,
        series: value
      };

      api.getCarBrandOptions(params)
        .then((json) => {
          if (json && json.data) {
            this.setState({ seriesModelOptions: json.data.series_model });
          }
        });
    }
  }

  selectSeriesModel(value) {
    if (!value) {
      this.props.searchActions.setSearchSeriesModel('');
    } else {
      this.props.searchActions.setSearchSeriesModel(value);

      const params = {
        brand: this.props.brand,
        series: this.props.series,
        series_model: value
      };

      api.getCarBrandOptions(params)
        .then((json) => {
          if (json && json.data) {
            console.log(json.data);
            this.setState({ yearOptions: json.data.year });
          }
        });
    }
  }

  selectYear(value) {
    if (!value) {
      this.props.searchActions.setSearchYear('');
    } else {
      this.props.searchActions.setSearchYear(value);
    }
  }

  render() {
    const brandOptions = this.props.brandOptions.map((item, index) => (
      <Select.Option key={index} value={item}> {item}</Select.Option>
    ));

    const seriesOptions = this.state.seriesOptions.map((item, index) => (
      <Select.Option key={index} value={item}> {item}</Select.Option>
    ));

    const seriesModelOptions = this.state.seriesModelOptions.map((item, index) => (
      <Select.Option key={index} value={item}> {item}</Select.Option>
    ));

    const yearOptions = this.state.yearOptions.map((item, index) => (
      <Select.Option key={index} value={item}> {item}</Select.Option>
    ));

    const optionBox = (
      <div className="searchBarItem＿＿box">
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="廠牌"
          defaultValue={this.props.brand}
          optionFilterProp="children"
          onChange={value => this.selectBrand(value)}
        >
          <Select.Option value="">不限廠牌</Select.Option>
          { brandOptions }
        </Select>

        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="車系"
          defaultValue={this.props.series}
          optionFilterProp="children"
          onChange={value => this.selectSeries(value)}
        >
          <Select.Option value="">不限車系</Select.Option>
          { seriesOptions }
        </Select>

        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="車款"
          defaultValue={this.props.seriesModel}
          optionFilterProp="children"
          onChange={value => this.selectSeriesModel(value)}
        >
          <Select.Option value="">不限車款</Select.Option>
          { seriesModelOptions }
        </Select>

        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="年份"
          optionFilterProp="children"
          defaultValue={this.props.year}
          onChange={value => this.selectYear(value)}
        >
          <Select.Option value="">不限年份</Select.Option>
          { yearOptions }
        </Select>

        <div className="searchBarItem__confirm">
          <span onClick={() => this.cancelSelected()}>取消</span>
          <span onClick={() => {this.submitSearch(); this.closeOptionBox()}}>套用</span>
        </div>
      </div>
    );

    return (
      <div className={this.props.brand.length > 0 ? 'searchBarItem__active' : 'searchBarItem'}>
        <span onClick={() => this.handleClickCategory()} >
          { this.props.brand.length > 0 ? this.props.brand : this.props.name }
        </span>
        { this.props.brand.length > 0 ? '' : <Icon icon={ICONS.DROP_DOWN} size={18} /> }
        { this.state.showOptions ? optionBox : '' }
      </div>
    );
  }
}

SearchBrandItem.propTypes = {
  name: PropTypes.string.isRequired,
  submitSearch: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  area: state.search.area,
  brand: state.search.brand,
  series: state.search.series,
  seriesModel: state.search.seriesModel,
  year: state.search.year,
  brandOptions: state.search.brandOptions,
  vehicleTypeOptions: state.search.vehicleTypeOptions,
  areaOptions: state.search.areaOptions,
});

const mapDispatchToProps = dispatch => ({
  searchActions: bindActionCreators(searchActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBrandItem);
