import React from 'react';
import PropTypes from 'prop-types';
import './carExaminationModal.css';
import carPhoto from '../../../assets/img/carPhoto.jpg';

const CarExaminationModal = props => (
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
          <div className="detailMore__result--photo" style={{ backgroundImage: `url(${carPhoto})` }} />
        </div>
      </div>

      <div className="detailMore__item">
        <h3>鑑定項目</h3>
        <div>
          <div className="detailMore__photo">
            { props.examination.map((item, index) => {
               if (item.category === 'all') {
                 return (
                   <div
                     className={(index === 10 || index === 11 || index === 12) ? 'detailMore__photo--size2' : 'detailMore__photo--size1'}
                     style={{ backgroundImage: `url(${item.pic_url})` }}
                   >
                     {item.passed ?
                       <div className="detailMore__photo--text">
                         {item.title}
                         <img src="/assets/img/check.png" alt="check icon" />
                       </div> :
                       <div className="detailMore__photo--text">
                         {item.remarks ?
                           <span>{`${item.title} - ${item.remarks}`}</span> :
                           <span>{item.title}</span>
                          }
                       </div>
                   }
                   </div>);
                }
              })
            }
          </div>
        </div>
      </div>
    </div>
  </div>
);

CarExaminationModal.propTypes = {
  examination: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CarExaminationModal;
