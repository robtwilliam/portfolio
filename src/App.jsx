import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Nav from './components/Nav/Nav.jsx';
import Project from './pages/Project.jsx';
import Contact from './pages/Contact.jsx';
import { useClickjackingProtection, ScrollToTop } from './helpers/helpers.js';
import Footer from './components/Footer/Footer.jsx';

function App() {
  useClickjackingProtection();

  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="main-header">
        <Nav />
        </div>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            {/*<Route path="/faq" element={<Faq />} />
            <Route path="/about" element={<About />} />
             */}
          </Routes>
        </main>
        {/* <br></br>
        <br></br> */}
        <Footer />
      </Router>
    </>
  )
}

export default App
