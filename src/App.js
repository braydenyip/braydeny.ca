import './App.css';
import { Route, Routes } from 'react-router';
import Homepage from './pages/index';
import About from './pages/about';
import Projects from './pages/projects';
import Resume from './pages/resume';

function App() {


  return (
    <>
      <div className='flex-container' id="flex-top">
        <h1>hi, i'm brayden! 👋</h1>
      </div>
      <div className="flex-container">
        <div className='inner-container'></div>
        <div className='inner-container'>
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/resume' element={<Resume />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </div>
        <div className='inner-container'></div>
      </div>
      <div className='flex-container' id="flex-bottom"></div>
    </>
    
  );
}

export default App;
