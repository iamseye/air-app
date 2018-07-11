import React, { Component } from 'react';
import api from '../../utils/api';
import './style.css';

class Detail extends Component {
  state = {
    year: 0,
    name: '',
    description: '',
    mileage: 0,
    class: '',
    examination_date: '',
    examination: [],
    accessories: [],
  }

  componentDidMount() {
    api.getTheSellCar(1)
      .then((json) => {
        if (json && json.data && json.data.car && json.data.car.data) {
          console.log(json.data);
          const car = json.data.car.data;
          const examination = json.data.sell_car_examination.data;

          this.setState({
            year: car.year,
            name: `${car.brand} ${car.brand_ch} ${car.series}`,
            description: json.data.description,
            mileage: json.data.mileage,
            class: json.data.class,
            examination_date: json.data.examination_date,
            examination,
            accessories: json.data.sell_car_accessory.data,
          });
        }
      });
  }

  render() {
    return (
      <div className="detail">
        <div className="detail__banner">
          <div className="function">
            <div className="function__button">更多照片</div>
          </div>
        </div>

        <div className="detail__wraper">
          <div className="detail_info">
            <div className="detail__infoItem">
              <h3>
                <div className="detail__name">
                  <span>{this.state.year}</span>
                  <div>{this.state.name}</div>
                </div>
              </h3>
              <p>
                {this.state.description}
              </p>
            </div>

            <div className="detail__infoItem">
              <h3>車輛鑑定</h3>
              <div className="dentification">
                <div className="dentification__description">
                  <div className="dentification__description--item">
                    <span>鑑定日期</span>
                    <p>{this.state.examination_date}</p>
                  </div>

                  <div className="dentification__description--item">
                    <span>鑑定等級</span>
                    <p>{this.state.class} CLASS<span className="insurance">詳細說明</span></p>
                  </div>

                  <div className="dentification__description--item">
                    <span>鑑定里程</span>
                    <p>{this.state.mileage} km</p>
                  </div>
                </div>
                <div className="dentification__list">
                  <div className="dentification__list--item">
                    <div>事故鑑定</div>
                    <ul>
                      { this.state.examination.map((item, index) => {
                         if (item.category === 'accident') {
                           return (
                             <li>
                               <span>{item.title}</span>
                               <span>
                                 {item.passed ?
                                   <img src="/assets/img/check.png" alt="check icon" /> : '-'
                                 }
                               </span>
                             </li>);
                          }
                        })
                      }
                    </ul>
                  </div>

                  <div className="dentification__list--item">
                    <div>系統鑑定</div>
                    <ul>
                      { this.state.examination.map((item, index) => {
                         if (item.category === 'system') {
                           return (
                             <li>
                               <span>{item.title}</span>
                               <span>
                                 {item.passed ?
                                   <img src="/assets/img/check.png" alt="check icon" /> : '-'
                                 }
                               </span>
                             </li>);
                          }
                        })
                      }
                    </ul>
                  </div>

                  <div className="dentification__list--item">
                    <div>外觀鑑定</div>
                    <ul>
                      { this.state.examination.map((item, index) => {
                         if (item.category === 'looking') {
                           return (
                             <li>
                               <span>{item.title}</span>
                               <span>
                                 {item.passed ?
                                   <img src="/assets/img/check.png" alt="check icon" /> : '-'
                                 }
                               </span>
                             </li>);
                          }
                        })
                      }
                    </ul>
                  </div>

                </div>

                <div className="show__moreDetail"><a>更多鑑定細節</a></div>
              </div>
            </div>

            <div className="detail__infoItem">
              <h3>體驗保險</h3>
              <p><span>乙式車險</span>、<span>失竊險</span>、<span>免追償</span><span className="insurance">詳細說明</span></p>
            </div>

            <div className="detail__infoItem">
              <h3>隨車配件</h3>
              <ul className="detail__equipment">
                { this.state.accessories.map((item, index) => (
                  <li><img src={`/assets/img/icon_accessories_.svg`} alt="accessory_icon" />{ item.name }</li>
                  ))
                }
              </ul>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
