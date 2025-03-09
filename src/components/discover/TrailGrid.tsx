
import React from 'react';
import { Button } from '@/components/ui/button';
import TrailCard from '@/components/TrailCard';
import { Trail } from '@/data/trails';

interface TrailGridProps {
  trails: Trail[];
  clearFilters: () => void;
}

const TrailGrid = ({ trails, clearFilters }: TrailGridProps) => {
  if (trails.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl font-semibold mb-2">No trails found</p>
        <p className="text-muted-foreground mb-6">Try adjusting your filters or search query</p>
        <Button
          variant="outline"
          onClick={clearFilters}
        >
          Clear all filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {trails.map((trail) => (
        <TrailCard key={trail.id} trail={trail} />
      ))}
    </div>
  );
};

export default TrailGrid;
