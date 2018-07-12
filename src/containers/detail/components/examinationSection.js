import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExaminationSubSection from './examinationSubSection';

class ExaminationSection extends Component {
  state={}
  showModal = () => this.props.showModal();

  render() {
    return (
      <div className="detail__infoItem">
        <h3>車輛鑑定</h3>
        <div className="dentification">
          <div className="dentification__description">
            <div className="dentification__description--item">
              <span>鑑定日期</span>
              <p>{this.props.examination_date}</p>
            </div>

            <div className="dentification__description--item">
              <span>鑑定等級</span>
              <p>{this.props.classLevel} CLASS<span className="insurance">詳細說明</span></p>
            </div>

            <div className="dentification__description--item">
              <span>鑑定里程</span>
              <p>{this.props.mileage} km</p>
            </div>
          </div>

          <ExaminationSubSection examination={this.props.examination} />

          <div className="show__moreDetail" onClick={() => this.showModal()}>更多鑑定細節</div>
        </div>
      </div>
    );
  }
}

ExaminationSection.propTypes = {
  examination_date: PropTypes.string.isRequired,
  classLevel: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired,
  examination: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    pic_url: PropTypes.string.isRequired,
  })).isRequired,
  showModal: PropTypes.func.isRequired,
};

export default ExaminationSection;
