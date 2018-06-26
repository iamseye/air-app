import React from 'react';
import PropTypes from 'prop-types';
import Slide from './slide';
import './style.css';

const CardSlider = props => (
  <div className="cardSlider">
    <div className="cardSlider__wrapper">
      <h3>{props.title}</h3>
      <div className="cardSlider__list">
        { props.carArray.map((item, i) => (
          i < 3 ?
            <Slide
              key={item.id}
              year={item.car.data.year}
              brand={item.car.data.brand}
              seriesModel={item.car.data.series_model}
              rentPrice={item.rent_price}
            /> : ''
        ))}
      </div>
      <div className="cardSlider__linkMore">
        <span>更多車源</span>
        <img src="/assets/img/arrow.svg" alt="arrow icon" />
      </div>
    </div>
  </div>
);

CardSlider.propTypes = {
  title: PropTypes.string.isRequired,
  carArray: PropTypes.arrayOf(PropTypes.shape({
    rent_price: PropTypes.number.isRequired,
    car: PropTypes.object.isRequired,
  })).isRequired,
};

export default CardSlider;
