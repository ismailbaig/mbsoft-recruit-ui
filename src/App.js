import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import { AboutUS } from './Components/AboutUS/AboutUS';
import { Samples } from './Components/Samples/Samples';
import { Home } from './Components/HOME/Home';
import { Services } from './Components/SERVICES/Services';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { ResetPassword } from './Components/ResetPassword/ResetPassword';
import { ResetPasswordSuccess } from './Components/ResetPassword/ResetPasswordSuccess';
import { ResetPasswordHome } from './Components/ResetPassword/ResetPasswordHome';

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
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
         {/*<Route path='/register' element={<Register />}></Route> */}
         <Route path='/rp' element={<ResetPasswordHome />}>
            <Route path='/rp/:id' element={<ResetPassword />}></Route>
            <Route path='/rp/rps' element={<ResetPasswordSuccess />}></Route>
         </Route>
      </Routes>
      </BrowserRouter>
      <FloatingWhatsApp phoneNumber="+916281236588" chatMessage='Hi from MBsoft'
        accountName="MBsoft"
        allowEsc
        allowClickAway
        notification
        notificationSound
        placeholder = "Type your message here !!!"
        avatar='logoMBsoft.png'
        darkMode='true'
        />
      <Footer />
    </div>
  );
}

export default App;
