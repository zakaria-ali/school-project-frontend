import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import About from './pages/About';
import Industrial from './pages/Industrial';
import Specialties from './pages/Specialties';
import Apprenticeship from './pages/Apprenticeship';
import Competency from './pages/Competency';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import AdminGallery from './pages/AdminGallery';
import SpecialtyDetail from './pages/SpecialtyDetail';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col relative">
          <ScrollProgress />
          <ParticleBackground />
          <Navbar />
          <Breadcrumbs />
          <main className="flex-grow pt-0 relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/industrial" element={<Industrial />} />
              <Route path="/specialties" element={<Specialties />} />
              <Route path="/specialty/:id" element={<SpecialtyDetail />} />
              <Route path="/apprenticeship" element={<Apprenticeship />} />
              <Route path="/competency" element={<Competency />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/admin/gallery" element={<AdminGallery />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

