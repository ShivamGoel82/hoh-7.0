import React, { useState } from 'react';
import { faqItems } from '../data/faqData';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
    <section id="faq" className="py-20 bg-primary-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-accent text-lg font-medium mb-2">FAQ</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-light mb-6">Frequently Asked Questions</h3>
          <p className="max-w-3xl mx-auto text-neutral text-lg">
            Have questions about HackOnHills? Find answers to commonly asked questions here.
            If you don't see your question, feel free to reach out to us directly.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="border border-accent/20 rounded-xl overflow-hidden"
            >
              <button 
                className={`w-full p-6 text-left flex justify-between items-center transition-colors duration-300 ${
                  activeIndex === index ? 'bg-primary' : 'bg-primary-light hover:bg-primary/70'
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <h4 className="text-lg font-medium text-neutral-light">{item.question}</h4>
                {activeIndex === index ? (
                  <ChevronUp className="text-accent flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-accent flex-shrink-0" />
                )}
              </button>
              <motion.div 
                initial={false}
                animate={{ 
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-primary-light"
              >
                <p className="p-6 pt-0 text-neutral">{item.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-neutral mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="mailto:contact@hackonhills.dev" 
            className="inline-block bg-accent hover:bg-accent-light text-primary px-6 py-3 rounded-md text-base font-medium transition-colors duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;