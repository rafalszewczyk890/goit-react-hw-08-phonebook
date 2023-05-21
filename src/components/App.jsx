// import { useEffect } from 'react';
// import { ContactForm } from './ContactForm';
// import { Filter } from './Filter';
// import { ContactList } from './ContactList';
// import { useSelector, useDispatch } from 'react-redux';
// import { getIsLoading, getError } from 'redux/selectors';
// import { fetchContacts } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { ContactsPage } from 'pages/ContactsPage';
import { Layout } from './Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<div>Invalid page</div>} />
      </Route>
    </Routes>
  );
};
