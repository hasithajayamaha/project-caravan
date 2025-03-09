
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Search, Menu, X, MapPin, Compass, BookOpen, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background/90 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Compass className="h-8 w-8 text-forest" />
            <span className="text-xl font-bold text-forest">Caravan Trails</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-forest-light transition-colors">
              Home
            </Link>
            <Link to="/discover" className="font-medium hover:text-forest-light transition-colors">
              Discover
            </Link>
            <Link to="/guides" className="font-medium hover:text-forest-light transition-colors">
              Guides
            </Link>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search trails..."
                className="pl-10 py-2 pr-4 rounded-full bg-muted text-sm w-60 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent"
              />
            </div>
            <Button className="bg-forest hover:bg-forest-light">Sign In</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out pt-24",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
          <div className="relative mx-auto w-full mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search trails..."
              className="pl-10 py-3 pr-4 rounded-full bg-muted text-sm w-full focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent"
            />
          </div>
          
          <Link 
            to="/" 
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted"
            onClick={() => setIsMenuOpen(false)}
          >
            <MapPin className="h-5 w-5 text-forest" />
            <span className="font-medium">Home</span>
          </Link>
          
          <Link 
            to="/discover" 
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted"
            onClick={() => setIsMenuOpen(false)}
          >
            <Compass className="h-5 w-5 text-forest" />
            <span className="font-medium">Discover Trails</span>
          </Link>
          
          <Link 
            to="/guides" 
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted"
            onClick={() => setIsMenuOpen(false)}
          >
            <BookOpen className="h-5 w-5 text-forest" />
            <span className="font-medium">Hiking Guides</span>
          </Link>
          
          <div className="pt-6 border-t">
            <Button className="w-full bg-forest hover:bg-forest-light">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
