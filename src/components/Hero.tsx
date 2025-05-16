import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-primary pt-24">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 py-4 bg-primary/95 backdrop-blur-sm border-b border-accent/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="text-accent text-2xl font-bold">
            HackOnHills<span className="text-neutral">7.0</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-neutral hover:text-accent transition-colors">Home</a>
            <a href="#about" className="text-neutral hover:text-accent transition-colors">About us</a>
            <a href="#tracks" className="text-neutral hover:text-accent transition-colors">Tracks</a>
            <a href="#schedule" className="text-neutral hover:text-accent transition-colors">Schedule</a>
            <a href="#sponsors" className="text-neutral hover:text-accent transition-colors">Sponsors</a>
            <a href="#faq" className="text-neutral hover:text-accent transition-colors">FAQ</a>
            <a href="#team" className="text-neutral hover:text-accent transition-colors">Team</a>
            <a href="#register" className="bg-accent hover:bg-accent-light text-primary px-6 py-2 rounded-md transition-colors">
              Register Now
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-gradient-radial from-accent/30 to-transparent blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-radial from-accent/20 to-transparent blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />

        {/* Main Heading */}
        <motion.div 
          className="text-center max-w-6xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[4rem] md:text-[5.5rem] leading-tight font-bold text-neutral-light mb-8">
            From Idea to Code:
            <br />
            Make it <span className="text-accent">Happen</span>
          </h1>

          <p className="text-neutral text-xl mb-12">
            September 11-13, 2025 • National Institute of Technology, Hamirpur
          </p>

          <motion.div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a 
              href="#register"
              className="inline-block bg-accent hover:bg-accent-light text-primary px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.a>
            <motion.a 
              href="#about"
              className="inline-block border-2 border-accent text-accent hover:bg-accent/10 px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn more
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;