import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        {/* <Route path='/contact' element={<Contact />}></Route> */}
        {/* <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route> */}
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
