import React, { Component } from 'react';
import SearchBar from '../../components/searchBar';
import CardSlider from '../../components/cardSlider';
import './style.css';

class Home extends Component {
  state = {
  };

  render() {
    return (
      <div className="home">
        <div className="searchSection">
          <div className="title">
            <div className="title--size-2 text-white"><span>不想再盲目找車?</span></div>
            <div className="title--size-1 text-white"><span>那就先開再買</span></div>
            <div className="title--size-3 text-white"><span>創新的購前體驗，買車前先開回家盡情駕駛，從此告別肥羊以及冤大頭</span></div>
          </div>
          <SearchBar />
        </div>
        <div className="hotSells">
          <div className="hotSells_title"><span>精選車輛</span></div>
          <CardSlider />
        </div>
      </div>
    );
  }
}

export default Home;
