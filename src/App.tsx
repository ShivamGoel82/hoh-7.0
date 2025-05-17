import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'HackOnHills-7.0 | CodeZen';
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e: Event) {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Schedule />
      <Gallery />
      <Sponsors />
      <FAQ />
      <Team />
      <Footer />
    </div>
  );
}

export default App;