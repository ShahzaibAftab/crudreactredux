import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Route from 'react-router-dom'
import { Create } from './Create';
import Update from './Update';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Create" element={<Create />} /> 
        <Route path="/Edit/:id" element={<Update />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
