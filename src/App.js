import './App.css';
import Testimonial from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Banner from './components/Banner';
import Footer from './components/Footer'
import Aboutus from './components/Aboutus';
import Features from './components/Features';
import Navbar from './components/Navbar';
 
function App() {
  return (
    <div className="container-fluid m-0">
     <Navbar></Navbar>
     <Aboutus></Aboutus>
     <Features></Features>
     <Testimonial/>
     <Newsletter/>
     <Banner/>
    <Footer/>
    </div>
  );
}

export default App;
