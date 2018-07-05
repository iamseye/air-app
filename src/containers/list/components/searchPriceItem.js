import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Slider } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from '../../../utils/Icon';
import { ICONS } from '../../../utils/constants';
import * as searchActions from '../../../actions/searchAction';
import './searchBar.css';

class SearchPriceItem extends Component {
  state = {
    showOptions: false,
    minValueOnSlider: 0,
    maxValueOnSlider: 10000,
    selectedPrice: [],
  }

  submitSearch = () => this.props.submitSearch();

  cancelSelected() {
    this.props.searchActions.setSearchPrice([]);
    this.setState({ selectedPrice: [] });
    this.closeOptionBox();
  }

  handleClickCategory = () => {
    if (!this.state.showOptions) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState({ showOptions: !this.state.showOptions });
  }

  handleOutsideClick = (e) => {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClickCategory();
    this.submitSearch();
  }

  closeOptionBox = () => {
    this.setState({ showOptions: !this.state.showOptions });
  }

  onChange(selectedPrice) {
    this.props.searchActions.setSearchPrice(selectedPrice);
    this.setState({ selectedPrice });
  }

  componentDidUpdate(prevProps) {
    // set default price value on slider
    if (this.props.priceOptions !== prevProps.priceOptions) {
      if (this.props.priceOptions.length > 0) {
        const maxDigital = this.props.priceOptions[1].toString().length;
        const minDigital = this.props.priceOptions[0].toString().length;
        this.setState({
          minValueOnSlider: 10 ** (minDigital - 1),
          maxValueOnSlider: 10 ** maxDigital
        });
      }
    }
  }

  render() {
    const optionBox = (
      <div className="searchBarItem＿＿box">
        <Slider
          range
          defaultValue={this.props.priceOptions && this.props.priceOptions.length > 0 ? [this.props.priceOptions[0], this.props.priceOptions[1]] : [0, 0]}
          max={this.state.maxValueOnSlider}
          min={this.state.minValueOnSlider}
          onChange={this.onChange.bind(this)}
        />

        <div className="searchBarItem__confirm">
          <span onClick={() => this.cancelSelected()}>取消</span>
          <span onClick={() => {this.submitSearch(); this.closeOptionBox()}}>套用</span>
        </div>
      </div>
    );

    return (
      <div className={ this.state.selectedPrice.length > 0 ? 'searchBarItem__active' : 'searchBarItem'}
      ref={(node) => { this.node = node; }}>
        <span onClick={() => this.handleClickCategory()} >
          {this.props.name}
        </span>
        { this.state.selectedPrice.length > 0 ? '' : <Icon icon={ICONS.DROP_DOWN} size={18} /> }
        { this.state.showOptions ? optionBox : '' }
      </div>
    );
  }
}

SearchPriceItem.propTypes = {
  name: PropTypes.string.isRequired,
  submitSearch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  priceOptions: state.search.priceOptions,
});

const mapDispatchToProps = dispatch => ({
  searchActions: bindActionCreators(searchActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPriceItem);
