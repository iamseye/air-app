import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

const slideStyle = {
//  backgroundImage: 'url(/assets/img/carPhoto.jpg)',
};

const CarCard = props => (
  <div className="carCard">
    <Link to="/detail/1">
      <div className="car__img" style={slideStyle}>
        <div className="car__price">
          <span>最低體驗價</span>
          <div>NT$ {props.rentPrice / 2}</div>
        </div>
      </div>
      <div className="car__content">
        <h4 className="car__name">
          <span>{props.year}</span>
          <div>{props.brand} {props.seriesModel}</div>
        </h4>
        <div className="car__otherInfo">
          <div className="car__buyPrice">直接購買價 {props.buyPrice / 10000}萬</div>
        </div>
      </div>
    </Link>
  </div>
);

CarCard.propTypes = {
  rentPrice: PropTypes.number.isRequired,
  buyPrice: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  seriesModel: PropTypes.string.isRequired,
};

export default CarCard;
