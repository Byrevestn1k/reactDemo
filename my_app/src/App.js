import './app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { createContext, useState } from 'react';
import { Routes, Route } from "react-router";
import { HOME_PATH, PRODUCTS_PATH, REGISTRATION_PATH, REF_PATH } from "./constants/constants";
import RestOfVacation from './components/RestOfVacation';
import EddProducForm from './components/EddProducForm';
import RegistrationForm from './components/RegistrationForm';
import RefImput from './components/RefImput';
export const UsersContext = createContext()
const App = () => {
  const [usersCount, setUsersCount] = useState(`0`)
  const [productMaxLenghtName, setProductMaxLenghtName] = useState(`0`)

  return (
    <UsersContext.Provider value={{ usersCount, setUsersCount, productMaxLenghtName, setProductMaxLenghtName }}>
      <div className="app">
        <Header />
        <Routes>
          <Route path={HOME_PATH} element={<RestOfVacation />} />
          <Route path={PRODUCTS_PATH} element={<EddProducForm />} />
          <Route path={REGISTRATION_PATH} element={<RegistrationForm />} />
          <Route path={REF_PATH} element={<RefImput />} />
        </Routes>
        <Main />
        <Footer />
      </div>
    </UsersContext.Provider>

  );
}

export default App;
