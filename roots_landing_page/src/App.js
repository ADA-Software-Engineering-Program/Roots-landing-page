import './App.css';
import Community from '../../components/Community';
import Testimonial from '../../components/Testimonials';
import Newsletter from '../../components/Newsletter';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer'
import Aboutus from '../../components/Aboutus';
import Accessibility from '../../components/Accessibility';
import Lecturers from '../../components/Lecturers';
import Navbar from '../../components/Navbar';
 
function App() {
  return (
    <div className="container-fluid m-0">
     <Navbar></Navbar>
     <Aboutus></Aboutus>
     <Accessibility></Accessibility>
     <Lecturers></Lecturers>
     <Community/>
     <Testimonial/>
     <Newsletter/>
     <Banner/>
    <Footer/>
    </div>
  );
}

export default App;
