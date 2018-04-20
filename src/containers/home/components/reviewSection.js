import React from 'react';
import './reviewSection.css';

const ReviewSection = () => (
  <div className="reviewSection">
    <div className="reviewSection__wraper">
      <h3>在AIRCNC 他們找到屬於自己的車 </h3>
      <div className="reviewSection__list">
        <div className="reviewSection__item">
          <div className="reviewSection__text">
            <p>感謝AIRCNC讓我找到這麼棒的車，購前體驗真的很屌。整個服務流程真的很專業，讓我更瞭解車子了。</p>
          </div>
          <div className="reviewPerson">
            <img className="reviewPerson__photo" alt="評論照片" src="/assets/img/witness01.jpg" />
            <div className="reviewPerson__name">台南 王先生</div>
          </div>
        </div>

        <div className="reviewSection__item">
          <div className="reviewSection__text">
            <p>我完完全全找到適合自己的車子，購前體驗真的很屌，感謝AIRCNC讓我找到這麼棒的車。</p>
          </div>
          <div className="reviewPerson">
            <img className="reviewPerson__photo" alt="評論照片" src="/assets/img/witness02.jpg" />
            <div className="reviewPerson__name">台中 楊先生</div>
          </div>
        </div>

        <div className="reviewSection__item">
          <div className="reviewSection__text">
            <p>AIRCNC真的屌打目前的傳統購車模式，雖然這麼說有點嗆，但是黑心車行要小心了喔。</p>
          </div>
          <div className="reviewPerson">
            <img className="reviewPerson__photo" alt="評論照片" src="/assets/img/witness03.jpg" />
            <div className="reviewPerson__name">台北 梁先生</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ReviewSection;
