import './App.css';
import { Routes, Route } from 'react-router-dom';
import DisplayQuote from './components/quote/DisplayQuote';
import Calculator from './components/calculator';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:Calculator" element={<Calculator />} />
        <Route path="/quote" element={<DisplayQuote />} />
      </Routes>
    </div>
  );
}

export default App;
