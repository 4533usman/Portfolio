import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Components/Home';

function App() {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500  w-full h-screen'>


      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
