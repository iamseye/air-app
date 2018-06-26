import React from 'react';
import PropTypes from 'prop-types';

const slideStyle = {
//  backgroundImage: 'url(/assets/img/carPhoto.jpg)',
};

const Slide = props => (
  <div className="slide" style={slideStyle}>
    <h4 className="slide__name">
      <span>{props.year}</span>
      <div>{`${props.brand} ${props.seriesModel}`} </div>
    </h4>
    <div className="slide__price">
      <span>最低體驗價</span>
      <div>NT$ {props.rentPrice / 2}</div>
    </div>
  </div>
);

Slide.propTypes = {
  year: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  seriesModel: PropTypes.string.isRequired,
  rentPrice: PropTypes.number.isRequired,
};

export default Slide;
