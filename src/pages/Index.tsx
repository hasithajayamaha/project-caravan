
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search, Filter, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrailCard from '@/components/TrailCard';
import FeaturedTrail from '@/components/FeaturedTrail';
import { trails, getFeaturedTrails } from '@/data/trails';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const featuredTrails = getFeaturedTrails();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <FeaturedTrail trail={featuredTrails[0]} />
          </div>
        </section>
        
        {/* Search Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Find Your Next Adventure</h2>
              <div className="relative flex items-center">
                <div className="absolute left-4">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input 
                  type="text"
                  placeholder="Search for trails, parks, or locations..."
                  className="pl-12 py-6 rounded-l-lg rounded-r-none w-full text-lg border-r-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="rounded-l-none rounded-r-lg h-[52px] px-6 bg-forest hover:bg-forest-light flex items-center">
                  <span className="mr-2 hidden sm:inline">Search</span>
                  <Filter className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex flex-wrap justify-center mt-6 gap-2">
                <Button variant="outline" size="sm" className="rounded-full">
                  <MapPin className="h-4 w-4 mr-1" />
                  Near Me
                </Button>
                {['Easy Trails', 'Dog Friendly', 'Waterfalls', 'Mountain Views', 'Family Friendly'].map((tag) => (
                  <Button key={tag} variant="outline" size="sm" className="rounded-full">
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Popular Trails Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Popular Trails</h2>
              <Link to="/discover" className="text-forest hover:text-forest-light flex items-center">
                View All
                <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trails.slice(0, 6).map((trail) => (
                <TrailCard key={trail.id} trail={trail} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Caravan Trails</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-forest/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-forest" />
                </div>
                <h3 className="text-xl font-bold mb-2">Discover Trails</h3>
                <p className="text-muted-foreground">
                  Explore thousands of hiking trails with detailed maps, photos, and reviews from our community.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-sunset/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-sunset">
                    <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                    <circle cx="17" cy="7" r="5"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Track Your Hikes</h3>
                <p className="text-muted-foreground">
                  Record your adventures, share your experiences, and keep track of all the trails you've conquered.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-earth/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-earth">
                    <path d="M18 8c0 2.5-2 2.5-2 5"></path>
                    <path d="M18 3a5 5 0 0 1 4 8c-2 3-4 3.5-4 6"></path>
                    <path d="M18 21v-8"></path>
                    <path d="M6 16a6 6 0 1 1 12 0v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Detailed Guides</h3>
                <p className="text-muted-foreground">
                  Access expert tips, seasonal information, and local insights to make the most of your hiking experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-forest text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
            <p className="text-lg text-stone-light max-w-2xl mx-auto mb-8">
              Join thousands of hikers discovering new trails, sharing experiences, and planning their next outdoor adventure.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-forest hover:bg-stone">
                Sign Up for Free
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-forest-dark">
                Explore Trails
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
