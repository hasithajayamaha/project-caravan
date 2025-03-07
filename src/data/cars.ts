
export interface Car {
  id: string;
  title: string;
  description: string;
  image: string;
  images: string[];
  location: string;
  pricePerMonth: number;
  pricePerWeek: number;
  carType: string;
  make: string;
  model: string;
  year: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid';
  seats: number;
  mileage: number;
  features: string[];
  availableFrom: string;
  availableTo: string;
  ownerId: string;
  rentalType: 'short' | 'long';
  minimumRental: number; // in days
}

export const cars: Car[] = [
  {
    id: '1',
    title: '2023 Tesla Model 3',
    description: 'Sleek electric sedan perfect for city driving and longer trips. Features autopilot, premium sound system, and all-glass roof. The battery range allows for 358 miles on a single charge.',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89',
    images: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89',
      'https://images.unsplash.com/photo-1551737823-deb405ef2b58',
      'https://images.unsplash.com/photo-1553260168-69b041873e65'
    ],
    location: 'Los Angeles, CA',
    pricePerMonth: 1800,
    pricePerWeek: 650,
    carType: 'Sedan',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    transmission: 'Automatic',
    fuelType: 'Electric',
    seats: 5,
    mileage: 5000,
    features: [
      'Autopilot',
      'Premium Sound System',
      'All-Glass Roof',
      'Heated Seats',
      'Keyless Entry'
    ],
    availableFrom: '2023-09-01',
    availableTo: '2024-09-01',
    ownerId: 'user1',
    rentalType: 'long',
    minimumRental: 90 // 3 months
  },
  {
    id: '2',
    title: '2022 Toyota RAV4 Hybrid',
    description: 'Versatile SUV with excellent fuel economy. Perfect for family use and outdoor adventures. Features include blind spot monitoring, lane departure alert, and dynamic radar cruise control.',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb',
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb',
      'https://images.unsplash.com/photo-1604053853100-9c69e355c0ad',
      'https://images.unsplash.com/photo-1633933047524-b11da0384249'
    ],
    location: 'Portland, OR',
    pricePerMonth: 1400,
    pricePerWeek: 500,
    carType: 'SUV',
    make: 'Toyota',
    model: 'RAV4 Hybrid',
    year: 2022,
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    seats: 5,
    mileage: 12000,
    features: [
      'Blind Spot Monitoring',
      'Lane Departure Alert',
      'Dynamic Radar Cruise Control',
      'Apple CarPlay',
      'Android Auto'
    ],
    availableFrom: '2023-08-15',
    availableTo: '2024-08-15',
    ownerId: 'user2',
    rentalType: 'long',
    minimumRental: 90 // 3 months
  },
  {
    id: '3',
    title: '2021 BMW 5 Series',
    description: 'Luxury sedan with premium features and powerful performance. Enjoy leather seats, premium sound system, and advanced driver assistance features.',
    image: 'https://images.unsplash.com/photo-1607853554439-0069ec0f29b6',
    images: [
      'https://images.unsplash.com/photo-1607853554439-0069ec0f29b6',
      'https://images.unsplash.com/photo-1520031441872-265e4ff70366',
      'https://images.unsplash.com/photo-1506626252811-70f036b62936'
    ],
    location: 'Miami, FL',
    pricePerMonth: 2200,
    pricePerWeek: 800,
    carType: 'Luxury Sedan',
    make: 'BMW',
    model: '5 Series',
    year: 2021,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    seats: 5,
    mileage: 18000,
    features: [
      'Leather Seats',
      'Premium Sound System',
      'Parking Assistant',
      'Heated & Ventilated Seats',
      'Wireless Charging'
    ],
    availableFrom: '2023-07-01',
    availableTo: '2024-07-01',
    ownerId: 'user3',
    rentalType: 'short',
    minimumRental: 14 // 2 weeks
  },
  {
    id: '4',
    title: '2022 Volkswagen ID.4',
    description: 'Modern electric SUV with impressive range and spacious interior. Features include panoramic glass roof, ID.Light interactive system, and IQ.DRIVE driver assistance.',
    image: 'https://images.unsplash.com/photo-1626072778346-0ab6604d39c4',
    images: [
      'https://images.unsplash.com/photo-1626072778346-0ab6604d39c4',
      'https://images.unsplash.com/photo-1625947966729-3ece00ea9858',
      'https://images.unsplash.com/photo-1625947966537-a6b8c367eaab'
    ],
    location: 'Austin, TX',
    pricePerMonth: 1600,
    pricePerWeek: 580,
    carType: 'Electric SUV',
    make: 'Volkswagen',
    model: 'ID.4',
    year: 2022,
    transmission: 'Automatic',
    fuelType: 'Electric',
    seats: 5,
    mileage: 9000,
    features: [
      'Panoramic Glass Roof',
      'ID.Light',
      'IQ.DRIVE Driver Assistance',
      'Heated Front Seats',
      'Wireless App-Connect'
    ],
    availableFrom: '2023-09-15',
    availableTo: '2024-09-15',
    ownerId: 'user4',
    rentalType: 'long',
    minimumRental: 90 // 3 months
  },
  {
    id: '5',
    title: '2021 Honda Civic',
    description: 'Reliable and fuel-efficient compact sedan. Great for daily commuting and city driving. Features include backup camera, Apple CarPlay, and Honda Sensing safety suite.',
    image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b',
    images: [
      'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b',
      'https://images.unsplash.com/photo-1550355291-bbee04a92027',
      'https://images.unsplash.com/photo-1551830820-330a71b99659'
    ],
    location: 'Chicago, IL',
    pricePerMonth: 1000,
    pricePerWeek: 360,
    carType: 'Sedan',
    make: 'Honda',
    model: 'Civic',
    year: 2021,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    seats: 5,
    mileage: 22000,
    features: [
      'Backup Camera',
      'Apple CarPlay',
      'Android Auto',
      'Honda Sensing',
      'Bluetooth'
    ],
    availableFrom: '2023-08-01',
    availableTo: '2024-08-01',
    ownerId: 'user5',
    rentalType: 'short',
    minimumRental: 14 // 2 weeks
  },
  {
    id: '6',
    title: '2022 Mercedes-Benz GLC',
    description: 'Premium compact SUV with elegant design and cutting-edge technology. Features include MBUX infotainment system, 360-degree camera, and driver assistance package.',
    image: 'https://images.unsplash.com/photo-1583267746897-2cf415887172',
    images: [
      'https://images.unsplash.com/photo-1583267746897-2cf415887172',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      'https://images.unsplash.com/photo-1575650772417-e6b418b0d106'
    ],
    location: 'New York, NY',
    pricePerMonth: 2400,
    pricePerWeek: 880,
    carType: 'Luxury SUV',
    make: 'Mercedes-Benz',
    model: 'GLC',
    year: 2022,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    seats: 5,
    mileage: 14000,
    features: [
      'MBUX Infotainment',
      '360-Degree Camera',
      'Driver Assistance Package',
      'Heated Seats',
      'Burmester Sound System'
    ],
    availableFrom: '2023-09-01',
    availableTo: '2024-09-01',
    ownerId: 'user6',
    rentalType: 'long',
    minimumRental: 90 // 3 months
  }
];

export const getCarById = (id: string): Car | undefined => {
  return cars.find(car => car.id === id);
};

export const filterCars = (filters: {
  rentalType?: 'short' | 'long';
  priceMin?: number;
  priceMax?: number;
  carType?: string;
  location?: string;
}): Car[] => {
  return cars.filter(car => {
    if (filters.rentalType && car.rentalType !== filters.rentalType) {
      return false;
    }
    
    if (filters.priceMin && car.pricePerMonth < filters.priceMin) {
      return false;
    }
    
    if (filters.priceMax && car.pricePerMonth > filters.priceMax) {
      return false;
    }
    
    if (filters.carType && car.carType !== filters.carType) {
      return false;
    }
    
    if (filters.location && !car.location.includes(filters.location)) {
      return false;
    }
    
    return true;
  });
};
