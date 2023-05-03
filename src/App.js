import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Header from './components/loyaut/header/Header'
import Footer from './components/loyaut/footer/Footer'
import Main from './components/pages/main/Main';
import AboutUs from './components/pages/aboutUs/AboutUs';
import Menu from './components/pages/menu/Menu';
import Reservation from './components/pages/reservation/Reservation';
import Admin from './components/pages/admin/admin';
import NotFound from './components/pages/notFound/NotFound';


function App() {
  return (
    <div>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/aboutUS' element={<AboutUs />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/*' element={<NotFound/> } />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
