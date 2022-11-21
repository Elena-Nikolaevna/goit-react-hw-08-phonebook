import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const activeLink = ({ isActive }) =>
    isActive ? `${css.link} ${css.activeLink}` : css.link;

  return (
    <div className={css.navigation__box}>
      <NavLink className={activeLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={activeLink} to="/contacts">
          Phonebook
        </NavLink>
      )}
    </div>
  );
};
