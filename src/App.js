import './App.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar';
import Landingpage from './pages/Landingpage/Landingpage';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Dashboard from './pages/User/Dashboard';
import PrivateRoutes from './components/Protected/Protected';
 

function App() {
  return (
    <div className="container-fluid m-0">
          <Navbar />
      <div>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/User" element={<PrivateRoutes />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          </Routes>
          <ToastContainer />
        </div> 
    </div>
  );
}

export default App;
