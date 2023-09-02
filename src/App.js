import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { AboutUS } from "./Components/AboutUS/AboutUS";
import { Samples } from "./Components/Samples/Samples";
import { Home } from "./Components/HOME/Home";
import { Services } from "./Components/SERVICES/Services";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ResetPassword } from "./Components/ResetPassword/ResetPassword";
import { ResetPasswordSuccess } from "./Components/ResetPassword/ResetPasswordSuccess";
import { ResetPasswordHome } from "./Components/ResetPassword/ResetPasswordHome";
import { Marks } from "./Components/Marks/Marks";
import { Errors } from "./Components/Errors.jsx/Errors";
import { Belowheader } from "./Components/BelowHeader/Belowheader";
import { ImageGallery } from "./Components/ImageGallery/ImageGallery";
import HomePagerCardDetails from "./Components/shared/HomePageCardDetails/HomePagerCardDetails";



function App() {

  const images = [];
  const imageContext = require.context('./images/ChaiMinarHotelphotos', false, /\.(png|jpg|jpeg|gif)$/);

  imageContext.keys().forEach((imagePath) => {
    images.push({
      src: imageContext(imagePath),
      alt: imagePath.slice(2, -4),
      caption: 'Sanabil School Events'
    });
  });



  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Navbar />
        <Belowheader />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUS />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/gallery" element={<ImageGallery images={images} />}></Route>
          <Route path="/samples" element={<Samples />}></Route>
          <Route path="/hpcard/:serviceid" element={<HomePagerCardDetails />}></Route>
          {/*<Route path='/register' element={<Register />}></Route> */}
          <Route path="/rp" element={<ResetPasswordHome />}>
            <Route path="/rp/:id" element={<ResetPassword />}></Route>
            <Route path="/rp/rps" element={<ResetPasswordSuccess />}></Route>
          </Route>
          <Route path="/marks/:rn" element={<Marks />}></Route>
          <Route path="/error" element={<Errors />}></Route>
        </Routes>
      </BrowserRouter>
      <FloatingWhatsApp
        phoneNumber="+919880512345"
        chatMessage="Hi, type and continue on WhatsApp!!!"
        accountName=" ZELTON  "
        allowEsc
        allowClickAway
        notification
        notificationSound
        placeholder="Type Hello and Send to continue on WhatsApp!!!"
        avatar="sanabilLogo.jpeg"
        darkMode="true"
      />
      <Footer />
    </div>
  );
}

export default App;
