import React, { Component } from 'react';
import './style.css';
import Icon from '../../utils/Icon';
import { ICONS } from '../../utils/constants';

class SearchBar extends Component {
  state = {
  };

  render() {
    return (
      <div className="searchBar">
        <div>
          <span>我要預約體驗</span>
        </div>
        <div className="selectBrand">
          <span>廠牌</span> <Icon icon={ICONS.DROP_DOWN} />
        </div>
        <div className="selectType">
          <span>車型</span> <Icon icon={ICONS.DROP_DOWN} />
        </div>
        <div className="selectArea">
          <span>地區</span> <Icon icon={ICONS.DROP_DOWN} />
        </div>
        <div className="searchButton">
          <span>搜尋</span>
        </div>
      </div>
    );
  }
}

export default SearchBar;
