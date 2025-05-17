import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-primary pt-10 overflow-hidden">
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-gradient-radial from-accent/30 to-transparent blur-3xl"
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
          className="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-gradient-radial from-accent/20 to-transparent blur-3xl"
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
          className="text-center w-full max-w-6xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] leading-tight font-bold text-neutral-light mb-12">
            From Idea to Code:
            <br />
             Make it <span className="text-accent">Happen.</span>
          </h1>

          <p className="text-neutral text-xl mb-12">
            September 15-17, 2025 • National Institute of Technology, Hamirpur
          </p>

          <motion.div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a 
              href="https://hack-on-hills.devfolio.co/"
              target="_blank"
              rel="noopener noreferrer"
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
}

export default Hero;