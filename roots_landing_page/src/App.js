import './App.css';
import Community from './components/Community.js';
import Testimonial from './components/Testimonials.js';
import Newsletter from './components/Newsletter.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js'

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
