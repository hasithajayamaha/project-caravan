
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, MapPin, Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Sample guide data
const guides = [
  {
    id: 1,
    title: "Essential Hiking Gear for Beginners",
    excerpt: "Starting your hiking journey? Learn about the must-have gear that will keep you safe and comfortable on the trails.",
    image: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?q=80&w=1470&auto=format",
    author: "Sarah Johnson",
    date: "June 15, 2023",
    readTime: "8 min read",
    category: "gear",
    featured: true
  },
  {
    id: 2,
    title: "Hiking Safety: What You Need to Know",
    excerpt: "Stay safe on your adventures with these important hiking safety tips and best practices for all skill levels.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1470&auto=format",
    author: "Michael Chen",
    date: "July 22, 2023",
    readTime: "10 min read",
    category: "safety",
    featured: true
  },
  {
    id: 3,
    title: "Best Hiking Trails for Fall Foliage",
    excerpt: "Discover the most stunning trails to experience vibrant autumn colors across North America.",
    image: "https://images.unsplash.com/photo-1476611317561-60117649dd94?q=80&w=1470&auto=format",
    author: "Emma Wilson",
    date: "September 5, 2023",
    readTime: "6 min read",
    category: "seasons",
    featured: true
  },
  {
    id: 4,
    title: "How to Choose the Perfect Hiking Boots",
    excerpt: "Find the right hiking boots for your feet and adventures with our comprehensive guide.",
    image: "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?q=80&w=1547&auto=format",
    author: "Daniel Park",
    date: "May 10, 2023",
    readTime: "7 min read",
    category: "gear"
  },
  {
    id: 5,
    title: "Wildlife Photography on the Trail",
    excerpt: "Tips and techniques for capturing amazing wildlife photos during your hiking adventures.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format",
    author: "Jessica Martinez",
    date: "August 18, 2023",
    readTime: "9 min read",
    category: "photography"
  },
  {
    id: 6,
    title: "Hiking with Kids: Family-Friendly Trails",
    excerpt: "Introduce your children to the joys of hiking with these family-friendly trail recommendations.",
    image: "https://images.unsplash.com/photo-1535050804459-06db46aac01a?q=80&w=1470&auto=format",
    author: "Robert Thompson",
    date: "April 30, 2023",
    readTime: "5 min read",
    category: "family"
  },
  {
    id: 7,
    title: "Nutrition for Hikers: What to Eat on the Trail",
    excerpt: "Learn about proper nutrition and meal planning to fuel your hikes effectively.",
    image: "https://images.unsplash.com/photo-1502943693086-33b5b1cfdf2f?q=80&w=1470&auto=format",
    author: "Olivia Brown",
    date: "July 5, 2023",
    readTime: "8 min read",
    category: "nutrition"
  },
  {
    id: 8,
    title: "Winter Hiking: Safety and Preparation",
    excerpt: "Essential tips for safe and enjoyable hiking during the winter months.",
    image: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?q=80&w=1470&auto=format",
    author: "Thomas Wright",
    date: "November 15, 2023",
    readTime: "12 min read",
    category: "seasons"
  }
];

const Guides = () => {
  const featuredGuides = guides.filter(guide => guide.featured);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Hiking Guides & Resources</h1>
            <p className="text-xl text-muted-foreground">
              Expert advice, tips, and resources to enhance your hiking experience and keep you safe on the trails.
            </p>
          </div>
          
          {/* Featured Guides */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Featured Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredGuides.map((guide) => (
                <div key={guide.id} className="rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow">
                  <img src={guide.image} alt={guide.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{guide.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{guide.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
                    <p className="text-muted-foreground mb-4">{guide.excerpt}</p>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">By {guide.author}</span>
                    </div>
                    <Button asChild className="mt-4 bg-forest hover:bg-forest-light">
                      <Link to={`/guides/${guide.id}`}>
                        Read Guide
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Categories */}
          <section className="mb-16">
            <Tabs defaultValue="all">
              <div className="border-b mb-8">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="all">All Guides</TabsTrigger>
                  <TabsTrigger value="gear">Gear</TabsTrigger>
                  <TabsTrigger value="safety">Safety</TabsTrigger>
                  <TabsTrigger value="seasons">Seasonal</TabsTrigger>
                  <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                  <TabsTrigger value="family">Family</TabsTrigger>
                  <TabsTrigger value="photography">Photography</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {guides.map((guide) => (
                    <Link 
                      key={guide.id} 
                      to={`/guides/${guide.id}`}
                      className="group flex flex-col border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={guide.image} 
                          alt={guide.title} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="mr-4">{guide.date}</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{guide.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-forest transition-colors">{guide.title}</h3>
                        <p className="text-muted-foreground mb-4 flex-1">{guide.excerpt}</p>
                        <div className="flex items-center mt-auto">
                          <User className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">By {guide.author}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>
              
              {/* We would repeat the same structure for other tabs, filtering guides by category */}
              {['gear', 'safety', 'seasons', 'nutrition', 'family', 'photography'].map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guides
                      .filter(guide => guide.category === category)
                      .map((guide) => (
                        <Link 
                          key={guide.id} 
                          to={`/guides/${guide.id}`}
                          className="group flex flex-col border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                        >
                          <div className="relative h-48 overflow-hidden">
                            <img 
                              src={guide.image} 
                              alt={guide.title} 
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                            />
                          </div>
                          <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center text-sm text-muted-foreground mb-3">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span className="mr-4">{guide.date}</span>
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{guide.readTime}</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 group-hover:text-forest transition-colors">{guide.title}</h3>
                            <p className="text-muted-foreground mb-4 flex-1">{guide.excerpt}</p>
                            <div className="flex items-center mt-auto">
                              <User className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">By {guide.author}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </section>
          
          {/* Newsletter Section */}
          <section className="bg-forest text-white rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Get Expert Hiking Tips</h2>
              <p className="text-stone-light mb-8">
                Subscribe to our newsletter and receive the latest hiking guides, trail recommendations, and outdoor tips directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 w-full rounded-l-lg sm:rounded-r-none mb-2 sm:mb-0 text-foreground"
                />
                <Button className="bg-sunset hover:bg-sunset-light sm:rounded-l-none">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-stone-light mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Guides;
