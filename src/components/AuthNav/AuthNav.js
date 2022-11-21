import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  const activeLink = ({ isActive }) =>
    isActive ? `${css.link} ${css.activeLink}` : css.link;
  return (
    <div className={css.auth__nav}>

      <NavLink className={activeLink} to="/register">
        Register
      </NavLink>
      <NavLink className={activeLink} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
