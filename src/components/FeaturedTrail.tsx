
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Mountain, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Trail } from '@/data/trails';
import { formatDuration, formatDistanceToMetric } from '@/lib/format';
import TrailTypeBadge from './TrailTypeBadge';

interface FeaturedTrailProps {
  trail: Trail;
}

const FeaturedTrail = ({ trail }: FeaturedTrailProps) => {
  const difficultyClass = {
    easy: 'difficulty-badge-easy',
    moderate: 'difficulty-badge-moderate',
    hard: 'difficulty-badge-hard'
  }[trail.difficulty];

  return (
    <div className="relative overflow-hidden rounded-xl h-[500px]">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${trail.imageUrl})` }}
      />
      <div className="hero-overlay" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
        <div className="hero-content">
          <div className="flex gap-2 mb-3">
            <Badge className={difficultyClass}>
              {trail.difficulty.charAt(0).toUpperCase() + trail.difficulty.slice(1)}
            </Badge>
            <TrailTypeBadge trailType={trail.trailType} className="bg-white/20 backdrop-blur-sm" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{trail.name}</h1>
          
          <div className="flex items-center text-white/90 mb-1">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{trail.location}</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/90 mb-4">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-sunset mr-1" />
              <span className="font-semibold">{trail.reviews.rating}</span>
              <span className="text-white/70 ml-1">({trail.reviews.count} reviews)</span>
            </div>
            
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{formatDuration(trail.duration)}</span>
            </div>
            
            <div className="flex items-center">
              <Mountain className="h-4 w-4 mr-1" />
              <span>{trail.elevationGain}m gain</span>
            </div>
            
            <div className="flex items-center">
              <span>{formatDistanceToMetric(trail.length)}</span>
            </div>
          </div>
          
          {trail.vehicleRequirements && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white mb-4 text-sm max-w-lg">
              <span className="font-bold">Vehicle Requirements:</span> {trail.vehicleRequirements}
            </div>
          )}
          
          <p className="mb-6 max-w-2xl text-white/90">{trail.description.substring(0, 150)}...</p>
          
          <Link to={`/trail/${trail.id}`}>
            <Button className="bg-sunset hover:bg-sunset/90 text-white">
              Explore Trail
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTrail;
