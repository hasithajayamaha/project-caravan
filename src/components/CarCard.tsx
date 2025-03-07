
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Car } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency } from '@/lib/format';

interface CarCardProps {
  id: string;
  title: string;
  image: string;
  location: string;
  pricePerMonth: number;
  pricePerWeek: number;
  carType: string;
  year: number;
  availability: string;
  rentalType: 'short' | 'long';
}

const CarCard: React.FC<CarCardProps> = ({
  id,
  title,
  image,
  location,
  pricePerMonth,
  pricePerWeek,
  carType,
  year,
  availability,
  rentalType
}) => {
  return (
    <div className="car-card bg-white overflow-hidden">
      <div className="relative">
        <img
          src={image || 'https://via.placeholder.com/600x400?text=Car+Image'}
          alt={title}
          className="car-card-image"
        />
        <Badge 
          className={rentalType === 'short' ? 'pricing-badge-short absolute top-2 right-2' : 'pricing-badge-long absolute top-2 right-2'}
        >
          {rentalType === 'short' ? 'Short Term' : 'Long Term'}
        </Badge>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold line-clamp-1">{title}</h3>
        
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <MapPin size={16} className="mr-1" />
          <span className="line-clamp-1">{location}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Car size={16} className="mr-1" />
          <span>{carType} • {year}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Calendar size={16} className="mr-1" />
          <span>Available: {availability}</span>
        </div>
        
        <div className="mt-4 flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Monthly</p>
              <p className="text-xl font-bold">{formatCurrency(pricePerMonth)}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Weekly</p>
              <p className="text-xl font-bold">{formatCurrency(pricePerWeek)}</p>
            </div>
          </div>
          
          <Link to={`/car/${id}`} className="mt-4 w-full">
            <Button className="w-full">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
