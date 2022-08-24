import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Home.js'
import Footer from './Footer.js';
import Header from './Header';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Project from './Components/Project';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/bio' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
