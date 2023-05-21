import { useAuth } from 'hooks/useAuth';
import css from './UserMenu.module.css';
import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch;

  return (
    <div>
      <p>Welcome, {user.name}</p>
      {/* <button type="button" onClick={() => dispatch(logOut())}></button> */}
    </div>
  );
};
