import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './css/Font.css';
import Home from './pages/Home';
import Team from './pages/Team';
import Web from './pages/Web';
import Modeling from './pages/Modeling';
import Metaverse from './pages/Metaverse';

function App() {
  return (
    <BrowserRouter>
      <div className="App pretendard-R">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/team/metaverse' element={<Metaverse />} />
          <Route path='/team/modeling' element={<Modeling />} />
          <Route path='/team/web' element={<Web />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;