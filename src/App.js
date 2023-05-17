import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Main from './components/pages/main/Main';
import AboutUs from './components/pages/aboutUs/AboutUs';
import Menu from './components/pages/menu/Menu';
import Reservation from './components/pages/reservation/Reservation';
import NotFound from './components/pages/notFound/NotFound';
import Loyaut from './components/loyaut/Loyaut';
import AdminLogIn from './components/pages/adminLogIn/AdminLogIn';
import Dashboard from './components/pages/dashboard/Dashboard';

import Protected from './components/protected/Protected';
import DashboardMenu from './components/pages/dashboard/menu';
import DashboardStaff from './components/pages/dashboard/staff';


function App() {



  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Loyaut />}>
            <Route index element={<Main />} />
            <Route path='aboutUS' element={<AboutUs />} />
            <Route path='menu' element={<Menu />} />
            <Route path='reservation' element={<Reservation />} />
            <Route path='*' element={<NotFound />} />
          </Route>

          <Route path='adminlogin' element={<AdminLogIn />} />
          <Route path='dashboard' element={<Protected><Dashboard /></Protected>}>
            <Route index element={<DashboardMenu />} />
            <Route path='menu' element={<DashboardMenu />} />
            <Route path='staff' element={<DashboardStaff />} />
          </Route>

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
