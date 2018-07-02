import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Footer = () => (
  <div className="footer">
    <ul>
      <li>
        <ul>
          <li className="footer__title">AIRCNC</li>
          <li><Link to="/">關於我們</Link></li>
          <li><Link to="/">隱私政策</Link></li>
          <li><Link to="/">問與答</Link></li>
        </ul>
      </li>
      <li>
        <ul>
          <li className="footer__title">體驗</li>
          <li><Link to="/">購車流程</Link></li>
          <li><Link to="/">安心保證</Link></li>
        </ul>
      </li>
      <li>
        <ul>
          <li className="footer__title">賣車</li>
          <li><Link to="/">賣車流程</Link></li>
          <li><Link to="/">加入我們</Link></li>
        </ul>
      </li>

      <li>
        <ul className="social">
          <li><Link to="/1"><img src="/assets/img/fb.svg" alt="fb" /></Link></li>
          <li><Link to="/"><img src="/assets/img/ig.svg" alt="ig" /></Link></li>
          <li><Link to="/"><img src="/assets/img/line.svg" alt="line" /></Link></li>
          <li><Link to="/"><img src="/assets/img/weChat.svg" alt="wechat" /></Link></li>
        </ul>
      </li>
    </ul>

    <div className="copyright">
      <img src="/assets/img/headerLogo.svg" alt="logo" />
      <div>© 2018. Aircnc. All rights reserved.</div>
    </div>
  </div>
);

export default Footer;
