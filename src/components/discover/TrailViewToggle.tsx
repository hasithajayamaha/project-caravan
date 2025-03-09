
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TrailGrid from './TrailGrid';
import TrailList from './TrailList';
import { Trail } from '@/data/trails';

interface TrailViewToggleProps {
  filteredTrails: Trail[];
  clearFilters: () => void;
}

const TrailViewToggle = ({ filteredTrails, clearFilters }: TrailViewToggleProps) => {
  return (
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
        <TrailGrid trails={filteredTrails} clearFilters={clearFilters} />
      </TabsContent>
      
      <TabsContent value="list" className="mt-6">
        <TrailList trails={filteredTrails} clearFilters={clearFilters} />
      </TabsContent>
    </Tabs>
  );
};

export default TrailViewToggle;
