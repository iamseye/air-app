import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from '../../../utils/Icon';
import { ICONS } from '../../../utils/constants';
import * as searchActions from '../../../actions/searchAction';
import './searchBar.css';

class SearchBrandItem extends Component {
  state = {
    showOptions: false,
    selectedItem: [],
  }
  submitSearch = () => this.props.submitSearch();

  handleClickCategory = () => {
    this.setState({ showOptions: !this.state.showOptions });
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
    }
  }

  render() {

    const options = this.props.brandOptions.map((item, index) => (
      <Select.Option value={item}> {item}</Select.Option>
    ));

    const optionBox = (
      <div className="searchBarItem＿＿box">
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="廠牌"
          optionFilterProp="children"
          onChange={value => this.selectBrand(value)}
        >
          <Select.Option value="">不限廠牌</Select.Option>
          { options }
        </Select>

        <div className="searchBarItem__confirm">
          <span onClick={() => this.cancelSelected()}>取消</span>
          <span onClick={() => {this.submitSearch(); this.closeOptionBox()}}>套用</span>
        </div>
      </div>
    );

    return (
      <div className={this.state.selectedItem.length > 0 ? 'searchBarItem__active' : 'searchBarItem'}>
        <span onClick={() => this.handleClickCategory()} >
          {(() => {
              switch (this.state.selectedItem.length) {
                case 0: return this.props.name;
                case 1: return this.state.selectedItem[0];
                default: return `${this.state.selectedItem.length} ${this.props.name}`;
              }
            })()}
        </span>
        { this.state.selectedItem.length > 0 ? '' : <Icon icon={ICONS.DROP_DOWN} size={18} /> }
        { this.state.showOptions ? optionBox : '' }
      </div>
    );
  }
}

SearchBrandItem.propTypes = {
  name: PropTypes.string.isRequired,
  selectCategory: PropTypes.string.isRequired,
  handleSelectItem: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBrandItem);
