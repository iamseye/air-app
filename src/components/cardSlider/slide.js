import React from 'react';

const slideStyle = {
//  backgroundImage: 'url(/assets/img/carPhoto.jpg)',
};

const Slide = () => (
  <div className="slide" style={slideStyle}>
    <h4 className="slide__name">
      <span>2016</span>
      <div>Benz C250</div>
    </h4>
    <div className="slide__price">
      <span>最低體驗價</span>
      <div>NT$ 3,000</div>
    </div>
  </div>
);

export default Slide;
