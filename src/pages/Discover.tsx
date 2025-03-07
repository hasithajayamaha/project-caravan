
import { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrailCard from '@/components/TrailCard';
import { trails } from '@/data/trails';

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [distanceRange, setDistanceRange] = useState([0, 20]);
  const [filteredTrails, setFilteredTrails] = useState(trails);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Discover Trails</h1>
            <p className="text-muted-foreground">
              Explore our collection of beautiful hiking trails for every skill level and preference.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4 bg-white rounded-lg border p-6">
              <h2 className="font-bold text-lg mb-4">Filters</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search trails..." 
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Location</h3>
                  <div className="space-y-2">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="west">Western US</SelectItem>
                          <SelectItem value="midwest">Midwest</SelectItem>
                          <SelectItem value="northeast">Northeast</SelectItem>
                          <SelectItem value="southeast">Southeast</SelectItem>
                          <SelectItem value="southwest">Southwest</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" className="w-full flex items-center justify-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      Use Current Location
                    </Button>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-3">
                    <h3 className="font-medium">Distance</h3>
                    <span className="text-sm">{distanceRange[0]} - {distanceRange[1]} km</span>
                  </div>
                  <Slider defaultValue={[0, 20]} min={0} max={50} step={1} onValueChange={setDistanceRange} />
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Difficulty</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="easy" />
                      <label htmlFor="easy" className="text-sm font-medium cursor-pointer">Easy</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="moderate" defaultChecked />
                      <label htmlFor="moderate" className="text-sm font-medium cursor-pointer">Moderate</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="hard" />
                      <label htmlFor="hard" className="text-sm font-medium cursor-pointer">Hard</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Features</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {['Waterfall', 'Lake', 'Forest', 'Mountain', 'Wildlife', 'Views', 'Dogs Allowed', 'Family Friendly'].map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox id={feature.toLowerCase().replace(' ', '-')} />
                        <label htmlFor={feature.toLowerCase().replace(' ', '-')} className="text-sm font-medium cursor-pointer">{feature}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Rating</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Minimum rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3+ Stars</SelectItem>
                      <SelectItem value="3.5">3.5+ Stars</SelectItem>
                      <SelectItem value="4">4+ Stars</SelectItem>
                      <SelectItem value="4.5">4.5+ Stars</SelectItem>
                      <SelectItem value="5">5 Stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="pt-4 space-y-2">
                  <Button className="w-full bg-forest hover:bg-forest-light">Apply Filters</Button>
                  <Button variant="outline" className="w-full">Reset Filters</Button>
                </div>
              </div>
            </div>
            
            {/* Trail List */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-muted-foreground">Showing {filteredTrails.length} trails</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="distance-asc">Distance: Low to High</SelectItem>
                      <SelectItem value="distance-desc">Distance: High to Low</SelectItem>
                      <SelectItem value="difficulty-asc">Difficulty: Easy to Hard</SelectItem>
                      <SelectItem value="difficulty-desc">Difficulty: Hard to Easy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTrails.map((trail) => (
                  <TrailCard key={trail.id} trail={trail} />
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="mx-auto">Load More Trails</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Discover;
