import './App.css';
import Home from './Component/Home/Home.js'
import { Routes, Route } from 'react-router-dom'
import Register from './Component/login_Register/Register';
import Login from './Component/login_Register/Login';
import AddBook from './Component/Home/AddBook';
import Record from './Component/Home/Record';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/addbook' element={<AddBook />}></Route>
        <Route path='/record' element={<Record />}></Route>
      </Routes>
    </div>
  );
}

export default App;
