
import React from 'react';
import { Filter, Mountain, Car, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterState {
  difficulty: string[];
  trailType: string[];
  distance: string;
  duration: string;
}

interface FilterPanelProps {
  activeFilters: FilterState;
  handleFilterChange: (
    filterType: 'difficulty' | 'trailType' | 'distance' | 'duration',
    value: string
  ) => void;
  clearFilters: () => void;
}

const FilterPanel = ({ 
  activeFilters, 
  handleFilterChange, 
  clearFilters 
}: FilterPanelProps) => {
  return (
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
          onClick={clearFilters}
        >
          Clear All Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterPanel;
