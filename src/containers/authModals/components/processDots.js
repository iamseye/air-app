import React from 'react';
import PropTypes from 'prop-types';
import '../style.css';

const ProcessDots = props => (
  <div className="statusDot__list">
    <div className={props.step === 1 ? 'statusDot__thisStep' : 'tatusDot__otherStep'} />
    <div className={props.step === 2 ? 'statusDot__thisStep' : 'tatusDot__otherStep'} />
    <div className={props.step === 3 ? 'statusDot__thisStep' : 'tatusDot__otherStep'} />
  </div>
);

ProcessDots.propTypes = {
  step: PropTypes.number.isRequired,
};

export default ProcessDots;
