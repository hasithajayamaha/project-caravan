
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Mountain, Car, Compass } from 'lucide-react';

interface FilterState {
  difficulty: string[];
  trailType: string[];
  distance: string;
  duration: string;
}

interface ActiveFiltersProps {
  activeFilters: FilterState;
  removeFilter: (filterType: 'difficulty' | 'trailType', value: string) => void;
  handleFilterChange: (
    filterType: 'difficulty' | 'trailType' | 'distance' | 'duration',
    value: string
  ) => void;
}

const ActiveFilters = ({ 
  activeFilters, 
  removeFilter, 
  handleFilterChange 
}: ActiveFiltersProps) => {
  const hasActiveFilters = 
    activeFilters.difficulty.length > 0 || 
    activeFilters.trailType.length > 0 || 
    activeFilters.distance !== 'any' || 
    activeFilters.duration !== 'any';

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-muted-foreground">Active filters:</span>
      {!hasActiveFilters ? (
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
  );
};

export default ActiveFilters;
