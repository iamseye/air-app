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
  }

  handleClickItem(option) {
    this.setState({ showOptions: !this.state.showOptions });
    this.setState({ selectedItem: option });
    this.handleSelectItem(option);
  }

  render() {
    const options = this.props.options.map((item, index) => (
      <div
        className="searchBarItem＿＿option"
        key={index} 
        onClick={() => this.handleClickItem(item)}
      >
        {item}
      </div>
    ));

    const optionBox = (
      <div className="searchBarItem＿＿box">
        <div
          className="searchBarItem＿＿option"
          onClick={() => this.handleClickItem('')}
        >
          不限{this.props.name}
        </div>
        {options}
      </div>
    );

    return (
      <div
        className="searchBarItem"
        onClick={() => this.handleClickCategory()}
        ref={(node) => { this.node = node; }}
      >
        <span>
          { this.state.selectedItem !== '' ? this.state.selectedItem : this.props.name}
        </span>
        { this.state.selectedItem !== '' ? '' : <Icon icon={ICONS.DROP_DOWN} size={18} /> }
        { this.state.showOptions ? optionBox : '' }
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
