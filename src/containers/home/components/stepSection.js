import React from 'react';
import Icon from '../../../utils/Icon';
import { ICONS } from '../../../utils/constants';
import './stepSection.css';

const StepSection = () => (
  <div className="stepSection">
    <div className="stepSection__wraper">
      <h2><span>3</span>步驟買車</h2>
      <p>創新的購前體驗，簡單三步驟協助你找到理想好車</p>
      <div className="stepSection__list">
        <div className="stepSection__item">
          { <div className="stepSection__icon"><Icon icon={ICONS.DROP_DOWN} size={18} /></div> }
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

export default StepSection;
