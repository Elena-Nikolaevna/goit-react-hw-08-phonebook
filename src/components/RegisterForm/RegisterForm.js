import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const credentials = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    console.log(credentials);

    dispatch(register(credentials));
    //form.reset();
  };

  return (
    <section>
    <form className={css.phonebookForm} onSubmit={handleSubmit} autoComplete="off">
      <div className={css.inputBox}>
        <label className={css.label}>
          Login<span className={css.required}>*</span>
        </label>
        <input
          className={css.input}         
          type="text"
          name="name"
          required
        />
      </div>
      <div className={css.inputBox}>
        <label className={css.label}>
          Email<span className={css.required}>*</span>
        </label>
        <input
          className={css.input}
         
          type="email"
          name="email"
          required
        />
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
          Register
        </button>
      </div>
    </form>
  </section>
  );
};

export default RegisterForm;