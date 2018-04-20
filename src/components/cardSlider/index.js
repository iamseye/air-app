import React from 'react';
import PropTypes from 'prop-types';
import Slide from './slide';
import './style.css';

const SearchBar = props => (
  <div className="cardSlider">
    <div className="cardSlider__wrapper">
      <h3>{props.title}</h3>
      <div className="cardSlider__list">
        <Slide />
        <Slide />
        <Slide />
      </div>
      <div className="cardSlider__linkMore">
        <span>更多車源</span>
        <img src="/assets/img/arrow.svg" alt="arrow icon" />
      </div>
    </div>
  </div>
);

SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SearchBar;
