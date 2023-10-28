import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './css/Font.css';
import Home from './pages/Home';
import Team from './pages/Team';

function App() {
  return (
    <BrowserRouter>
      <div className="App pretendard-R">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;