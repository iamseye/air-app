import React from 'react';
import PropTypes from 'prop-types';

const ExaminationSubSection = props => (
  <div className="dentification__list">
    <div className="dentification__list--item">
      <div>事故鑑定</div>
      <ul>
        { props.examination
          .filter(item => (item.category === 'accident'))
          .map(item => (
            <li key={item.title}>
              <span>{item.title}</span>
              <span>
                {item.passed ?
                  <img src="/assets/img/check.png" alt="check icon" /> : '-'
               }
              </span>
            </li>
           ))
        }
      </ul>
    </div>

    <div className="dentification__list--item">
      <div>系統鑑定</div>
      <ul>
        { props.examination
          .filter(item => (item.category === 'system'))
          .map(item => (
            <li key={item.title}>
              <span>{item.title}</span>
              <span>
                {item.passed ?
                  <img src="/assets/img/check.png" alt="check icon" /> : '-'
               }
              </span>
            </li>
           ))
        }
      </ul>
    </div>

    <div className="dentification__list--item">
      <div>外觀鑑定</div>
      <ul>
        { props.examination
          .filter(item => (item.category === 'looking'))
          .map(item => (
            <li key={item.title}>
              <span>{item.title}</span>
              <span>
                {item.passed ?
                  <img src="/assets/img/check.png" alt="check icon" /> : '-'
               }
              </span>
            </li>
           ))
        }
      </ul>
    </div>

  </div>
);

ExaminationSubSection.propTypes = {
  examination: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    pic_url: PropTypes.string.isRequired,
  })).isRequired,
};

export default ExaminationSubSection;
