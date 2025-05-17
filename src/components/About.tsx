import React from 'react';
import { Code, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-accent text-lg font-medium mb-2">About The Event</motion.h2>
          <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-neutral-light mb-6">HackOnHills-7.0</motion.h3>
          <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-neutral text-lg">
            HackOnHills 7.0 is a 36-hour hackathon organized by the students of National Institute of Technology, Hamirpur. 
            Join us for an exciting coding marathon where creativity meets technology in the serene hills of Himachal Pradesh.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-primary rounded-xl p-8 text-center hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-accent/10 p-4 rounded-full">
                <Code size={32} className="text-accent" />
              </div>
            </div>
            <h4 className="text-neutral-light text-xl font-semibold mb-4">Innovative Tracks</h4>
            <p className="text-neutral">
              Explore diverse problem statements across multiple domains and create solutions that can make a real impact.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-primary rounded-xl p-8 text-center hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-accent/10 p-4 rounded-full">
                <Users size={32} className="text-accent" />
              </div>
            </div>
            <h4 className="text-neutral-light text-xl font-semibold mb-4">Networking & Mentorship</h4>
            <p className="text-neutral">
              Connect with industry professionals, talented peers, and experienced mentors who will guide you throughout the hackathon.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-primary rounded-xl p-8 text-center hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-accent/10 p-4 rounded-full">
                <Award size={32} className="text-accent" />
              </div>
            </div>
            <h4 className="text-neutral-light text-xl font-semibold mb-4">Exciting Prizes</h4>
            <p className="text-neutral">
              Compete for cash prizes, sponsored rewards, and recognition for your innovative solutions across various categories.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 bg-gradient-to-r from-primary to-primary-light rounded-xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-accent text-4xl md:text-5xl font-bold mb-2">1000+</p>
              <p className="text-neutral">Participants</p>
            </div>
            <div>
              <p className="text-accent text-4xl md:text-5xl font-bold mb-2">100+</p>
              <p className="text-neutral">Projects</p>
            </div>
            <div>
              <p className="text-accent text-4xl md:text-5xl font-bold mb-2">36</p>
              <p className="text-neutral">Hours</p>
            </div>
            <div>
              <p className="text-accent text-4xl md:text-5xl font-bold mb-2">₹1L+</p>
              <p className="text-neutral">In Prizes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;