import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { selectLogInError } from 'redux/auth/selectors';
import { updateErrorLogIn } from 'redux/auth/slice';
import { useEffect } from 'react';

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectLogInError);

  useEffect(() => {
    dispatch(updateErrorLogIn(error));
    return () => {
      dispatch(updateErrorLogIn(null));
    };
  });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    let credentials = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    console.log(credentials);
    dispatch(logIn(credentials));
    //form.reset();
  };
  return (
    <section>
     
      <form
        className={css.phonebookForm}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
         {error && (
        <div className={css.errorMessage}>
          Ouch!!! <br></br> You may have made a mistake :( <br></br> Please
          check the entered data...
        </div>
      )}
        <div className={css.inputBox}>
          <label className={css.label}>
            Email<span className={css.required}>*</span>
          </label>
          <input className={css.input} type="email" name="email" required />
        </div>
        <div className={css.inputBox}>
          <label className={css.label}>
            Password<span className={css.required}>*</span>
          </label>
          <input
            className={css.input}
            type="password"
            name="password"
            title="minimum number of characters - seven"
            required
          />
        </div>
        <div className={css.buttonBox}>
          <button className={css.addButton} type="submit">
            Log In
          </button>
        </div>
      </form>
      
    </section>
  ); /* <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form> */
};

export default LoginForm;
