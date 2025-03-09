
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { trails } from '@/data/trails';
import SearchBar from '@/components/discover/SearchBar';
import FilterPanel from '@/components/discover/FilterPanel';
import ActiveFilters from '@/components/discover/ActiveFilters';
import TrailViewToggle from '@/components/discover/TrailViewToggle';

interface FilterState {
  difficulty: string[];
  trailType: string[];
  distance: string;
  duration: string;
}

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTrails, setFilteredTrails] = useState(trails);
  const [activeFilters, setActiveFilters] = useState<FilterState>({
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
  
  const clearFilters = () => {
    setActiveFilters({
      difficulty: [],
      trailType: [],
      distance: 'any',
      duration: 'any',
    });
    setSearchQuery('');
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
            
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
        </section>
        
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/4">
                <FilterPanel 
                  activeFilters={activeFilters} 
                  handleFilterChange={handleFilterChange}
                  clearFilters={clearFilters}
                />
              </div>
              
              <div className="lg:w-3/4">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <ActiveFilters 
                    activeFilters={activeFilters} 
                    removeFilter={removeFilter}
                    handleFilterChange={handleFilterChange} 
                  />
                  
                  <div className="text-muted-foreground">
                    {filteredTrails.length} {filteredTrails.length === 1 ? 'trail' : 'trails'} found
                  </div>
                </div>
                
                <TrailViewToggle 
                  filteredTrails={filteredTrails} 
                  clearFilters={clearFilters} 
                />
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
