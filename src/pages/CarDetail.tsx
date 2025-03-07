
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Car, 
  Users, 
  Fuel, 
  Gauge, 
  Info, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import { getCarById } from '@/data/cars';
import { formatCurrency, formatDate } from '@/lib/format';

const CarDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const car = getCarById(id || '');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!car) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Car Not Found</h2>
          <p className="mb-6">The car you're looking for doesn't exist or has been removed.</p>
          <Link to="/cars">
            <Button>Browse All Cars</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? car.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => 
      prev === car.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleBooking = () => {
    navigate(`/booking/${car.id}`);
  };

  return (
    <Layout>
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-2">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/cars">Cars</Link>
          <span>/</span>
          <span className="text-gray-700">{car.make} {car.model}</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold">{car.title}</h1>
        
        <div className="flex items-center mt-2 text-gray-600">
          <MapPin size={18} className="mr-1" />
          <span>{car.location}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          {/* Car Image Gallery */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-6">
            <img
              src={car.images[currentImageIndex]}
              alt={car.title}
              className="w-full object-cover h-[400px]"
            />
            
            {car.images.length > 1 && (
              <>
                <button 
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                  onClick={handlePrevImage}
                >
                  <ArrowRight size={20} className="rotate-180" />
                </button>
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                  onClick={handleNextImage}
                >
                  <ArrowRight size={20} />
                </button>
              </>
            )}
            
            <Badge 
              className={
                car.rentalType === 'short' 
                  ? 'pricing-badge-short absolute top-4 right-4' 
                  : 'pricing-badge-long absolute top-4 right-4'
              }
            >
              {car.rentalType === 'short' ? 'Short Term' : 'Long Term'}
            </Badge>
          </div>
          
          {/* Thumbnail Gallery */}
          {car.images.length > 1 && (
            <div className="grid grid-cols-5 gap-2 mb-8">
              {car.images.map((image, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer rounded-md overflow-hidden border-2 ${
                    index === currentImageIndex ? 'border-primary' : 'border-transparent'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img 
                    src={image} 
                    alt={`${car.title} - Image ${index + 1}`} 
                    className="h-16 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
          
          {/* Car Description */}
          <div className="bg-white p-6 rounded-lg border mb-8">
            <h2 className="text-2xl font-bold mb-4">About This Car</h2>
            <p className="text-gray-700 mb-6">
              {car.description}
            </p>
            
            <h3 className="text-xl font-bold mb-3">Features & Specifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Car size={20} className="text-gray-500" />
                <span>{car.make} {car.model}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-gray-500" />
                <span>{car.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Info size={20} className="text-gray-500" />
                <span>{car.transmission}</span>
              </div>
              <div className="flex items-center gap-2">
                <Fuel size={20} className="text-gray-500" />
                <span>{car.fuelType}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-gray-500" />
                <span>{car.seats} Seats</span>
              </div>
              <div className="flex items-center gap-2">
                <Gauge size={20} className="text-gray-500" />
                <span>{car.mileage.toLocaleString()} miles</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3">Additional Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {car.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Availability */}
          <div className="bg-white p-6 rounded-lg border mb-8">
            <h2 className="text-2xl font-bold mb-4">Availability</h2>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 text-lg">
              <div>
                <span className="text-gray-600 mr-2">From:</span>
                <span className="font-semibold">{formatDate(car.availableFrom)}</span>
              </div>
              <div>
                <span className="text-gray-600 mr-2">To:</span>
                <span className="font-semibold">{formatDate(car.availableTo)}</span>
              </div>
              <div>
                <span className="text-gray-600 mr-2">Minimum rental:</span>
                <span className="font-semibold">
                  {car.minimumRental} {car.minimumRental === 1 ? 'day' : 'days'}
                </span>
              </div>
            </div>
          </div>
          
          {/* Rental Policies */}
          <div className="bg-white p-6 rounded-lg border">
            <h2 className="text-2xl font-bold mb-4">Rental Policies</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">Minimum Rental Period</h4>
                <p>
                  {car.rentalType === 'short' 
                    ? 'Minimum 2 weeks rental period.' 
                    : 'Preferred minimum 3 months rental period.'}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Security Deposit</h4>
                <p>$500 refundable security deposit required at booking.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Delivery Options</h4>
                <p>Free self-pickup or delivery for an additional fee based on distance and time of day.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Maintenance</h4>
                <p>All maintenance is handled by our service center and costs are billed to the car owner.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          {/* Booking Card */}
          <div className="bg-white p-6 rounded-lg border sticky top-24">
            <h3 className="text-xl font-bold mb-4">Rental Pricing</h3>
            
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Monthly Rate</span>
              <span className="text-xl font-bold">{formatCurrency(car.pricePerMonth)}</span>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Weekly Rate</span>
              <span className="text-xl font-bold">{formatCurrency(car.pricePerWeek)}</span>
            </div>
            
            <div className="border-t border-gray-200 my-4 pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Security Deposit</span>
                <span className="font-semibold">{formatCurrency(500)}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">Fully refundable upon return</p>
            </div>
            
            <Button 
              className="w-full mb-4" 
              size="lg"
              onClick={handleBooking}
            >
              Book Now
            </Button>
            
            <div className="text-center text-sm text-gray-500">
              No charge to book. Pay only when your rental is confirmed.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CarDetail;
