import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../utils/Icon';
import { ICONS } from '../../utils/constants';
import './style.css';


export default class DropDownButton extends Component {
  state = {
    showOptions: false,
    selectedOption: '',
  }

  handleSelectOption = (selectedOption) => this.props.handleSelectOption(this.props.selectType, selectedOption);

  handleClick() {
    this.setState({ showOptions: !this.state.showOptions });
  }

  handleClickOption(option) {
    this.setState({ showOptions: !this.state.showOptions });
    this.setState({ selectedOption: option });
    this.handleSelectOption(option);
  }

  render() {
    const options = this.props.options.map((item, index) => (
      <p key={index} onClick={() => this.handleClickOption(item)}>
        {item}
      </p>
    ));

    const dropDownBox = (
      <div className="dropDownBox">
        <p onClick={() => this.handleClickOption('')}> 不限{this.props.name} </p>
        {options}
      </div>
    );

    return (
      <div className="dropDownButton">
        <div onClick={() => this.handleClick()}>
          <span>
            { this.state.selectedOption !== '' ? this.state.selectedOption : this.props.name}
          </span>
          { this.state.selectedOption !== '' ? '' : <Icon icon={ICONS.DROP_DOWN} /> }
        </div>
        {this.state.showOptions ? dropDownBox : ''}
      </div>
    );
  }
}

DropDownButton.propTypes = {
  name: PropTypes.string.isRequired,
  selectType: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSelectOption: PropTypes.func.isRequired,
};
