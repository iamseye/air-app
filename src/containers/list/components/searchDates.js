import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as searchActions from '../../../actions/searchAction';
import './searchBar.css';

class SearchDates extends Component {
  state = {
  }

  submitSearch = () => this.props.submitSearch();

  onChange(date, dateString) {
    this.props.searchActions.setSearchStartDate(dateString[0]);
    this.props.searchActions.setSearchEndDate(dateString[1]);
  }

  componentDidUpdate(prevProps) {
    if (this.props.startDate !== prevProps.startDate || this.props.endDate !== prevProps.endDate) {
      this.submitSearch();
    }
  }

  render() {
    const { RangePicker } = DatePicker;

    return (
      <RangePicker onChange={this.onChange.bind(this)} />
    );
  }
}

SearchDates.propTypes = {
  submitSearch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  startDate: state.search.startDate,
  endDate: state.search.endDate,
});

const mapDispatchToProps = dispatch => ({
  searchActions: bindActionCreators(searchActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchDates);
