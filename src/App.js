import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import{BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Header />
  <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projets" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
