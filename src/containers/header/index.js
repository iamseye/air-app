import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => (
  <div className="header">
    <img src="/assets/img/headerlogo.svg" alt="" />
    <ul className="mainMenu">
      <li className="active"><Link to="/">我要賣車</Link></li>
      <li><Link to="/">預約體驗</Link></li>
      <li><Link to="/">如何使用?</Link></li>
      <li><Link to="/">登入</Link></li>
    </ul>
  </div>
);

export default Header;
