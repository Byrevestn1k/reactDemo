import './app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Registration from './components/Registration';

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      <Registration/>
      <Footer />
    </div>
  );
}

export default App;
