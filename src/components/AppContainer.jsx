import css from './AppContainer.module.css';
import { Navigation } from './Navigation';
import { useAuth } from '../hooks/useAuth';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';

export const AppContainer = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
