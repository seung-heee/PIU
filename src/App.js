import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './css/Font.css';
import Home from './pages/Home';
import Buy from './pages/Buy';
import NonmemberLogin from './pages/NonmemberLogin';
import Order from './pages/Order';

function App() {
  return (
    <BrowserRouter>
      <div className="App pretendard-R">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/nonmemberLogin' element={<NonmemberLogin />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;