import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';
//import { useSelector } from 'react-redux';
//import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
      Homepage 
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/phonebook">
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};
