import './App.css';
import {HashRouter as Router, Routes,Route} from 'react-router-dom' 
import HomePage from './pages/HomePage';
import About from './components/About';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Project';



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
        <Route path='/contactme' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Footer/>
    </Router>      
  );
}

export default App;
