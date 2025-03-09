
import React, { useState, useEffect } from 'react';
import { MapPin, Search, Filter, Car, Mountain, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrailCard from '@/components/TrailCard';
import { trails } from '@/data/trails';

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTrails, setFilteredTrails] = useState(trails);
  const [activeFilters, setActiveFilters] = useState<{
    difficulty: string[];
    trailType: string[];
    distance: string;
    duration: string;
  }>({
    difficulty: [],
    trailType: [],
    distance: 'any',
    duration: 'any',
  });
  
  const handleFilterChange = (
    filterType: 'difficulty' | 'trailType' | 'distance' | 'duration',
    value: string
  ) => {
    if (filterType === 'difficulty' || filterType === 'trailType') {
      setActiveFilters((prev) => {
        const currentFilters = [...prev[filterType]];
        const filterIndex = currentFilters.indexOf(value);
        
        if (filterIndex >= 0) {
          currentFilters.splice(filterIndex, 1);
        } else {
          currentFilters.push(value);
        }
        
        return {
          ...prev,
          [filterType]: currentFilters,
        };
      });
    } else {
      setActiveFilters((prev) => ({
        ...prev,
        [filterType]: value,
      }));
    }
  };
  
  const removeFilter = (filterType: 'difficulty' | 'trailType', value: string) => {
    setActiveFilters((prev) => {
      const currentFilters = [...prev[filterType]];
      const filterIndex = currentFilters.indexOf(value);
      
      if (filterIndex >= 0) {
        currentFilters.splice(filterIndex, 1);
      }
      
      return {
        ...prev,
        [filterType]: currentFilters,
      };
    });
  };
  
  useEffect(() => {
    let results = trails;
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (trail) =>
          trail.name.toLowerCase().includes(query) ||
          trail.location.toLowerCase().includes(query) ||
          trail.description.toLowerCase().includes(query) ||
          trail.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }
    
    // Filter by difficulty
    if (activeFilters.difficulty.length > 0) {
      results = results.filter((trail) =>
        activeFilters.difficulty.includes(trail.difficulty)
      );
    }
    
    // Filter by trail type
    if (activeFilters.trailType.length > 0) {
      results = results.filter((trail) =>
        activeFilters.trailType.includes(trail.trailType)
      );
    }
    
    // Filter by distance
    if (activeFilters.distance !== 'any') {
      switch (activeFilters.distance) {
        case 'short':
          results = results.filter((trail) => trail.length <= 5);
          break;
        case 'medium':
          results = results.filter((trail) => trail.length > 5 && trail.length <= 15);
          break;
        case 'long':
          results = results.filter((trail) => trail.length > 15);
          break;
      }
    }
    
    // Filter by duration
    if (activeFilters.duration !== 'any') {
      switch (activeFilters.duration) {
        case 'under2':
          results = results.filter((trail) => trail.duration <= 120);
          break;
        case '2to4':
          results = results.filter((trail) => trail.duration > 120 && trail.duration <= 240);
          break;
        case '4to8':
          results = results.filter((trail) => trail.duration > 240 && trail.duration <= 480);
          break;
        case 'over8':
          results = results.filter((trail) => trail.duration > 480);
          break;
      }
    }
    
    setFilteredTrails(results);
  }, [searchQuery, activeFilters]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-forest">
          <div className="container mx-auto">
            <div className="text-center text-white mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Trails</h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                Find the perfect hiking or 4x4 trail for your next adventure
              </p>
            </div>
            
            <div className="bg-white dark:bg-black/20 rounded-lg p-4 max-w-3xl mx-auto">
              <div className="relative flex items-center">
                <div className="absolute left-4">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input 
                  type="text"
                  placeholder="Search for trails, parks, or locations..."
                  className="pl-12 py-6 rounded-lg w-full text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/4">
                <div className="bg-background rounded-lg border p-6 sticky top-4">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Filter className="h-5 w-5 mr-2" />
                    Filters
                  </h2>
                  
                  <Accordion type="multiple" defaultValue={['difficulty', 'trailType', 'distance', 'duration']}>
                    <AccordionItem value="difficulty">
                      <AccordionTrigger>Difficulty</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="easy" 
                              checked={activeFilters.difficulty.includes('easy')}
                              onCheckedChange={() => handleFilterChange('difficulty', 'easy')}
                            />
                            <label htmlFor="easy" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Easy
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="moderate" 
                              checked={activeFilters.difficulty.includes('moderate')}
                              onCheckedChange={() => handleFilterChange('difficulty', 'moderate')}
                            />
                            <label htmlFor="moderate" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Moderate
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="hard" 
                              checked={activeFilters.difficulty.includes('hard')}
                              onCheckedChange={() => handleFilterChange('difficulty', 'hard')}
                            />
                            <label htmlFor="hard" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Hard
                            </label>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="trailType">
                      <AccordionTrigger>Trail Type</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="hiking" 
                              checked={activeFilters.trailType.includes('hiking')}
                              onCheckedChange={() => handleFilterChange('trailType', 'hiking')}
                            />
                            <label htmlFor="hiking" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center">
                              <Mountain className="h-4 w-4 mr-1" /> Hiking
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="4x4" 
                              checked={activeFilters.trailType.includes('4x4')}
                              onCheckedChange={() => handleFilterChange('trailType', '4x4')}
                            />
                            <label htmlFor="4x4" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center">
                              <Car className="h-4 w-4 mr-1" /> 4x4
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="mixed" 
                              checked={activeFilters.trailType.includes('mixed')}
                              onCheckedChange={() => handleFilterChange('trailType', 'mixed')}
                            />
                            <label htmlFor="mixed" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center">
                              <Compass className="h-4 w-4 mr-1" /> Mixed
                            </label>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="distance">
                      <AccordionTrigger>Distance</AccordionTrigger>
                      <AccordionContent>
                        <Select 
                          defaultValue="any"
                          value={activeFilters.distance}
                          onValueChange={(value) => handleFilterChange('distance', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Any distance" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Any distance</SelectItem>
                            <SelectItem value="short">Short (under 5 km)</SelectItem>
                            <SelectItem value="medium">Medium (5-15 km)</SelectItem>
                            <SelectItem value="long">Long (over 15 km)</SelectItem>
                          </SelectContent>
                        </Select>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="duration">
                      <AccordionTrigger>Duration</AccordionTrigger>
                      <AccordionContent>
                        <Select 
                          defaultValue="any"
                          value={activeFilters.duration}
                          onValueChange={(value) => handleFilterChange('duration', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Any duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Any duration</SelectItem>
                            <SelectItem value="under2">Under 2 hours</SelectItem>
                            <SelectItem value="2to4">2-4 hours</SelectItem>
                            <SelectItem value="4to8">4-8 hours</SelectItem>
                            <SelectItem value="over8">Over 8 hours</SelectItem>
                          </SelectContent>
                        </Select>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <div className="mt-6">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setActiveFilters({
                        difficulty: [],
                        trailType: [],
                        distance: 'any',
                        duration: 'any',
                      })}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-3/4">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-muted-foreground">Active filters:</span>
                    {activeFilters.difficulty.length === 0 && 
                     activeFilters.trailType.length === 0 && 
                     activeFilters.distance === 'any' && 
                     activeFilters.duration === 'any' ? (
                      <span className="text-muted-foreground italic">None</span>
                    ) : (
                      <>
                        {activeFilters.difficulty.map((difficulty) => (
                          <Badge 
                            key={difficulty} 
                            variant="secondary"
                            className="flex items-center gap-1 capitalize"
                            onClick={() => removeFilter('difficulty', difficulty)}
                          >
                            {difficulty}
                            <button className="ml-1 hover:bg-secondary/50 rounded-full h-4 w-4 inline-flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </button>
                          </Badge>
                        ))}
                        
                        {activeFilters.trailType.map((type) => (
                          <Badge 
                            key={type} 
                            variant="secondary"
                            className="flex items-center gap-1 capitalize"
                            onClick={() => removeFilter('trailType', type)}
                          >
                            {type === 'hiking' ? (
                              <Mountain className="h-3 w-3 mr-1" />
                            ) : type === '4x4' ? (
                              <Car className="h-3 w-3 mr-1" />
                            ) : (
                              <Compass className="h-3 w-3 mr-1" />
                            )}
                            {type}
                            <button className="ml-1 hover:bg-secondary/50 rounded-full h-4 w-4 inline-flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </button>
                          </Badge>
                        ))}
                        
                        {activeFilters.distance !== 'any' && (
                          <Badge 
                            variant="secondary"
                            className="flex items-center gap-1"
                          >
                            Distance: {
                              activeFilters.distance === 'short' ? 'Under 5 km' :
                              activeFilters.distance === 'medium' ? '5-15 km' :
                              'Over 15 km'
                            }
                            <button 
                              className="ml-1 hover:bg-secondary/50 rounded-full h-4 w-4 inline-flex items-center justify-center"
                              onClick={() => handleFilterChange('distance', 'any')}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </button>
                          </Badge>
                        )}
                        
                        {activeFilters.duration !== 'any' && (
                          <Badge 
                            variant="secondary"
                            className="flex items-center gap-1"
                          >
                            Duration: {
                              activeFilters.duration === 'under2' ? 'Under 2 hours' :
                              activeFilters.duration === '2to4' ? '2-4 hours' :
                              activeFilters.duration === '4to8' ? '4-8 hours' :
                              'Over 8 hours'
                            }
                            <button 
                              className="ml-1 hover:bg-secondary/50 rounded-full h-4 w-4 inline-flex items-center justify-center"
                              onClick={() => handleFilterChange('duration', 'any')}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </button>
                          </Badge>
                        )}
                      </>
                    )}
                  </div>
                  
                  <div className="text-muted-foreground">
                    {filteredTrails.length} {filteredTrails.length === 1 ? 'trail' : 'trails'} found
                  </div>
                </div>
                
                <Tabs defaultValue="grid" className="mb-6">
                  <TabsList className="ml-auto w-fit">
                    <TabsTrigger value="grid" className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                      </svg>
                      Grid
                    </TabsTrigger>
                    <TabsTrigger value="list" className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" x2="21" y1="6" y2="6"></line>
                        <line x1="3" x2="21" y1="12" y2="12"></line>
                        <line x1="3" x2="21" y1="18" y2="18"></line>
                      </svg>
                      List
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="grid" className="mt-6">
                    {filteredTrails.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredTrails.map((trail) => (
                          <TrailCard key={trail.id} trail={trail} />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-xl font-semibold mb-2">No trails found</p>
                        <p className="text-muted-foreground mb-6">Try adjusting your filters or search query</p>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setSearchQuery('');
                            setActiveFilters({
                              difficulty: [],
                              trailType: [],
                              distance: 'any',
                              duration: 'any',
                            });
                          }}
                        >
                          Clear all filters
                        </Button>
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="list" className="mt-6">
                    {filteredTrails.length > 0 ? (
                      <div className="space-y-4">
                        {filteredTrails.map((trail) => (
                          <div key={trail.id} className="border rounded-lg overflow-hidden flex flex-col sm:flex-row">
                            <div className="w-full sm:w-1/3 h-48 sm:h-auto">
                              <img 
                                src={trail.imageUrl} 
                                alt={trail.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                              <div className="flex justify-between items-start mb-2">
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-2 items-center">
                                    <Badge className={`difficulty-badge-${trail.difficulty}`}>
                                      {trail.difficulty.charAt(0).toUpperCase() + trail.difficulty.slice(1)}
                                    </Badge>
                                    <TrailTypeBadge trailType={trail.trailType} />
                                  </div>
                                  <h3 className="text-lg font-bold">{trail.name}</h3>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-semibold text-forest">{formatDistanceToMetric(trail.length)}</div>
                                </div>
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground mb-2">
                                <MapPin className="h-4 w-4 mr-1 text-forest" />
                                <span>{trail.location}</span>
                              </div>
                              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{trail.description}</p>
                              <div className="mt-auto flex items-center justify-between">
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <span className="font-bold text-forest">{trail.reviews.rating}</span>
                                    <span className="text-muted-foreground"> ({trail.reviews.count} reviews)</span>
                                  </div>
                                </div>
                                <Button size="sm" asChild>
                                  <a href={`/trail/${trail.id}`}>View Trail</a>
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-xl font-semibold mb-2">No trails found</p>
                        <p className="text-muted-foreground mb-6">Try adjusting your filters or search query</p>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setSearchQuery('');
                            setActiveFilters({
                              difficulty: [],
                              trailType: [],
                              distance: 'any',
                              duration: 'any',
                            });
                          }}
                        >
                          Clear all filters
                        </Button>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Discover;
