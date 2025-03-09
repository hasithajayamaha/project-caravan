
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Mail, Heart } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-forest text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Caravan Trails</h3>
            <p className="text-stone-light mb-4">
              Discover the most beautiful hiking trails around the world with our 
              comprehensive guides and community reviews.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone hover:text-stone-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-stone hover:text-stone-light transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-stone hover:text-stone-light transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-bold text-lg mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/discover" className="hover:text-stone-light transition-colors">Discover Trails</Link></li>
              <li><Link to="/guides" className="hover:text-stone-light transition-colors">Hiking Guides</Link></li>
              <li><Link to="/map" className="hover:text-stone-light transition-colors">Trail Map</Link></li>
              <li><Link to="/community" className="hover:text-stone-light transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-stone-light transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-stone-light transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-stone-light transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-stone-light transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
            <p className="mb-4">Subscribe to receive news and updates about new trails.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="rounded-l-md px-4 py-2 w-full text-foreground focus:outline-none"
              />
              <Button className="rounded-l-none bg-sunset hover:bg-sunset-light">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-forest-light text-sm text-center md:flex md:justify-between md:text-left">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Caravan Trails. All rights reserved.
          </div>
          <div className="space-x-4">
            <Link to="/privacy" className="hover:text-stone-light transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-stone-light transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-stone-light transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
