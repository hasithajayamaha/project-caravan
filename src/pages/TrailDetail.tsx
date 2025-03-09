
import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Clock, Mountain, ArrowLeft, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { getTrailById } from '@/data/trails';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrailCard from '@/components/TrailCard';
import TrailTypeBadge from '@/components/TrailTypeBadge';
import VehicleRequirements from '@/components/VehicleRequirements';
import { formatDuration, formatDistanceToMetric, formatElevation, formatRating } from '@/lib/format';

const TrailDetail = () => {
  const { id } = useParams<{ id: string }>();
  const trail = getTrailById(Number(id));
  
  if (!trail) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Trail Not Found</h1>
            <p className="mb-6">Sorry, we couldn't find the trail you're looking for.</p>
            <Link to="/discover">
              <Button>View All Trails</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const difficultyClass = {
    easy: 'difficulty-badge-easy',
    moderate: 'difficulty-badge-moderate',
    hard: 'difficulty-badge-hard'
  }[trail.difficulty];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="relative h-[50vh] min-h-[400px]">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${trail.imageUrl})` }}
          />
          <div className="hero-overlay" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
            <div className="container mx-auto">
              <Link to="/discover" className="inline-flex items-center text-white mb-4 hover:underline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Trails
              </Link>
              
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge className={difficultyClass}>
                  {trail.difficulty.charAt(0).toUpperCase() + trail.difficulty.slice(1)}
                </Badge>
                <TrailTypeBadge trailType={trail.trailType} className="bg-white/20 backdrop-blur-sm" />
              </div>
              
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-2">{trail.name}</h1>
              
              <div className="flex items-center text-white/90 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-lg">{trail.location}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-black/20 rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Trail Description</h2>
                <p className="mb-6 text-muted-foreground">{trail.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center mb-2">
                      <Mountain className="h-5 w-5 text-forest mr-2" />
                      <span className="font-semibold">Elevation</span>
                    </div>
                    <p className="text-xl font-bold">{formatElevation(trail.elevationGain)}</p>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center mb-2">
                      <Clock className="h-5 w-5 text-forest mr-2" />
                      <span className="font-semibold">Duration</span>
                    </div>
                    <p className="text-xl font-bold">{formatDuration(trail.duration)}</p>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-forest mr-2">
                        <path d="M18 6H5L2 9h20l-3-3Z"></path>
                        <path d="M2 9v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9"></path>
                        <path d="M4 14h16"></path>
                      </svg>
                      <span className="font-semibold">Distance</span>
                    </div>
                    <p className="text-xl font-bold">{formatDistanceToMetric(trail.length)}</p>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center mb-2">
                      <Star className="h-5 w-5 text-forest mr-2" />
                      <span className="font-semibold">Rating</span>
                    </div>
                    <p className="text-xl font-bold">{formatRating(trail.reviews.rating)} <span className="text-sm font-normal text-muted-foreground">({trail.reviews.count})</span></p>
                  </div>
                </div>
                
                <Button className="bg-forest hover:bg-forest-light text-white w-full sm:w-auto">
                  Start Navigation
                </Button>
              </div>
              
              {trail.vehicleRequirements && (
                <div className="mb-8">
                  <VehicleRequirements requirements={trail.vehicleRequirements} />
                </div>
              )}
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Trail Map</h2>
                <Card>
                  <CardContent className="p-0">
                    <div className="relative h-[400px] bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Trail map coming soon</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Weather</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center text-muted-foreground">
                    <p>Weather information coming soon</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Trail Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {trail.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="capitalize">
                        {tag.replace(/-/g, ' ')}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Share This Trail</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TrailDetail;
