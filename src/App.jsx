<<<<<<< HEAD
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import HomePage from './homePage';
=======
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CheckoutPage from './pages/CheckoutPage';

>>>>>>> 819b65da04a0963e20afc92afd43c23f23eaa717
function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <section>
        <h2>New Products</h2>
        <div className="list">
          
          
        </div>
      </section>
    </div>
    
  );
}


export default App;
