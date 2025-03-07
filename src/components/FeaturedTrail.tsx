
import { Link } from 'react-router-dom';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Trail } from '@/data/trails';

interface FeaturedTrailProps {
  trail: Trail;
}

const FeaturedTrail = ({ trail }: FeaturedTrailProps) => {
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
    <div className="relative h-[600px] bg-cover bg-center rounded-xl overflow-hidden" style={{ backgroundImage: `url(${trail.imageUrl})` }}>
      <div className="hero-overlay rounded-xl"></div>
      
      <div className="hero-content flex flex-col h-full justify-end p-8">
        <div className="w-full max-w-3xl">
          <div className="flex items-center mb-4 space-x-3">
            <Badge className={`${getDifficultyColor(trail.difficulty)}`}>
              {trail.difficulty.charAt(0).toUpperCase() + trail.difficulty.slice(1)}
            </Badge>
            <div className="flex items-center bg-black/30 px-2 py-1 rounded">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm ml-1 text-white">{trail.reviews.rating}</span>
              <span className="text-xs text-stone-light ml-1">({trail.reviews.count})</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{trail.name}</h1>
          
          <div className="flex items-center mb-4">
            <MapPin className="h-5 w-5 mr-1" />
            <span className="text-lg">{trail.location}</span>
          </div>
          
          <p className="mb-6 max-w-2xl text-stone-light text-lg">{trail.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {trail.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-black/30 border-white/20 text-white">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-forest hover:bg-forest-light">
              <Link to={`/trail/${trail.id}`} className="flex items-center">
                Explore Trail
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Save for Later
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTrail;
