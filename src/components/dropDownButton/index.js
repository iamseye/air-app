import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Icon from '../../utils/Icon';
import { ICONS } from '../../utils/constants';

export default class DropDownButton extends Component {
  state = {
    showOptions: false,
  }
  //selectedOption = () => this.props.selectedOption(this.props.selectedOption)

  handleClick() {
    this.setState({ showOptions: !this.state.showOptions });
  }

  render() {
    const options = this.props.options.map(item => (
      <p key={item}>
        {item}
      </p>
    ));

    const dropDownBox = (
      <div className="dropDownBox">
        {options}
      </div>
    );

    return (
      <div className="dropDownButton">
        <div onClick={() => this.handleClick()}>
          <span>{this.props.name}</span> <Icon icon={ICONS.DROP_DOWN} />
        </div>
        {this.state.showOptions ? dropDownBox : ''}
      </div>
    );
  }
}

DropDownButton.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
