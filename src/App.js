import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom' 
import HomePage from './pages/HomePage';
import About from './components/About';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/experience' element={<Experience/>}/>
      </Routes>
    </Router>      
  );
}

export default App;
