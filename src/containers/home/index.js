import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as styleActions from '../../actions/styleAction';
import SearchBar from '../../components/searchBar';
import CardSlider from '../../components/cardSlider';
import './style.css';

class Home extends Component {
  state = {}
  render() {
    return (
      <div className="home">
        { this.props.isActiveWhiteFilter ? <div className="whiteFilter" /> : ''}
        <div className="searchSection">
          <div className="searchSection__title">
            <h2>不想再盲目找車？</h2>
            <h1>那就先開再買</h1>
            <p>創新的購前體驗，買車前先開回家盡情駕駛，從此告別肥羊以及冤大頭</p>
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

const mapStateToProps = state => ({
  isActiveWhiteFilter: state.style.isActiveWhiteFilter,
});

const mapDispatchToProps = dispatch => ({
  styleActions: bindActionCreators(styleActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
