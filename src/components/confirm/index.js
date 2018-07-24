import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Confirm = props => (
  <div className="done">
    <div className="doneBox">
      <p>{props.description}</p>
      <div className="doneBTNarea">
        <div className="doneBTN" onClick={ () => props.buttonAction()}>
          <span>{props.buttonText}</span>
        </div>
      </div>
    </div>
  </div>
);

Confirm.propTypes = {
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
};

export default Confirm;
