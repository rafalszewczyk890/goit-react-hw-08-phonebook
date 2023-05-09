import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { getIsLoading, getError } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';

export const HomePage = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return <>This is homepage</>;
};
