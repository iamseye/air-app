import React, { Component } from 'react';
import Icon from '../../utils/Icon';
import { ICONS } from '../../utils/constants';
import Slide from './slide';
import './style.css';

class SearchBar extends Component {
  state = {
  };

  render() {
    return (
      <div className="cardSlider">
        <button>
          <Icon icon={ICONS.DROP_DOWN} />
        </button>
        <div className="cardSlider__cards">
          <Slide />
          <Slide />
          <Slide />
        </div>
        <button>
          <Icon icon={ICONS.NEXT_ARROW} />
        </button>
      </div>
    );
  }
}

export default SearchBar;
