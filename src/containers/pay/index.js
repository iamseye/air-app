import React, { Component } from 'react';
import api from '../../utils/api';
import './style.css';

class Pay extends Component {
  state = {
  }

  // componentDidMount() {
  //   api.getTheSellCar(1)
  //     .then((json) => {
  //       if (json && json.data) {
  //         console.log(json.data);
  //
  //
  //         this.setState({
  //
  //         });
  //       }
  //     });
  // }

  render() {
    return (
      <div className="payment">

        <div className="payment__wraper">
          <div className="payment_info">

            <div className="payment__infoItem">
              <h3>選擇保險</h3>

              <div className="payment__content--insurance">
                <div className="payment__content--item selected">
                  <h4><div>乙式保險</div><div>NT$ <span>250</span></div></h4>
                  <ul>
                    <li><div>・保障車輛自體或與其他車輛碰撞之損失</div><img src="/assets/img/check.png" alt="check icon" /></li>
                    <li><div>・保障火災、閃電、爆炸或墜落物造成之損失</div><img src="/assets/img/check.png" alt="check icon" /></li>
                    <li><div>・免追償條款</div><img src="/assets/img/check.png" alt="check icon" /></li>
                    <li><div>・失竊險</div><img src="/assets/img/check.png" alt="check icon" /></li>
                  </ul>
                </div>

                <div className="payment__content--item">
                  <h4>不需要保險</h4>
                  <p>我願意承擔體驗過程中發生的所有意外。</p>
                </div>
              </div>
            </div>

            <div className="payment__infoItem">
              <h3>選擇付款信用卡</h3>
              <div className="payment__content">
                <div className="payment__content--item selected">
                  <h4><div>發卡銀行</div><div>玉山銀行</div></h4>
                  <ul>
                    <li><div>付款類型</div><div>MasterCard</div></li>
                    <li><div>信用卡號</div><div>5211-29XX-XXXX-8682</div></li>
                    <li><div>有效期限</div><div>09-2024</div></li>
                  </ul>
                </div>
                <div className="payment__content--item">新增信用卡</div>
              </div>
            </div>

            <div className="payment__infoItem">
              <div className="paymentCheck">我同意<a>使用規則</a></div>
              <div className="paymentBTN">確認並付款</div>
            </div>

          </div>

          <div className="payment_list">
            <div
              className="payment_list--photo"
              style={{ backgroundImage: 'url(https://aircnc.com.tw/upload/users/album/source_img/2018-05-22-791-15449.jpg)' }}
            />
            <div className="payment_list--content">
              <h3><div>2016</div><div>Benz C250</div></h3>
              <ul>
                <li><div>體驗費用<span>x 1日</span></div><div>7,500</div></li>
                <li><div>保險費用<span>x 1日</span></div><div>750</div></li>
                <li><div>加急費用</div><div>1,125</div></li>
                <li><div>長租優惠</div><div>- 100</div></li>
                <li><div>代碼優惠</div><div>- 500</div></li>
              </ul>
              <ul>
                <li><div className="paymentCheck">使用電子錢包折抵</div><div> - <span>2,500</span></div></li>
                <li><div className="paymentCheck">使用優惠點數折抵</div><div> - <span>500</span></div></li>
              </ul>
              <div className="totalPrice">體驗總額 NT$ 5,500</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pay;
