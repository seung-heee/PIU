import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './css/Font.css';
import Home from './pages/Home';
import Team2 from './pages/Team2';

function App() {
  return (
    <BrowserRouter>
      <div className="App pretendard-R">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team2' element={<Team2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;