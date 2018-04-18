import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../utils/Icon';
import { ICONS } from '../../utils/constants';
import './style.css';


export default class DropDownButton extends Component {
  state = {
    showOptions: false,
    selectedItem: '',
  }

  handleSelectItem = (selectedItem) => this.props.handleSelectItem(this.props.selectCategory, selectedItem);

  handleClickCategory() {
    this.setState({ showOptions: !this.state.showOptions });
  }

  handleClickItem(option) {
    this.setState({ showOptions: !this.state.showOptions });
    this.setState({ selectedItem: option });
    this.handleSelectItem(option);
  }

  render() {
    const options = this.props.options.map((item, index) => (
      <p key={index} onClick={() => this.handleClickItem(item)}>
        {item}
      </p>
    ));

    const dropDownBox = (
      <div className="dropDownBox">
        <p onClick={() => this.handleClickItem('')}> 不限{this.props.name} </p>
        {options}
      </div>
    );

    return (
      <div className="dropDownButton">
        <div onClick={() => this.handleClickCategory()}>
          <span>
            { this.state.selectedItem !== '' ? this.state.selectedItem : this.props.name}
          </span>
          { this.state.selectedItem !== '' ? '' : <Icon icon={ICONS.DROP_DOWN} /> }
        </div>
        {this.state.showOptions ? dropDownBox : ''}
      </div>
    );
  }
}

DropDownButton.propTypes = {
  name: PropTypes.string.isRequired,
  selectCategory: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSelectItem: PropTypes.func.isRequired,
};
