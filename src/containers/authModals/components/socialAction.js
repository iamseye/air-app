import React from 'react';
import PropTypes from 'prop-types';

const SocialAction = () => (
  <div>
    <div className="login__item--notice1">
      <span>或者改用以下帳號</span>
    </div>
    <div className="login__item--button2">
      <button className="fb"><images src="./images/fb.png" />使用Facebook帳號</button>
      <button className="google"><images src="./images/google.png" />使用Google帳號</button>
    </div>
    <div className="login__close" />
  </div>
);

SocialAction.propTypes = {
};

export default SocialAction;
