import React from 'react';
import PropTypes from 'prop-types';
import './carDetail.css';

const CarDetailSection = props => (
  <div className="detail__infoItem">
    <h3>車輛規格</h3>
    <div className="dentification">
      <div className="carFeature">
        <ul>
          <li><div>出廠年份</div><div>{props.year} 年</div></li>
          <li><div>外觀顏色</div><div>{props.outsideColor}</div></li>
          <li><div>內裝顏色</div><div>{props.insideColor}</div></li>
        </ul>
        <ul>
          <li><div>排氣量</div><div>{props.displacement} c.c.</div></li>
          <li><div>引擎燃料</div><div>{props.fuel}</div></li>
          <li><div>變速系統</div><div>{props.shiftSystem}</div></li>
        </ul>
        <ul>
          <li><div>驅動方式</div><div>{props.drivenMethod}</div></li>
          <li><div>車門數</div><div>{props.doorNumber} 人</div></li>
          <li><div>乘客數</div><div>{props.passengerNumber} 門</div></li>
        </ul>
      </div>
    </div>
  </div>
);

CarDetailSection.propTypes = {
  year: PropTypes.number.isRequired,
  outsideColor: PropTypes.string.isRequired,
  insideColor: PropTypes.string.isRequired,
  displacement: PropTypes.number.isRequired,
  shiftSystem: PropTypes.string.isRequired,
  fuel: PropTypes.string.isRequired,
  doorNumber: PropTypes.number.isRequired,
  passengerNumber: PropTypes.number.isRequired,
  drivenMethod: PropTypes.string.isRequired,
};

export default CarDetailSection;
