import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Main from './main/main';
import Middle from './middle/middle';

function App() {
  return (
    <>
      <Navbar/> 
      <Main/>
      <Middle/>
      <Routes>
        {/* <Route path="/" element={<h1>Home</h1>} /> */}
        <Route path="about" element={<h1>About</h1>} />
      </Routes>
    </>
  );
}

export default App;
