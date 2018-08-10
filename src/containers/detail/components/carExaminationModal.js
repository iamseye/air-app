import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './carExaminationModal.css';
import Modal from 'react-modal';
import ExaminationSubSection from './examinationSubSection';

const _ = require('lodash');

class CarExaminationModal extends Component {
  state = {};

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  hideModal = () => this.props.hideModal();

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={() => this.props.hideModal}
        className="detailMoreFilter"
        ariaHideApp={false}
      >
        <div className="detailMore__content" ref={(node) => { this.node = node; }}>
          <div className="detailMore__item">
            <h3>鑑定等級 {this.props.classLevel}  CLASS <a className="moreBTN">詳細說明</a></h3>
            <div className="detailMore__result">
              <div className="detailMore__result--content">
                <h4>
                  <div>{this.props.year}</div>
                  <div>{this.props.name}</div>
                </h4>
                <ul>
                  <li><div>鑑定里程</div><div>{this.props.mileage}</div></li>
                  <li><div>鑑定日期</div><div>{this.props.examination_date}</div></li>
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
                  <li key={array[0].title}>
                    <ul id={arrayIndex}>
                      {array.map(item => (
                        <li key={item.title}>
                          <div>{item.title}</div>
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
                  <li key={array[0].title}>
                    <ul id={arrayIndex}>
                      {array.map(item => (
                        <li key={item.title}>
                          <div>{item.title}</div>
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
                  <li key={array[0].title}>
                    <ul id={arrayIndex}>
                      {array.map(item => (
                        <li key={item.title}>
                          <div>{item.title}</div>
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
      </Modal>
    );
  }
}

CarExaminationModal.propTypes = {
  examination: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    pic_url: PropTypes.string.isRequired,
  })).isRequired,
  equipment: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    has_equipment: PropTypes.number.isRequired,
  })).isRequired,
  examination_date: PropTypes.string.isRequired,
  classLevel: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default CarExaminationModal;
