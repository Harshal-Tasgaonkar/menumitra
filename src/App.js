import Home from './Components/Home';

import './Assets/Css/bootstrap.min.css'
import './Assets/Css/style.css'
import './Assets/Css/owl.theme.default.min.css'
import './Assets/Css/responsive.css'
import './Assets/Css/animate.min.css'
import './Assets/Css/meanmenu.min.css'
// import './Assets/Css/flaticon.css'
import './Assets/Css/font-awesome.min.css'
import './Assets/Css/owl.carousel.min.css'
import './Assets/Css/nice-select.min.css'
import './Assets/Css/odometer.min.css'
import './Assets/Css/imagelightbox.min.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import Client from './Components/Client';


function App() {
  return (
    
    <>
    <HashRouter>
    <Routes>

    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/features" element={<Features />}/>
    <Route path="/pricing" element={<Pricing />}/>
    <Route path="/client" element={<Client />}/>
    

    </Routes>
    
    </HashRouter>
    </>

  );
}

export default App;
