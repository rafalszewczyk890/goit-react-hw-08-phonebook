import { NavLink } from 'react-router-dom';
import css from '../AuthNav/AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={ css.navContainer}>
      <div className={css.nav}>
        <NavLink to="/register">Register</NavLink>
      </div>
      <div className={css.nav}>
        <NavLink to="/login">Log in</NavLink>
      </div>
    </div>
  );
};
