import React from 'react';
import { socialLinks } from '../data/socialData';
import { Github, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'instagram':
        return <Instagram size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'mail':
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-primary-dark text-neutral py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <a href="#home" className="flex items-center">
                <span className="text-accent text-2xl font-bold">HackOnHills</span>
                <span className="text-neutral ml-1 text-xl">7.0</span>
              </a>
            </div>
            <p className="mb-4">
              A 36-hour hackathon where innovation meets the hills. Join us for an unforgettable coding experience!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral hover:text-accent transition-colors duration-200"
                  aria-label={link.platform}
                >
                  {renderSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-accent text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-accent transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors duration-200">About</a></li>
              <li><a href="#tracks" className="hover:text-accent transition-colors duration-200">Tracks</a></li>
              <li><a href="#schedule" className="hover:text-accent transition-colors duration-200">Schedule</a></li>
              <li><a href="#sponsors" className="hover:text-accent transition-colors duration-200">Sponsors</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors duration-200">FAQ</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors duration-200">Gallery</a></li>
              <li><a href="https://hack-on-hills.devfolio.co/" className="hover:text-accent transition-colors duration-200">Register</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-accent text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">National Institute of Technology, Hamirpur</p>
            <p className="mb-2">Hamirpur, Himachal Pradesh, India</p>
            <p className="mb-2">Pin: 177005</p>
            <a href="mailto:hackonhills@gmail.com" className="text-accent hover:underline">hackonhills@gmail.com</a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} HackOnHills. All rights reserved.</p>
          <p className="text-center text-neutral-dark text-sm ">
            Made with ❤️ by the App Team, NITH!
          </p>
            <div className="mt-1 md:mt-0 flex space-x-3">
              <a href="#" className="text-neutral-dark hover:text-accent transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-neutral-dark hover:text-accent transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-neutral-dark hover:text-accent transition-colors duration-200">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;