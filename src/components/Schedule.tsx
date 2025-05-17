// import React, { useState } from 'react';
import { timelineEvents } from '../data/timelineData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Schedule: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="schedule" className="py-20 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-accent text-lg font-medium mb-2">Event Schedule</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-light mb-6">36 Hours of Innovation</h3>
          <p className="max-w-3xl mx-auto text-neutral text-lg">
            Get ready for an action-packed weekend filled with coding, learning, and fun. 
            Mark these important timelines for your HackOnHills journey.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-accent/30 transform md:translate-x-[-50%] hidden md:block"></div>

          {timelineEvents.map((event, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`mb-8 md:mb-12 flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center`}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className={`bg-primary p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  index % 2 === 0 ? 'md:ml-auto' : ''
                }`}>
                  <h4 className="text-accent font-medium text-lg">{event.time}</h4>
                  <h3 className="text-neutral-light text-xl font-semibold my-2">{event.title}</h3>
                  <p className="text-neutral">{event.description}</p>
                </div>
              </div>

              {/* Timeline dot - hidden on mobile */}
              <div className="hidden md:block bg-accent w-5 h-5 rounded-full border-4 border-primary-light absolute left-1/2 transform -translate-x-1/2 z-10"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;