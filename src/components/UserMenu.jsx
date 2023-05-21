import { useAuth } from 'hooks/useAuth';
import css from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome, {user.email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};
