import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import TopRated from './components/TopRated';
import UpcomingMovie from './components/UpcomingMovie';
import SingleMovie from './components/SingleMovie';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      {/* <Route exact path='/' element={</>}></Route> */}
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/toprated' element={<TopRated/>}/>
      <Route exact path='/upcomingMovie' element={<UpcomingMovie/>}/>
      <Route exact path='/singlemovie' element={<SingleMovie/>}/>
    </Routes>
    </>
  );
}

export default App;
