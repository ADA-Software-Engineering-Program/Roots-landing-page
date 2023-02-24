
import './App.css';
import Aboutus from './components/Aboutus';
import Accessibility from './components/Accessibility';
import Lecturers from './components/Lecturers';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Aboutus></Aboutus>
     <Lecturers></Lecturers>
     <Accessibility></Accessibility>
    </div>
  );
}

export default App;
