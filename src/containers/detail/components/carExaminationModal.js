import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './carExaminationModal.css';
import ExaminationSubSection from './examinationSubSection';

const _ = require('lodash');

class CarExaminationModal extends Component {
  state = {};
  hideModal = () => this.props.hideModal();

  render() {
    return (
      <div className="detailMoreFilter">
        <div className="detailMore__content">

          <div className="detailMore__item">
            <h3>鑑定等級 {this.props.classLevel}  CLASS <a className="moreBTN">詳細說明</a></h3>
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
                </ul>
              </div>
              <div
                className="detailMore__result--photo"
                style={{ backgroundImage: 'url(https://aircnc.com.tw/upload/users/album/source_img/2018-05-22-791-15449.jpg)' }}
              />
            </div>
            <ExaminationSubSection examination={this.props.examination} />
          </div>

          <div className="detailMore__item">
            <h3>鑑定項目</h3>
            <div>
              <div className="detailMore__photo">
                { this.props.examination
                  .filter(item => (item.category === 'all'))
                  .map((item, index) => (
                    <div
                      key={item.title}
                      className={(index === 4 || index === 5 || index === 6) ? 'detailMore__photo--size2' : 'detailMore__photo--size1'}
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
                    </div>
                    ))
                }
              </div>
            </div>
          </div>
          <div className="detailMore__item">
            <h3>車輛配備</h3>
            <div className="detailFeature">
              <h4>外觀</h4>
              <ul>
                { _.chunk(this.props.equipment.filter(item => (item.category === 'outside')), 4)
                .map((array, arrayIndex) => (
                  <li>
                    <ul id={arrayIndex}>
                      {array.map((item, index) => (
                        <li>
                          <div id={index}>{item.title}</div>
                          <div>
                            {item.has_equipment ?
                              <img src="/assets/img/check.png" alt="check icon" /> :
                              ' - ' }
                          </div>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))
              }
              </ul>

              <h4>內裝</h4>
              <ul>
                { _.chunk(this.props.equipment.filter(item => (item.category === 'inside')), 4)
                .map((array, arrayIndex) => (
                  <li>
                    <ul id={arrayIndex}>
                      {array.map((item, index) => (
                        <li>
                          <div id={index}>{item.title}</div>
                          <div>
                            {item.has_equipment ?
                              <img src="/assets/img/check.png" alt="check icon" /> :
                              ' - ' }
                          </div>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))
              }
              </ul>

              <h4>安全配備</h4>
              <ul>
                { _.chunk(this.props.equipment.filter(item => (item.category === 'safety')), 3)
                .map((array, arrayIndex) => (
                  <li>
                    <ul id={arrayIndex}>
                      {array.map((item, index) => (
                        <li>
                          <div id={index}>{item.title}</div>
                          <div>
                            {item.has_equipment ?
                              <img src="/assets/img/check.png" alt="check icon" /> :
                              ' - ' }
                          </div>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))
              }
              </ul>

            </div>
          </div>
          <img className="detailMoreClose" src="/assets/img/close.svg" alt="cross icon" onClick={ () => this.hideModal()} />
        </div>
      </div>
    );
  }
}

CarExaminationModal.propTypes = {
  examination: PropTypes.arrayOf(PropTypes.string).isRequired,
  equipment: PropTypes.arrayOf(PropTypes.string).isRequired,
  examination_date: PropTypes.string.isRequired,
  classLevel: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default CarExaminationModal;
