import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
