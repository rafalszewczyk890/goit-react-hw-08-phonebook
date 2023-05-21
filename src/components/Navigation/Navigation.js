import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink className={css.navlink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.navlink} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
