import React from 'react';
import styles from './App.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Profile from './profile/profile';
import Details from './details/details';
import Divbox from './divbox/divbox';

function App() {
  return (
    <div>
      <Divbox/>
      <Routes>
        <Route path="about" element={<h1>About</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
