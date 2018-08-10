import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

class SearchMultiSelect extends Component {
  state = {
    selectedItem: [],
  }
  handleChange = (value) => {
    console.log(value);
    this.setState({
      selectedItem: value,
    }, () => this.handleSelectItem(this.state.selectedItem));
  }

  handleSelectItem = (selectedItem) => this.props.handleSelectItem(this.props.selectCategory, selectedItem);

  render() {
    const { selectCategory, options, name } = this.props;
    const Option = Select.Option;

    const children = [];
    options.forEach((item) => {
      children.push(<Option key={item}>{item}</Option>);
    });

    return (
      <Select
        mode="multiple"
        style={{ width: '200px' }}
        placeholder={`搜尋${name}`}
        onChange={this.handleChange}
      >
        {children}
      </Select>
    );
  }
}

SearchMultiSelect.propTypes = {
  name: PropTypes.string.isRequired,
  selectCategory: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSelectItem: PropTypes.func.isRequired,
};

export default SearchMultiSelect;
