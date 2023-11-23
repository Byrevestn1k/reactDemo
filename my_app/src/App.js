import './app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { createContext, useState } from 'react';

export const UsersContext = createContext()
const App = () => {
  const [usersCount, setUsersCount] = useState(`0`)
  const [productMaxLenghtName, setProductMaxLenghtName] = useState(`0`)

  return (
    <UsersContext.Provider value={{ usersCount, setUsersCount, productMaxLenghtName, setProductMaxLenghtName }}>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </UsersContext.Provider>

  );
}

export default App;
