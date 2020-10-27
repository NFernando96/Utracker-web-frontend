import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
//import Sidebar from './components/sidebar';




function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <div >




            <h1 class="center"> Utracker</h1>
            <Navbar />
            <Route exatc path='/login' component={Login} />
            <Route exatc path='/signin' component={Signup} />


        </div>



      </BrowserRouter>
    </div>
  );
}




export default App;
