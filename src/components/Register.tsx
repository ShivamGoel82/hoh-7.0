import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Register: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="register" className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-conic from-primary via-primary-light to-primary opacity-95"></div>

      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-gradient-radial from-accent/20 to-transparent blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="bg-primary-light/80 backdrop-blur-lg p-8 md:p-12 rounded-2xl shadow-lg border border-accent/20"
        >
          <div className="text-center mb-8">
            <h2 className="text-accent text-lg font-medium mb-2">Register Now</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-light mb-6">Join The CodeZen Experience</h3>
            <p className="text-neutral text-lg max-w-3xl mx-auto">
              Ready to embark on a 36-hour journey of innovation, collaboration, and fun? 
              Secure your spot at HackOnHills 7.0 today!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-primary/80 backdrop-blur-sm rounded-xl p-6 border border-accent/10">
              <h4 className="text-xl font-semibold text-neutral-light mb-4">Registration Details</h4>
              <ul className="space-y-3 text-neutral">
                <li className="flex">
                  <span className="text-accent mr-2">•</span>
                  <span>Early Bird Registration: March 1 - March 15, 2025</span>
                </li>
                <li className="flex">
                  <span className="text-accent mr-2">•</span>
                  <span>Regular Registration: March 16 - April 5, 2025</span>
                </li>
                <li className="flex">
                  <span className="text-accent mr-2">•</span>
                  <span>Team Size: 1-4 members</span>
                </li>
                <li className="flex">
                  <span className="text-accent mr-2">•</span>
                  <span>Registration Fee: Free</span>
                </li>
                <li className="flex">
                  <span className="text-accent mr-2">•</span>
                  <span>Limited to 500 participants</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/80 backdrop-blur-sm rounded-xl p-6 border border-accent/10">
              <h4 className="text-xl font-semibold text-neutral-light mb-4">What You'll Get</h4>
              <ul className="space-y-3 text-neutral">
                <li className="flex">
                  <span className="text-accent mr-2">•</span>
                  <span>Access to the 36-hour hackathon</span>
                </li>
                <li className="flex">
                  <span className="text-accent mr-2">•</span>
                  <span>Meals and refreshments</span>
                </li>
                <li className="flex">
                  <span className="text-accent mr-2">•</span>
                  <span>HackOnHills swag kit</span>
                </li>
                <li className="flex">
                  <span className="text-accent mr-2">•</span>
                  <span>Networking opportunities with industry professionals</span>
                </li>
                <li className="flex">
                  <span className="text-accent mr-2">•</span>
                  <span>Chance to win exciting prizes</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-accent hover:bg-accent-light text-primary px-8 py-4 rounded-md text-lg font-semibold transition-colors duration-300"
            >
              Register Your Team
            </motion.a>
            <p className="text-neutral mt-4">
              Questions about registration? <a href="mailto:registration@hackonhills.dev" className="text-accent underline">Contact us</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Register;