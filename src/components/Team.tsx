import React from 'react';
import { teamMembers } from '../data/teamData';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Team: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="team" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-accent text-lg font-medium mb-2">Our Team</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-light mb-6">Meet The Organizers</h3>
          <p className="max-w-3xl mx-auto text-neutral text-lg">
            The passionate individuals behind HackOnHills who work tirelessly to make this event a success.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-primary-light rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative group">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {member.socialLinks?.github && (
                      <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-neutral hover:text-accent transition-colors duration-200">
                        <Github size={24} />
                      </a>
                    )}
                    {member.socialLinks?.linkedin && (
                      <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral hover:text-accent transition-colors duration-200">
                        <Linkedin size={24} />
                      </a>
                    )}
                    {member.socialLinks?.twitter && (
                      <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-neutral hover:text-accent transition-colors duration-200">
                        <Twitter size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-neutral-light mb-1">{member.name}</h4>
                <p className="text-accent">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;