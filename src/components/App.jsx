import css from './App.module.css';
import {AppBar} from './AppBar/AppBar';
import { Suspense, useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';


const PhonebookPage = lazy(() =>
  import('../views/PhonebookPage/PhonebookPage'),
);
const HomePage = lazy(() =>
  import('../views/HomePage/HomePage'),
);
const SignInPage = lazy(() =>
  import('../views/SignInPage/SignInPage'),
);

const SignUpPage = lazy(() =>
  import('../views/SignUpPage/SignUpPage'),
);

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isLoading && (
      <div>
        <AppBar className={css.header} />
        <main className={(css.main)}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/" element={<HomePage />} />;
              <Route path="/phonebook" element={<PhonebookPage />} />;
              <Route path="/signIn" element={<SignInPage />} />;
              <Route path="/signUp" element={<SignUpPage />} />;
            </Routes>
          </Suspense>
        </main>
        
      </div>
    )
  );
};
export default App;

