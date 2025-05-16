import React from 'react';
import { tracks } from '../data/trackData';
import { Brain, Link, Glasses, Leaf, Sparkles, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Tracks: React.FC = () => {
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

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'brain': return <Brain size={32} className="text-accent" />;
      case 'link': return <Link size={32} className="text-accent" />;
      case 'glasses': return <Glasses size={32} className="text-accent" />;
      case 'leaf': return <Leaf size={32} className="text-accent" />;
      case 'sparkles': return <Sparkles size={32} className="text-accent" />;
      case 'graduation-cap': return <GraduationCap size={32} className="text-accent" />;
      default: return <Sparkles size={32} className="text-accent" />;
    }
  };

  return (
    <section id="tracks" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-accent text-lg font-medium mb-2">Challenge Tracks</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-light mb-6">Choose Your Innovation Path</h3>
          <p className="max-w-3xl mx-auto text-neutral text-lg">
            Select from our diverse tracks to showcase your skills and solve real-world problems. 
            Each track offers unique challenges and opportunities to make an impact.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tracks.map((track, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-primary-light rounded-xl p-8 hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 border border-accent/10"
            >
              <div className="bg-accent/10 p-4 rounded-full w-fit mb-6">
                {getIcon(track.icon)}
              </div>
              <h4 className="text-neutral-light text-xl font-semibold mb-4">{track.title}</h4>
              <p className="text-neutral">{track.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tracks;