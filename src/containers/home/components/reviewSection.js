import React from 'react';
import Icon from '../../../utils/Icon';
import { ICONS } from '../../../utils/constants';
import './reviewSection.css';

const ReviewSection = () => (
  <div className="reviewSection">
    <div className="reviewSection__wraper">
      <h3>在AIRCNC 他們找到屬於自己的車 </h3>
      <div className="reviewSection__list">
        <div className="reviewSection__list">
          <div className="stepSection__text">
            <h4>探索車輛</h4>
            <p>在AIRCNC盡情探索各式各樣的車吧！</p>
          </div>
        </div>
        <div className="stepSection__item">
          { <Icon icon={ICONS.DROP_DOWN} size={18} /> }
          <div className="stepSection__text">
            <h4>盡情體驗</h4>
            <p>先開！才能知道這是不是你要的車！</p>
          </div>
        </div>
        <div className="stepSection__item">
          { <Icon icon={ICONS.DROP_DOWN} size={18} /> }
          <div className="stepSection__text">
            <h4>預約購買</h4>
            <p>好車是不等人的，趕快跟我們預定車輛吧！</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ReviewSection;
