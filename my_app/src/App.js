import './app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Registration from './components/Registration';
import Input from './components/Input';
import RegictrationItemV2 from './components/RegistrationV2';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <div className="App">
      <Header />
      <RegistrationForm />
      {/* <Main /> */}
      {/* <RegictrationItemV2 /> */}
      {/* <Registration /> */}
      <Footer />
    </div>
  );
}

export default App;
