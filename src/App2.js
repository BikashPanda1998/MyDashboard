
import './App.css';
import MainD from './Component/MainD';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Users from './Component/Users';
import Order from './Component/Order';
import Report from './Component/Report';
import { useState } from 'react';
function App2() {
  const [toggle, setToggle]=useState(false);
  function Toggle(){
    setToggle(!toggle);
  }
  return (
    <BrowserRouter >
    <div className='d-flex'>
      <div className={toggle ? "d-none":"w-auto"}>
        <Sidebar />
      </div>
      <div className='col overflow-auto'>
        <Navbar Toggle={Toggle}/>
          <Routes>
            <Route path="/" element={<MainD />}></Route>
            <Route path="/users" element={<Users/>}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path='/report' element={<Report />}></Route>
          </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App2;
