import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import zhTW from 'antd/lib/locale-provider/zh_TW';
import 'moment/locale/zh-tw';

import store from './store';
import App from './containers/app';
import './index.css';

render(
  <Provider store={store}>
    <LocaleProvider locale={zhTW}>
      <App />
    </LocaleProvider>
  </Provider>,
  document.querySelector('#root'),
);
