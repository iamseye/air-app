import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import SocialAction from './components/socialAction';
import { Field, reduxForm } from 'redux-form';
import './style.css';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = '必填欄位';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email格式不符';
  }

  if (!values.password) {
    errors.password = '必填欄位';
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

class LoginModal extends Component {
  state = {
  }

  render() {
    const { handleSubmit, isOpen, hideModal, loginSubmit, errorMessage, openRegisterModal, invalid, submitting } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => hideModal()}
        className="login__area"
        ariaHideApp={false}
      >
        <div className="login__box">
          <div className="login__item--title">
            <h3>登入</h3>
          </div>

          <form
            onSubmit={handleSubmit(values => loginSubmit(values))}
          >
            <div className="login__item--input">
              <Field
                component={renderField}
                name="email"
                type="email"
                label="請輸入e-mail"
              />
            </div>
            <div className="login__item--input">
              <Field
                component={renderField}
                name="password"
                type="password"
                label="輸入密碼"
              />
            </div>
            <div className="login__item--button1">
              {errorMessage !== '' ? <div className="login__alert--show">{errorMessage}</div> : ''}
              <button type="submit" className={invalid ? 'notyet' : ''} disabled={invalid || submitting}>CocarMaster帳號 登入</button>
            </div>
          </form>
          <SocialAction />
          <div className="login__item--notice2">
            <span>忘記密碼</span>｜<span>還沒有CocarMaster帳號？</span><span onClick={() => openRegisterModal()}>註冊</span>
          </div>
        </div>
      </Modal>
    );
  }
}

LoginModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  loginSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  openRegisterModal: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'login',
  validate,
})(LoginModal);
