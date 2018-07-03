import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import Icon from '../../../utils/Icon';
import { ICONS } from '../../../utils/constants';
import './searchBar.css';

export default class SearchBrandItem extends Component {
  state = {
    showOptions: false,
    selectedItem: [],
  }
  handleSelectItem = (selectedItem) => this.props.handleSelectItem(this.props.selectCategory, selectedItem);
  submitSearch = () => this.props.submitSearch();

  cancelSelected() {
    this.setState({
      selectedItem: [],
    }, () => this.handleSelectItem(this.state.selectedItem));

    this.closeOptionBox();
  }

  handleClickCategory = () => {
    this.setState({ showOptions: !this.state.showOptions });
  }

  addSelectedItem(option) {
    this.setState({
      selectedItem: [...this.state.selectedItem, option],
    }, () => this.handleSelectItem(this.state.selectedItem));
  }

  removeSelectedItem(option) {
    const selectedArray = [...this.state.selectedItem]; // make a separate copy of the array
    const index = selectedArray.indexOf(option);
    selectedArray.splice(index, 1);
    this.setState(
      { selectedItem: selectedArray },
      () => this.handleSelectItem(this.state.selectedItem),
    );
  }

  closeOptionBox = () => {
    this.setState({ showOptions: !this.state.showOptions });
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {

    const optionBox = (
      <div className="searchBarItem＿＿box">
        <div
          className="searchBarItem＿＿option"
          onClick={() => this.cancelSelected()}
        >
          不限{this.props.name}
        </div>

        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={value => this.handleChange(value)}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="tom">Tom</Select.Option>
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
