import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import './css/Font.css';
import Home from './pages/Home';
import Buy from './pages/Buy';
import NonmemberLogin from './pages/NonmemberLogin';
import Order from './pages/Order';
import OrderSuccess from './pages/OrderSuccess';
import OrderDetail from './pages/OrderDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App pretendard-R">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/nonmemberLogin' element={<NonmemberLogin />} />
          <Route path='/order' element={<Order />} />
          <Route path='/orderSuccess' element={<OrderSuccess />} />
          <Route path='/orderDetail' element={<OrderDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;