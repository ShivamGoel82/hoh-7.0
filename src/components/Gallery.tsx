import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const galleryImages = [
  {
    url: 'img3.jpg',
    caption: 'Collaborative Coding Sessions'
  },
  {
    url: 'img4.jpg',
    caption: 'Team Discussions'
  },
  {
    url: 'img5.jpg',
    caption: 'Project Presentations'
  },
  {
    url: 'img6.jpg',
    caption: 'Award Ceremony'
  },
  {
    url: 'img1.jpg',
    caption: 'Mentorship Sessions'
  },
  {
    url: 'img2.jpg',
    caption: 'Judging Round'
  },
  {
    url: 'img7.jpg',
    caption: 'Organizing Team'
  }
];

const Gallery: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="gallery" className="py-20 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-accent text-lg font-medium mb-2">Gallery</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-light mb-6">
            Highlights from HackOnHills 6.0
          </h3>
          <p className="max-w-3xl mx-auto text-neutral text-lg">
            Relive the moments from our previous hackathon where innovation met excellence.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="relative"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex space-x-6 animate-scroll">
            <div className="flex space-x-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative flex-none w-80 h-60 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent">
                    <p className="absolute bottom-4 left-4 text-neutral-light font-medium">
                      {image.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 1.5rem)); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          &:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;