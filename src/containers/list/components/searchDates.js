import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from '../../../utils/Icon';
import { ICONS } from '../../../utils/constants';
import * as searchActions from '../../../actions/searchAction';
import './searchBar.css';
import api from '../../../utils/api';

class SearchDates extends Component {
  state = {
  }
  submitSearch = () => this.props.submitSearch();

  render() {
    const { RangePicker } = DatePicker;

    return (
      <RangePicker />
    );
  }
}

SearchDates.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchDates);
