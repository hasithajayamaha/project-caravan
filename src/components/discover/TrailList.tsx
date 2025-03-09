
import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import TrailTypeBadge from '@/components/TrailTypeBadge';
import { Trail } from '@/data/trails';
import { formatDistanceToMetric } from '@/lib/format';

interface TrailListProps {
  trails: Trail[];
  clearFilters: () => void;
}

const TrailList = ({ trails, clearFilters }: TrailListProps) => {
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
    <div className="space-y-4">
      {trails.map((trail) => (
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
  );
};

export default TrailList;
