import './App.css';
import {Routes, Route } from 'react-router-dom';
import AppLayout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
   <Routes>
    <Route path="/" element={<AppLayout><Home /></AppLayout>} />
   </Routes>
  );
}

export default App;