import './App.css';
import {Routes, Route } from 'react-router-dom';
import AppLayout from './components/Layout';
import Home from './pages/Home';
import MinhasCafeterias from './pages/MinhasCafeterias';

function App() {
  return (
   <Routes>
    <Route path="/" element={<AppLayout><Home /></AppLayout>} />
    <Route path="/MinhasCafeterias" element={<AppLayout><MinhasCafeterias /></AppLayout>} />
   </Routes>
  );
}

export default App;