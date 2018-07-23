import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import './style.css';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = '必填欄位';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email格式不符';
  }

  if (!values.name) {
    errors.name = '必填欄位';
  }

  if (!values.password) {
    errors.password = '必填欄位';
  } else if (values.password.length < 8) {
    errors.password = '請輸入8位數包含數字及英文的密碼';
  }

  if (!values.rePassword) {
    errors.rePassword = '必填欄位';
  } else if (values.rePassword !== values.password) {
    errors.rePassword = '密碼輸入不一致';
  }
  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <div className="login__alert--show">{error}</div>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);


class RegisterModal extends Component {
  state = {
  }

  render() {
    const { handleSubmit, hideModal, isOpen, registerSubmit, invalid, submitting, errorMessage } = this.props
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => hideModal()}
        className="login__area"
        ariaHideApp={false}
      >
        <div className="login__box">
          <div className="login__item--title">
            <h3>註冊</h3>
          </div>
          <form
            onSubmit={handleSubmit(values => registerSubmit(values))}
          >
            <div className="login__item--input">
              <Field
                component={renderField}
                name="email"
                type="text"
                label="請輸入e-mail作為帳號"
              />
            </div>
            <div className="login__item--input">
              <Field
                component={renderField}
                name="name"
                type="text"
                label="請輸入真實姓名"
              />
            </div>
            <div className="login__item--input">
              <Field
                component={renderField}
                name="password"
                type="password"
                label="設定密碼"
              />
            </div>
            <div className="login__item--input">
              <Field
                component={renderField}
                name="password_confirmation"
                type="password"
                label="再次輸入密碼"
              />
            </div>
            <div className="login__item--button1" >
              {errorMessage !== '' ? <div className="login__alert--show">{errorMessage}</div> : ''}
              <button type="submit" className={invalid ? 'notyet' : ''} disabled={invalid || submitting}>成為會員</button>
            </div>
          </form>

          <div className="login__item--notice1">
            <span>或者改用以下帳號</span>
          </div>
          <div className="login__item--button2">
            <button className="fb"><images src="./images/fb.png" />使用Facebook帳號</button>
            <button className="google"><images src="./images/google.png" />使用Google帳號</button>
          </div>
          <div className="login__item--notice2">
            <span>已經有CocarMaster帳號了？</span><a>登入</a>
          </div>
          <div className="login__close"></div>
        </div>
      </Modal>
    );
  }
}

RegisterModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  registerSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default reduxForm({
  form: 'register',
  validate,
})(RegisterModal);
