import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer/Footer';
import { AboutUS } from './Components/AboutUS/AboutUS';
import { Samples } from './Components/Samples/Samples';
import { Home } from './Components/HOME/Home';
import { Services } from './Components/SERVICES/Services';

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<AboutUS />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/samples' element={<Samples />}></Route>
        {/* <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route> */}
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
