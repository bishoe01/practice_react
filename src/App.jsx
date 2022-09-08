import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Main from './main/main';
import Middle from './middle/middle';
import Service from './service_/service';
import Portfolio from './portfolio/portfolio';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Middle />
      <Service />
      <Portfolio/>
      <Routes>
        {/* <Route path="/" element={<h1>Home</h1>} /> */}
        <Route path="about" element={<h1>About</h1>} />
      </Routes>
    </div>
  );
}

export default App;
