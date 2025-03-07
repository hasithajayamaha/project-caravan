
import React, { useState } from 'react';
import { Filter, SlidersHorizontal, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Layout from '@/components/Layout';
import CarCard from '@/components/CarCard';
import { cars } from '@/data/cars';

const CarListings = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    rentalType: '',
    priceRange: '',
    carTypes: [] as string[],
    locations: [] as string[]
  });
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique car types and locations for filters
  const carTypes = Array.from(new Set(cars.map(car => car.carType)));
  const locations = Array.from(new Set(cars.map(car => car.location.split(',')[0].trim())));

  // Filter cars based on search and filters
  const filteredCars = cars.filter(car => {
    const matchesSearch = 
      car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRentalType = !filters.rentalType || 
      (filters.rentalType === 'short' && car.rentalType === 'short') ||
      (filters.rentalType === 'long' && car.rentalType === 'long');
    
    const matchesPriceRange = !filters.priceRange || 
      (filters.priceRange === 'under1000' && car.pricePerMonth < 1000) ||
      (filters.priceRange === '1000to1500' && car.pricePerMonth >= 1000 && car.pricePerMonth <= 1500) ||
      (filters.priceRange === '1500to2000' && car.pricePerMonth >= 1500 && car.pricePerMonth <= 2000) ||
      (filters.priceRange === 'over2000' && car.pricePerMonth > 2000);
    
    const matchesCarType = filters.carTypes.length === 0 || 
      filters.carTypes.includes(car.carType);
    
    const matchesLocation = filters.locations.length === 0 || 
      filters.locations.some(loc => car.location.includes(loc));
    
    return matchesSearch && matchesRentalType && matchesPriceRange && matchesCarType && matchesLocation;
  });

  const toggleCarTypeFilter = (carType: string) => {
    setFilters(prev => {
      const carTypes = prev.carTypes.includes(carType)
        ? prev.carTypes.filter(ct => ct !== carType)
        : [...prev.carTypes, carType];
      
      return { ...prev, carTypes };
    });
  };

  const toggleLocationFilter = (location: string) => {
    setFilters(prev => {
      const locations = prev.locations.includes(location)
        ? prev.locations.filter(loc => loc !== location)
        : [...prev.locations, location];
      
      return { ...prev, locations };
    });
  };

  const clearFilters = () => {
    setFilters({
      rentalType: '',
      priceRange: '',
      carTypes: [],
      locations: []
    });
  };

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Browse Our Vehicles</h1>
        <p className="text-xl text-gray-600">
          Discover our selection of quality cars available for long-term rental
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* Search and Filter Toggle (Mobile) */}
        <div className="flex flex-col gap-4 w-full lg:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for cars..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button 
            variant="outline"
            className="flex items-center justify-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>

        {/* Filters Section (Desktop or Mobile when toggled) */}
        <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold flex items-center">
                <SlidersHorizontal size={18} className="mr-2" />
                Filters
              </h3>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear All
              </Button>
            </div>

            <div className="space-y-6">
              {/* Rental Type Filter */}
              <div>
                <h4 className="font-semibold mb-3">Rental Type</h4>
                <Select 
                  value={filters.rentalType} 
                  onValueChange={(value) => setFilters({...filters, rentalType: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Types</SelectItem>
                    <SelectItem value="short">Short Term (2 weeks - 3 months)</SelectItem>
                    <SelectItem value="long">Long Term (3+ months)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range Filter */}
              <div>
                <h4 className="font-semibold mb-3">Monthly Price Range</h4>
                <Select 
                  value={filters.priceRange} 
                  onValueChange={(value) => setFilters({...filters, priceRange: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Any Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any Price</SelectItem>
                    <SelectItem value="under1000">Under $1,000</SelectItem>
                    <SelectItem value="1000to1500">$1,000 - $1,500</SelectItem>
                    <SelectItem value="1500to2000">$1,500 - $2,000</SelectItem>
                    <SelectItem value="over2000">Over $2,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Car Type Filter */}
              <div>
                <h4 className="font-semibold mb-3">Car Type</h4>
                <div className="space-y-2">
                  {carTypes.map((carType) => (
                    <div key={carType} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`car-type-${carType}`} 
                        checked={filters.carTypes.includes(carType)}
                        onCheckedChange={() => toggleCarTypeFilter(carType)}
                      />
                      <label htmlFor={`car-type-${carType}`} className="text-sm">
                        {carType}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <h4 className="font-semibold mb-3">Location</h4>
                <div className="space-y-2">
                  {locations.map((location) => (
                    <div key={location} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`location-${location}`} 
                        checked={filters.locations.includes(location)}
                        onCheckedChange={() => toggleLocationFilter(location)}
                      />
                      <label htmlFor={`location-${location}`} className="text-sm">
                        {location}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-3/4">
          {/* Search Bar (Desktop) */}
          <div className="hidden lg:block relative mb-6">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for cars, locations, or features..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Results Count */}
          <p className="text-gray-600 mb-6">{filteredCars.length} vehicles found</p>

          {/* Car Listings Grid */}
          {filteredCars.length > 0 ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCars.map(car => (
                <CarCard 
                  key={car.id}
                  id={car.id}
                  title={car.title}
                  image={car.image}
                  location={car.location}
                  pricePerMonth={car.pricePerMonth}
                  pricePerWeek={car.pricePerWeek}
                  carType={car.carType}
                  year={car.year}
                  availability={`From ${new Date(car.availableFrom).toLocaleDateString()}`}
                  rentalType={car.rentalType}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">No cars match your search</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CarListings;
