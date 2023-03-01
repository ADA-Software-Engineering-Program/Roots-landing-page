import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Landingpage from './pages/Landingpage/Landingpage';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
 
function App() {
  return (
    <div className="container-fluid m-0">
          <Navbar />
      <div>
        <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div> 
    </div>
  );
}

export default App;
