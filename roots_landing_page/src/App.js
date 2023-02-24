import './App.css';
import Community from './components/Community';
import Testimonial from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Banner from './components/Banner';
import Footer from './components/Footer'

function App() {
  return (
    <div className="container-fluid">
      <Community/>
      <Testimonial/>
      <Newsletter/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
