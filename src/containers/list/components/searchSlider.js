import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Slider } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from '../../../utils/Icon';
import { ICONS } from '../../../utils/constants';
import * as searchActions from '../../../actions/searchAction';
import './searchBar.css';

class SearchSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { priceOptions: [0, 0] };
  }

  state = {
    minValueOnSlider: 0,
    maxValueOnSlider: 10000,
  }

  submitSearch = () => this.props.submitSearch();

  componentWillReceiveProps(nextProps) {
    if (nextProps.priceOptions !== this.props.priceOptions && nextProps.priceOptions.length > 0) {
      this.setState({ priceOptions: nextProps.priceOptions });
    }
  }

  componentDidUpdate(prevProps) {
    // set default price value on slider
    if (this.props.priceOptions !== prevProps.priceOptions) {
      if (this.props.priceOptions.length > 0) {
        const maxDigital = this.props.priceOptions[1].toString().length;
        const minDigital = this.props.priceOptions[0].toString().length;
        this.setState({
          minValueOnSlider: 10 ** (minDigital - 1),
          maxValueOnSlider: 10 ** maxDigital,
        });
      }
    }
  }

  onChange(selectedPrice) {
    this.setState({ priceOptions: selectedPrice });
    this.props.searchActions.setSearchPrice(selectedPrice);
  }

  render() {
    const { priceOptions } = this.props;
    return (
      <div>
        <div>{this.props.name}</div>
        <Slider
          style={{ width: '200px' }}
          range
          value={this.state.priceOptions}
          max={this.state.maxValueOnSlider}
          min={this.state.minValueOnSlider}
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}

SearchSlider.propTypes = {
  name: PropTypes.string.isRequired,
  submitSearch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  priceOptions: state.search.priceOptions,
});

const mapDispatchToProps = dispatch => ({
  searchActions: bindActionCreators(searchActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchSlider);
