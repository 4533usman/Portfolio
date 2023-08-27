import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <div className='bg-gradient-to-r from-violet-700 to-violet-500  w-full h-screen'>


      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
