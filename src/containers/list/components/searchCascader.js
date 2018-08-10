import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Cascader } from 'antd';
import api from '../../../utils/api';


class SearchCascader extends Component {
  constructor(props) {
    super(props);
    this.state = { options: null };
  }

  state = {
    subOptions: [],
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.options !== this.props.options) {
      this.setState({ options: this.arrayToCascaderArray(nextProps.options, false, true) })
    }
  }

  handleSelectBrand = (value) => this.props.handleSelectBrand(value);

  onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
    this.handleSelectBrand(value);
  }

  getSubOptions = (selectedOptions) => {
    const params = {
      brand: selectedOptions[0] && selectedOptions[0].value ? selectedOptions[0].value : '',
      series: selectedOptions[1] && selectedOptions[1].value ? selectedOptions[1].value : '',
      series_model: selectedOptions[2] && selectedOptions[2].value ? selectedOptions[2].value : '',
    };

    return api.getCarBrandOptions(params)
      .then((json) => {
        if (json && json.data) {
          this.setState({ subOptions: json.data.series || json.data.series_model || json.data.year });
        }
      });
  }

  arrayToCascaderArray(array, isLeaf = false, head = false) {
    const cascaderArray = [];
    if (!head) {
      cascaderArray.push({ value: '', label: '不限' });
    }

    array.forEach((item) => {
      let value = item;
      if (head) {
        value = item.split(' ')[1] ? item.split(' ')[1] : item;
      }
      cascaderArray.push({ value, label: item, isLeaf });
    });

    return cascaderArray;
  }

  loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    this.getSubOptions(selectedOptions)
      .then(() => {
        // load options lazily
        setTimeout(() => {
          targetOption.loading = false;
          if (selectedOptions.length === 3) {
            targetOption.children = this.arrayToCascaderArray(this.state.subOptions, true);
          } else {
            targetOption.children = this.arrayToCascaderArray(this.state.subOptions);
          }

          this.setState({
            options: [...this.state.options],
          });
        }, 1000);
      });
  }

  render() {
    return (
      <Cascader
        options={this.state.options}
        loadData={this.loadData}
        onChange={this.onChange}
        changeOnSelect
      />
    );
  }
}

SearchCascader.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSelectBrand: PropTypes.func.isRequired,
};

export default SearchCascader;
