import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import css from './UserMenu.module.css';



const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());

  return (
    <div className={css.user__menu}>
      <p className={css.welcome__user}>Welcome:<span className={css.user_name}>{user.name}</span> </p>
      <button className={css.logout__button} type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;