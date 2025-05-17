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
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'HackOnHills-7.0';

    // Smooth scroll for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (!href) return;

      const targetElement = document.querySelector(href);
      if (!targetElement) return;

      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
      });
    };

    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });

    // Cleanup to remove event listeners
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
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
      <SpeedInsights />
    </div>
  );
}

export default App;