import React from 'react';
import './areaSection.css';

const AreaSection = () => (
  <div className="areaSection home__section">
    <div className="areaSection__wraper home__wraper">
      <div id="areaSection__content">
        <h2>牽車到府服務</h2>
        <p>為求更好的體驗品質，我們提供以下地區免費牽車到府的服務</p>
        <div id="areaSection__list">
          <div className="areaSection__item">大台北地區</div>
          <div className="areaSection__item">台中地區</div>
          <div className="areaSection__item">台南、高雄地區</div>
        </div>
        <div className="areaSection__notice">*其他地區需要負擔額外費用。</div>
      </div>
      <div className="areaSection__img" />
    </div>
  </div>
);

export default AreaSection;
