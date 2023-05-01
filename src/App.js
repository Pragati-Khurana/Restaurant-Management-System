import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Routes/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Menu from './Components/Menu/Menu';
import Order from './Components/Order/Order';
import ReserveTable from './Components/ReserveTable/ReserveTable';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navigation />
      <div className='d-flex flex-column justify-content-end' style={{ minHeight: "100vh", position: "relative" }}>
        <Routes>
          <Route element={<Dashboard />} path="/" exact></Route>
          <Route element={<Menu />} path="/menu"></Route>
          <Route element={<Order />} path="/order"></Route>
          <Route element={<ReserveTable />} path="/reserve-table"></Route>
        </Routes>

        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
