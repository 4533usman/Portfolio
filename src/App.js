import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';

function App() {
  return (
    <div className='bg-gradient-to-r from-violet-700 to-violet-500  w-full h-screen'>


      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/project' element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
