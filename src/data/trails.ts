
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
  trailType: 'hiking' | '4x4' | 'mixed';
  vehicleRequirements?: string; // Only for 4x4 or mixed trails
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
    },
    trailType: "hiking"
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
    },
    trailType: "hiking"
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
    },
    trailType: "hiking"
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
    },
    trailType: "hiking"
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
    },
    trailType: "hiking"
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
    },
    trailType: "hiking"
  },
  // Adding 4x4 trails
  {
    id: 7,
    name: "Rubicon Trail",
    location: "Lake Tahoe, California",
    difficulty: "hard",
    length: 35.4,
    duration: 1440, // 24 hours (often multi-day)
    elevationGain: 950,
    imageUrl: "https://images.unsplash.com/photo-1532339742492-4a351bef6a8f?q=80&w=1470&auto=format",
    description: "One of the most famous 4x4 trails in the world, the Rubicon offers extreme off-road driving through granite obstacles, steep climbs, and breathtaking Sierra Nevada views. Best tackled with a modified vehicle and experienced drivers.",
    featured: true,
    coordinates: {
      lat: 39.0016,
      lng: -120.1554
    },
    tags: ["rock-crawling", "4x4", "extreme", "scenic", "granite"],
    reviews: {
      rating: 4.9,
      count: 215
    },
    trailType: "4x4",
    vehicleRequirements: "High clearance 4x4 with lockers recommended. 33-inch+ tires advised."
  },
  {
    id: 8,
    name: "Moab Rim Trail",
    location: "Moab, Utah",
    difficulty: "hard",
    length: 12.8,
    duration: 360, // 6 hours
    elevationGain: 670,
    imageUrl: "https://images.unsplash.com/photo-1533094602887-f5c1c41b0335?q=80&w=1490&auto=format",
    description: "This challenging trail climbs the cliff west of Moab, offering spectacular views of the Colorado River and the La Sal Mountains. Features steep slickrock climbs, ledges, and technical sections requiring skilled driving.",
    featured: false,
    coordinates: {
      lat: 38.5636,
      lng: -109.5856
    },
    tags: ["slickrock", "ledges", "4x4", "views", "technical"],
    reviews: {
      rating: 4.7,
      count: 183
    },
    trailType: "4x4",
    vehicleRequirements: "High clearance 4x4, lockers, and 33-inch+ tires recommended."
  },
  {
    id: 9,
    name: "Alpine Loop Scenic Byway",
    location: "San Juan Mountains, Colorado",
    difficulty: "moderate",
    length: 105.0,
    duration: 480, // 8 hours
    elevationGain: 1200,
    imageUrl: "https://images.unsplash.com/photo-1553521419-dfe32bf34d3f?q=80&w=1480&auto=format",
    description: "This stunning backcountry loop passes through historic mining towns, alpine tundra, and offers panoramic mountain views. The trail crosses several high-mountain passes and follows crystalline streams.",
    featured: true,
    coordinates: {
      lat: 37.8742,
      lng: -107.7324
    },
    tags: ["scenic", "4x4", "historic", "mountain-views", "waterfalls"],
    reviews: {
      rating: 4.8,
      count: 267
    },
    trailType: "4x4",
    vehicleRequirements: "High clearance 4x4 vehicle required. Stock SUVs with 4WD can complete in good conditions."
  },
  {
    id: 10,
    name: "Black Bear Pass",
    location: "Telluride, Colorado",
    difficulty: "hard",
    length: 12.6,
    duration: 300, // 5 hours
    elevationGain: 880,
    imageUrl: "https://images.unsplash.com/photo-1597698481337-5732d5ccf7e6?q=80&w=1590&auto=format",
    description: "Infamous for its challenging switchbacks and exposure, this one-way trail descends from Black Bear Pass (12,840 ft) into Telluride. Features the treacherous 'steps' section with steep drop-offs and spectacular views of Bridal Veil Falls.",
    featured: false,
    coordinates: {
      lat: 37.9111,
      lng: -107.7678
    },
    tags: ["extreme", "4x4", "switchbacks", "exposure", "waterfall-views"],
    reviews: {
      rating: 4.9,
      count: 156
    },
    trailType: "4x4",
    vehicleRequirements: "Very high clearance 4x4 with lockers and experienced driver required. Not recommended for full-size vehicles."
  },
  {
    id: 11,
    name: "White Rim Trail",
    location: "Canyonlands National Park, Utah",
    difficulty: "moderate",
    length: 160.0,
    duration: 2880, // 48 hours (typically 2-4 days)
    elevationGain: 1350,
    imageUrl: "https://images.unsplash.com/photo-1573153613052-ce103d051399?q=80&w=1470&auto=format",
    description: "This iconic multi-day trail loops around and below the Island in the Sky mesa top, offering unparalleled views of Canyonlands' magnificent landscape. Features mild technical challenges, water crossings, and remote camping opportunities.",
    featured: true,
    coordinates: {
      lat: 38.4588,
      lng: -109.8265
    },
    tags: ["desert", "4x4", "multi-day", "canyon-views", "camping"],
    reviews: {
      rating: 4.9,
      count: 224
    },
    trailType: "4x4",
    vehicleRequirements: "High clearance 4x4 required. Permits needed for overnight trips."
  },
  {
    id: 12,
    name: "Skull Valley Trail",
    location: "Prescott National Forest, Arizona",
    difficulty: "easy",
    length: 22.5,
    duration: 180, // 3 hours
    elevationGain: 310,
    imageUrl: "https://images.unsplash.com/photo-1660606644579-8e62db2f3026?q=80&w=1470&auto=format",
    description: "A beginner-friendly 4x4 trail through scenic desert landscapes and pine forests. Features mild obstacles, creek crossings when wet, and beautiful vistas of the surrounding valleys and mountains.",
    featured: false,
    coordinates: {
      lat: 34.5283,
      lng: -112.5795
    },
    tags: ["beginner", "4x4", "desert", "scenic", "forest"],
    reviews: {
      rating: 4.4,
      count: 127
    },
    trailType: "4x4",
    vehicleRequirements: "AWD or 4x4 vehicle recommended. Most stock SUVs can complete this trail."
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

export const getTrailsByType = (trailType: 'hiking' | '4x4' | 'mixed'): Trail[] => {
  return trails.filter(trail => trail.trailType === trailType);
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
