
import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, ArrowLeft, Clock, TrendingUp, Map, Download, Share2, Bookmark, ThumbsUp, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getTrailById, Trail, trails } from '@/data/trails';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrailCard from '@/components/TrailCard';
import { formatDuration, formatDistanceToMetric, formatElevation } from '@/lib/format';

const TrailDetail = () => {
  const { id } = useParams<{ id: string }>();
  const trail = getTrailById(id ? parseInt(id) : 0);
  
  if (!trail) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Trail Not Found</h2>
            <p className="mb-4">We couldn't find the trail you're looking for.</p>
            <Button asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
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
  
  const relatedTrails = trails
    .filter(t => t.id !== trail.id)
    .slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${trail.imageUrl})` }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8">
            <Link to="/" className="relative z-10 text-white mb-4 inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Trails
            </Link>
            <div className="relative z-10 text-white">
              <div className="flex items-center space-x-3 mb-3">
                <Badge className={`${getDifficultyColor(trail.difficulty)}`}>
                  {trail.difficulty.charAt(0).toUpperCase() + trail.difficulty.slice(1)}
                </Badge>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm ml-1">{trail.reviews.rating}</span>
                  <span className="text-xs text-stone-light ml-1">({trail.reviews.count} reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-2">{trail.name}</h1>
              <div className="flex items-center text-stone-light">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{trail.location}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trail Stats */}
        <div className="bg-background shadow-sm border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 py-4">
              <div className="p-4 flex flex-col items-center border-r">
                <span className="text-sm text-muted-foreground">Length</span>
                <span className="text-xl font-bold">{formatDistanceToMetric(trail.length)}</span>
              </div>
              <div className="p-4 flex flex-col items-center md:border-r">
                <span className="text-sm text-muted-foreground">Duration</span>
                <span className="text-xl font-bold">{formatDuration(trail.duration)}</span>
              </div>
              <div className="p-4 flex flex-col items-center border-r">
                <span className="text-sm text-muted-foreground">Elevation Gain</span>
                <span className="text-xl font-bold">{formatElevation(trail.elevationGain)}</span>
              </div>
              <div className="p-4 flex flex-col items-center">
                <span className="text-sm text-muted-foreground">Route Type</span>
                <span className="text-xl font-bold">Loop</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trail Details */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <Tabs defaultValue="overview">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="photos">Photos</TabsTrigger>
                  <TabsTrigger value="directions">Directions</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border">
                    <h2 className="text-2xl font-bold mb-4">Trail Overview</h2>
                    <p className="text-muted-foreground mb-4">{trail.description}</p>
                    <p className="text-muted-foreground mb-4">
                      This trail is best used from April through October. During winter months, snow may cover parts of the trail, making navigation difficult. Always check weather conditions before heading out.
                    </p>
                    
                    <h3 className="text-xl font-bold mt-6 mb-3">Features</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {trail.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="bg-muted text-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold mt-6 mb-3">Trail Map</h3>
                    <div className="bg-muted h-[300px] rounded-lg flex items-center justify-center mb-4">
                      <Map className="h-8 w-8 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">Interactive map view</span>
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button className="bg-forest hover:bg-forest-light">
                        <Map className="mr-2 h-4 w-4" />
                        View Fullscreen
                      </Button>
                      <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download GPX
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border">
                    <h2 className="text-2xl font-bold mb-4">Getting There</h2>
                    <p className="text-muted-foreground mb-4">
                      The trailhead is located at the north entrance of the park. There's a parking lot available with facilities, including restrooms and a water fountain. The parking fee is $5 per vehicle.
                    </p>
                    <Button>Get Directions</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews">
                  <div className="bg-white p-6 rounded-lg border">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold">Reviews & Ratings</h2>
                      <Button>Write a Review</Button>
                    </div>
                    
                    <div className="flex items-center mb-8">
                      <div className="text-4xl font-bold mr-4">{trail.reviews.rating}</div>
                      <div>
                        <div className="flex mb-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`h-5 w-5 ${star <= Math.round(trail.reviews.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                            />
                          ))}
                        </div>
                        <div className="text-sm text-muted-foreground">Based on {trail.reviews.count} reviews</div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Sample reviews - in a real app, these would come from a database */}
                      <div className="border-b pb-6">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-bold">Jennifer M.</h4>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star} 
                                className={`h-4 w-4 ${star <= 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">Hiked on June 12, 2023</div>
                        <p>Absolutely stunning views! The trail was well-maintained and clearly marked. Saw plenty of wildlife and the alpine meadows were in full bloom. Highly recommend for anyone looking for a moderate challenge with rewarding scenery.</p>
                        <div className="flex mt-3 text-sm text-muted-foreground">
                          <button className="flex items-center mr-4">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            Helpful (24)
                          </button>
                          <button className="flex items-center">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Reply
                          </button>
                        </div>
                      </div>
                      
                      <div className="border-b pb-6">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-bold">Marcus T.</h4>
                          <div className="flex">
                            {[1, 2, 3, 4].map((star) => (
                              <Star 
                                key={star} 
                                className={`h-4 w-4 ${star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">Hiked on May 28, 2023</div>
                        <p>Great trail with beautiful scenery. Lost one star because parts of the trail were muddy and slippery after recent rain. Would recommend proper hiking boots, especially for the steeper sections.</p>
                        <div className="flex mt-3 text-sm text-muted-foreground">
                          <button className="flex items-center mr-4">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            Helpful (16)
                          </button>
                          <button className="flex items-center">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Reply
                          </button>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full">Load More Reviews</Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="photos">
                  <div className="bg-white p-6 rounded-lg border">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold">Trail Photos</h2>
                      <Button>Upload Photos</Button>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <img src={trail.imageUrl} alt="Trail view" className="rounded-lg aspect-square object-cover" />
                      <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1470&auto=format" alt="Trail view" className="rounded-lg aspect-square object-cover" />
                      <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1470&auto=format" alt="Trail view" className="rounded-lg aspect-square object-cover" />
                      <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1476&auto=format" alt="Trail view" className="rounded-lg aspect-square object-cover" />
                      <img src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?q=80&w=1470&auto=format" alt="Trail view" className="rounded-lg aspect-square object-cover" />
                      <div className="rounded-lg aspect-square bg-muted flex items-center justify-center">
                        <Button variant="ghost">View All Photos</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="directions">
                  <div className="bg-white p-6 rounded-lg border">
                    <h2 className="text-2xl font-bold mb-4">Directions to Trailhead</h2>
                    <div className="bg-muted h-[300px] rounded-lg flex items-center justify-center mb-6">
                      <Map className="h-8 w-8 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">Interactive directions map</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">Address</h3>
                    <p className="text-muted-foreground mb-6">
                      {trail.name} Trailhead<br />
                      {trail.location}
                    </p>
                    
                    <h3 className="text-xl font-bold mb-3">Driving Directions</h3>
                    <p className="text-muted-foreground mb-6">
                      From the park entrance, follow the main road for 2.5 miles until you reach the North Visitor Center. The trailhead parking lot is located behind the visitor center. Follow signs for {trail.name}.
                    </p>
                    
                    <Button className="bg-forest hover:bg-forest-light mr-4">
                      Get Directions
                    </Button>
                    <Button variant="outline">
                      Share Location
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-white p-6 rounded-lg border">
                <div className="flex space-x-2 mb-6">
                  <Button className="flex-1 bg-forest hover:bg-forest-light">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Start Hike
                  </Button>
                  <Button variant="outline" className="w-10 p-0 flex items-center justify-center">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-10 p-0 flex items-center justify-center">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
                
                <h3 className="font-bold mb-3">Best Times to Visit</h3>
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, index) => (
                    <div 
                      key={month} 
                      className={`text-center py-2 rounded ${index >= 3 && index <= 9 ? 'bg-forest/10 text-forest' : 'bg-muted text-muted-foreground'}`}
                    >
                      {month}
                    </div>
                  ))}
                </div>
                
                <h3 className="font-bold mb-3">Weather</h3>
                <div className="bg-muted p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-muted-foreground">Current</div>
                      <div className="text-2xl font-bold">72°F</div>
                    </div>
                    <div className="text-5xl">☀️</div>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">Clear skies, light breeze</div>
                </div>
                
                <h3 className="font-bold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {trail.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-muted">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-bold text-lg mb-4">Similar Trails</h3>
                <div className="space-y-4">
                  {relatedTrails.map(relatedTrail => (
                    <Link 
                      key={relatedTrail.id} 
                      to={`/trail/${relatedTrail.id}`}
                      className="flex items-center border-b pb-4 last:border-0 last:pb-0 hover:bg-muted/50 p-2 rounded-lg -mx-2"
                    >
                      <img 
                        src={relatedTrail.imageUrl} 
                        alt={relatedTrail.name} 
                        className="w-16 h-16 object-cover rounded-md mr-3" 
                      />
                      <div>
                        <h4 className="font-medium">{relatedTrail.name}</h4>
                        <div className="text-sm text-muted-foreground">{formatDistanceToMetric(relatedTrail.length)} • {relatedTrail.difficulty}</div>
                        <div className="flex items-center text-sm">
                          <Star className="h-3 w-3 text-yellow-400 fill-yellow-400 mr-1" />
                          <span>{relatedTrail.reviews.rating}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TrailDetail;
