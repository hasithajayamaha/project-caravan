
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Trail } from '@/data/trails';
import { formatDuration, formatDistanceToMetric } from '@/lib/format';
import TrailTypeBadge from './TrailTypeBadge';

interface TrailCardProps {
  trail: Trail;
}

const TrailCard = ({ trail }: TrailCardProps) => {
  const difficultyClass = {
    easy: 'difficulty-badge-easy',
    moderate: 'difficulty-badge-moderate',
    hard: 'difficulty-badge-hard'
  }[trail.difficulty];

  return (
    <Link to={`/trail/${trail.id}`} className="trail-card">
      <Card className="h-full border-0 shadow-sm overflow-hidden">
        <img
          src={trail.imageUrl}
          alt={trail.name}
          className="trail-card-image"
        />
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Badge className={difficultyClass}>
                  {trail.difficulty.charAt(0).toUpperCase() + trail.difficulty.slice(1)}
                </Badge>
                <TrailTypeBadge trailType={trail.trailType} />
              </div>
              <h3 className="text-lg font-bold leading-tight">{trail.name}</h3>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-forest">{formatDistanceToMetric(trail.length)}</div>
            </div>
          </div>
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <MapPin className="h-4 w-4 mr-1 text-forest" />
            <span>{trail.location}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1 text-forest" />
            <span>{formatDuration(trail.duration)}</span>
            <Mountain className="h-4 w-4 ml-3 mr-1 text-forest" />
            <span>{trail.elevationGain}m gain</span>
          </div>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0 flex justify-between">
          <div className="flex items-center">
            <div className="text-sm">
              <span className="font-bold text-forest">{trail.reviews.rating}</span>
              <span className="text-muted-foreground"> ({trail.reviews.count} reviews)</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default TrailCard;
