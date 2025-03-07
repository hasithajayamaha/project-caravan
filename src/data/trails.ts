
export interface Trail {
  id: number;
  name: string;
  location: string;
  difficulty: 'easy' | 'moderate' | 'hard';
  length: number; // in kilometers
  duration: number; // in minutes
  elevationGain: number; // in meters
  imageUrl: string;
  description: string;
  featured: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
  tags: string[];
  reviews: {
    rating: number;
    count: number;
  };
}

export const trails: Trail[] = [
  {
    id: 1,
    name: "Alpine Vista Trail",
    location: "Rocky Mountain National Park, Colorado",
    difficulty: "moderate",
    length: 8.4,
    duration: 240, // 4 hours
    elevationGain: 520,
    imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1470&auto=format",
    description: "This scenic trail offers breathtaking views of alpine meadows and snow-capped peaks. The path winds through dense forests before opening up to panoramic vistas of the entire valley.",
    featured: true,
    coordinates: {
      lat: 40.3428,
      lng: -105.6836
    },
    tags: ["views", "wildlife", "forest", "mountains"],
    reviews: {
      rating: 4.8,
      count: 327
    }
  },
  {
    id: 2,
    name: "Emerald Lake Loop",
    location: "Emerald Bay State Park, California",
    difficulty: "easy",
    length: 4.2,
    duration: 90, // 1.5 hours
    elevationGain: 180,
    imageUrl: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1374&auto=format",
    description: "Perfect for families and beginners, this relatively flat trail circles the pristine Emerald Lake, offering multiple spots for picnics and swimming during summer months.",
    featured: true,
    coordinates: {
      lat: 38.9553,
      lng: -120.1039
    },
    tags: ["family-friendly", "lake", "swimming", "picnic"],
    reviews: {
      rating: 4.6,
      count: 218
    }
  },
  {
    id: 3,
    name: "Canyonlands Rim Trail",
    location: "Canyonlands National Park, Utah",
    difficulty: "hard",
    length: 12.8,
    duration: 360, // 6 hours
    elevationGain: 870,
    imageUrl: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?q=80&w=1374&auto=format",
    description: "This challenging trail follows the rim of a dramatic canyon, with steep sections and rough terrain. The spectacular desert views and unique rock formations make the effort worthwhile.",
    featured: true,
    coordinates: {
      lat: 38.3269,
      lng: -109.8783
    },
    tags: ["desert", "canyon", "views", "challenging"],
    reviews: {
      rating: 4.9,
      count: 156
    }
  },
  {
    id: 4,
    name: "Misty Forest Path",
    location: "Olympic National Park, Washington",
    difficulty: "moderate",
    length: 7.6,
    duration: 210, // 3.5 hours
    elevationGain: 410,
    imageUrl: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1422&auto=format",
    description: "Walk through an enchanting old-growth rainforest with moss-covered trees and the constant sound of nearby streams. The trail occasionally opens up to reveal stunning coastal views.",
    featured: false,
    coordinates: {
      lat: 47.8021,
      lng: -123.6044
    },
    tags: ["rainforest", "waterfalls", "coastal", "streams"],
    reviews: {
      rating: 4.7,
      count: 203
    }
  },
  {
    id: 5,
    name: "Golden Hill Trail",
    location: "Shenandoah National Park, Virginia",
    difficulty: "easy",
    length: 3.2,
    duration: 60, // 1 hour
    elevationGain: 120,
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1374&auto=format",
    description: "This gentle trail meanders through beautiful deciduous forests and open meadows, especially stunning during fall foliage season. Several lookout points provide valley views.",
    featured: false,
    coordinates: {
      lat: 38.2928,
      lng: -78.6795
    },
    tags: ["fall-colors", "family-friendly", "meadows", "views"],
    reviews: {
      rating: 4.5,
      count: 178
    }
  },
  {
    id: 6,
    name: "Coastal Bluff Trail",
    location: "Point Reyes National Seashore, California",
    difficulty: "moderate",
    length: 9.3,
    duration: 270, // 4.5 hours
    elevationGain: 320,
    imageUrl: "https://images.unsplash.com/photo-1559521783-1d1599583485?q=80&w=1470&auto=format",
    description: "This dramatic coastal trail follows rugged cliffs overlooking the Pacific Ocean. Keep your eyes open for whales and seals in the waters below and abundant birdlife on the cliffs.",
    featured: false,
    coordinates: {
      lat: 38.0423,
      lng: -122.9961
    },
    tags: ["coastal", "wildlife", "ocean", "views"],
    reviews: {
      rating: 4.8,
      count: 245
    }
  }
];

export const getTrailById = (id: number): Trail | undefined => {
  return trails.find(trail => trail.id === id);
};

export const getFeaturedTrails = (): Trail[] => {
  return trails.filter(trail => trail.featured);
};

export const getTrailsByDifficulty = (difficulty: 'easy' | 'moderate' | 'hard'): Trail[] => {
  return trails.filter(trail => trail.difficulty === difficulty);
};

export const searchTrails = (query: string): Trail[] => {
  const lowercaseQuery = query.toLowerCase();
  return trails.filter(trail => 
    trail.name.toLowerCase().includes(lowercaseQuery) || 
    trail.location.toLowerCase().includes(lowercaseQuery) || 
    trail.description.toLowerCase().includes(lowercaseQuery) ||
    trail.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
