import { useFormik } from 'formik';
import { loginAPI } from './../../api/api'
import { setAuthUserData } from "./../../../redux/auth-reducer";
import * as Yup from 'yup';

import './LoginForm.scss'
function LoginForm(props) {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: 1,
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(20, 'Максимум 20 символов')
        .required('Не верно'),
      email: Yup.string().email('Не правильный email').required('Не верно'),
    }),

    onSubmit: values => {
      debugger;
      LoginUser(values.email, values.password, values.rememberMe)
      alert(JSON.stringify(values, null, 2));
    },
  });

  const LoginUser = (values) => async (dispatch) => {
    console.log(values)
    let response = await loginAPI.LoginUser(values)

    if (response.data.resultCode === 0) {
      console.log(response.data.userId, values.email, values.login)
      dispatch(setAuthUserData(response.data.userId, values.email, values.login));
    }
  }


  return (
    <form onSubmit={formik.handleSubmit} className="login-form">
      <label htmlFor="email">Email</label>
      <div className="login-form__input">
        <input
          className="login-form__input-email"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      <label htmlFor="lastName">Password</label>
      <div className="login-form__input">
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};


export default LoginForm