import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Navbar';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/navbar' element={<Navbar/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
