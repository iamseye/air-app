import React from 'react';
import './carExaminationModal.css';

const CarExaminationModal = () => (
  <div className="detailMoreFilter">
    <div className="detailMore__content">
      <div className="detailMore__item">
        <h3>鑑定等級 A+ CLASS <a className="moreBTN">詳細說明</a></h3>
        <div className="detailMore__result">
          <div className="detailMore__result--content">
            <h4>
              <div>2016</div>
              <div>BENZ C250</div>
            </h4>
            <ul>
              <li><div>鑑定里程</div><div>65,876</div></li>
              <li><div>鑑定日期</div><div>2018-05-06</div></li>
              <li><div>鑑定對象</div><div>2016 BENZ C250</div></li>
              <li><div>鑑定等級</div><div>A+ CLASS</div></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CarExaminationModal;
