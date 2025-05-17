import React from 'react';
import { sponsors } from '../data/sponsorData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Sponsors: React.FC = () => {
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

  // Group sponsors by tier
  const platinumSponsors = sponsors.filter(sponsor => sponsor.tier === 'platinum');
  const goldSponsors = sponsors.filter(sponsor => sponsor.tier === 'gold');
  const silverSponsors = sponsors.filter(sponsor => sponsor.tier === 'silver');
  // const bronzeSponsors = sponsors.filter(sponsor => sponsor.tier === 'bronze');

  return (
    <section id="sponsors" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-accent text-lg font-medium mb-2">Our Sponsors</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-light mb-6">Powered By Industry Leaders</h3>
          <p className="max-w-3xl mx-auto text-neutral text-lg">
            HackOnHills is made possible by the generous support of our sponsors. 
            Their contributions help us create an amazing experience for all participants.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Platinum Sponsors */}
          {platinumSponsors.length > 0 && (
            <div className="mb-12">
              <motion.h4 
                variants={itemVariants}
                className="text-xl font-semibold text-neutral-light text-center mb-8 border-b border-accent/30 pb-2"
              >
                Platinum Sponsors
              </motion.h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {platinumSponsors.map((sponsor, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="bg-primary-light rounded-xl p-8 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300"
                  >
                    <img 
                      src={sponsor.logoUrl} 
                      alt={sponsor.name} 
                      className="h-24 object-contain mb-4"
                    />
                    <h5 className="text-neutral-light text-lg font-medium">{sponsor.name}</h5>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Gold Sponsors */}
          {goldSponsors.length > 0 && (
            <div className="mb-12">
              <motion.h4 
                variants={itemVariants}
                className="text-xl font-semibold text-neutral-light text-center mb-8 border-b border-accent/30 pb-2"
              >
                Gold Sponsors
              </motion.h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {goldSponsors.map((sponsor, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="bg-primary-light rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300"
                  >
                    <img 
                      src={sponsor.logoUrl} 
                      alt={sponsor.name} 
                      className="h-16 object-contain mb-3"
                    />
                    <h5 className="text-neutral-light text-base font-medium">{sponsor.name}</h5>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Silver Sponsors */}
          {silverSponsors.length > 0 && (
            <div className="mb-12">
              <motion.h4 
                variants={itemVariants}
                className="text-xl font-semibold text-neutral-light text-center mb-8 border-b border-accent/30 pb-2"
              >
                Silver Sponsors
              </motion.h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {silverSponsors.map((sponsor, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="bg-primary-light rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300"
                  >
                    <img 
                      src={sponsor.logoUrl} 
                      alt={sponsor.name} 
                      className="h-14 object-contain mb-3"
                    />
                    <h5 className="text-neutral-light text-sm font-medium">{sponsor.name}</h5>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Bronze Sponsors
          {bronzeSponsors.length > 0 && (
            <div>
              <motion.h4 
                variants={itemVariants}
                className="text-xl font-semibold text-neutral-light text-center mb-8 border-b border-accent/30 pb-2"
              >
                Bronze Sponsors
              </motion.h4>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {bronzeSponsors.map((sponsor, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="bg-primary-light rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300"
                  >
                    <img 
                      src={sponsor.logoUrl} 
                      alt={sponsor.name} 
                      className="h-12 object-contain mb-2"
                    />
                    <h5 className="text-neutral-light text-xs font-medium">{sponsor.name}</h5>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          */}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h4 className="text-neutral-light text-xl font-semibold mb-4">Interested in Sponsoring?</h4>
          <p className="text-neutral mb-6 max-w-2xl mx-auto">
            Join our growing list of sponsors and support the tech innovators of tomorrow. 
            Reach out to learn more about our sponsorship packages.
          </p>
          <a 
            href="mailto:sponsor@hackonhills.dev" 
            className="inline-block bg-accent hover:bg-accent-light text-primary px-6 py-3 rounded-md text-base font-medium transition-colors duration-300"
          >
            Become a Sponsor
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;