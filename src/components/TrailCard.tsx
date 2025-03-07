
import { Link } from 'react-router-dom';
import { MapPin, Star, Clock, ArrowRight } from 'lucide-react';
import { Trail } from '@/data/trails';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { formatDuration } from '@/lib/format';

interface TrailCardProps {
  trail: Trail;
  featured?: boolean;
}

export const TrailCard = ({ trail, featured = false }: TrailCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-500 hover:bg-green-600';
      case 'moderate':
        return 'bg-sunset hover:bg-sunset-dark';
      case 'hard':
        return 'bg-red-500 hover:bg-red-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <div className={`trail-card ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <div className="relative h-full">
        <img 
          src={trail.imageUrl} 
          alt={trail.name} 
          className={`trail-card-image ${featured ? 'md:h-80' : 'h-48'}`}
        />
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Badge className={`${getDifficultyColor(trail.difficulty)}`}>
                {trail.difficulty.charAt(0).toUpperCase() + trail.difficulty.slice(1)}
              </Badge>
              <div className="flex items-center ml-2">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm ml-1">{trail.reviews.rating}</span>
                <span className="text-xs text-muted-foreground ml-1">({trail.reviews.count})</span>
              </div>
            </div>
            <div className="text-sm flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              {formatDuration(trail.duration)}
            </div>
          </div>
          
          <h3 className={`font-bold mb-1 ${featured ? 'text-xl' : 'text-lg'}`}>{trail.name}</h3>
          
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{trail.location}</span>
          </div>
          
          {featured && (
            <p className="text-muted-foreground mb-4 line-clamp-2">
              {trail.description}
            </p>
          )}
          
          <div className="flex flex-wrap gap-2 mb-4">
            {trail.tags.slice(0, featured ? 4 : 2).map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-muted text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm font-medium">{trail.length} km</span>
              <span className="mx-2 text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{trail.elevationGain}m gain</span>
            </div>
            <Link to={`/trail/${trail.id}`}>
              <Button size="sm" variant="ghost" className="text-forest hover:text-forest-light">
                View Trail
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailCard;
