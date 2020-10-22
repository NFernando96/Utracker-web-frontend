import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Signin from './components/Signin';




function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <h1>Utracker</h1>
            <Navbar />
            <Route exatc path='/login' component={Login} />
            <Route exatc path='/signin' component={Signin} />

          </div>
        </div>



      </BrowserRouter>
    </div>
  );
}




export default App;
