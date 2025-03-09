
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Car, Mountain } from 'lucide-react';

interface TrailTypeBadgeProps {
  trailType: 'hiking' | '4x4' | 'mixed';
  className?: string;
}

const TrailTypeBadge = ({ trailType, className }: TrailTypeBadgeProps) => {
  let icon;
  let label;
  let variant: 'default' | 'secondary' | 'outline' = 'default';
  
  switch (trailType) {
    case 'hiking':
      icon = <Mountain className="h-3 w-3 mr-1" />;
      label = "Hiking";
      variant = 'default';
      break;
    case '4x4':
      icon = <Car className="h-3 w-3 mr-1" />;
      label = "4x4";
      variant = 'secondary';
      break;
    case 'mixed':
      icon = (
        <>
          <Mountain className="h-3 w-3" />
          <Car className="h-3 w-3 ml-1" />
        </>
      );
      label = "Mixed";
      variant = 'outline';
      break;
  }
  
  return (
    <Badge 
      variant={variant} 
      className={`flex items-center ${className || ''}`}
    >
      {icon}
      <span>{label}</span>
    </Badge>
  );
};

export default TrailTypeBadge;
