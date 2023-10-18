import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Footer from './Components/Footer';

function App() {
  return (
    // <div className='bg-gradient-to-r from-slate-900 to-slate-800 w-full h-screen'>
     <div className='w-full h-screen'> 
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/project' element={<Project />} />
          <Route exact path='/contact' element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
