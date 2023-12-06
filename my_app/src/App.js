import './app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { createContext, useState } from 'react';
import { Routes, Route } from "react-router";
import { SINGLE_USER_PATH, PRODUCTS_PATH, REGISTRATION_PATH, COCTAIL_PATH, VACATION_PATH,NOT_FOUND_PATH} from "./constants/constants";
import RestOfVacation from './components/RestOfVacation';
import EddProducForm from './components/EddProducForm';
import RegistrationForm from './components/RegistrationForm';
import SingleUserPage from './components/SingleUserPage';

import NotFoundPage from './components/NotFoundPage';

import Coctails from './components/Coctails/Coctails';
export const UsersContext = createContext()
const App = () => {
  const [usersCount, setUsersCount] = useState(`0`)
  const [productMaxLenghtName, setProductMaxLenghtName] = useState(`0`)

  return (
    <UsersContext.Provider value={{ usersCount, setUsersCount, productMaxLenghtName, setProductMaxLenghtName }}>
      <div className="app">
        <Header />
        <Routes>
        {/* <Route path={HOME_PATH} element={<HomePage />} /> */}
          <Route path={PRODUCTS_PATH} element={<EddProducForm />} />
          <Route path={VACATION_PATH} element={<RestOfVacation />} />
          <Route path={REGISTRATION_PATH} element={<RegistrationForm />} />
          <Route path={COCTAIL_PATH} element={<Coctails />} />
          <Route path={SINGLE_USER_PATH} element={<SingleUserPage />} />
          <Route path={NOT_FOUND_PATH} element={<NotFoundPage />} />
        </Routes>
        <Main />
        <Footer />
      </div>
    </UsersContext.Provider>

  );
}

export default App;
