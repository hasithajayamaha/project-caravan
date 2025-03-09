
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Car } from 'lucide-react';

interface VehicleRequirementsProps {
  requirements: string;
}

const VehicleRequirements = ({ requirements }: VehicleRequirementsProps) => {
  if (!requirements) return null;
  
  return (
    <Card className="bg-forest/5 border-forest/10">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Car className="h-5 w-5 text-forest" />
          Vehicle Requirements
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{requirements}</p>
      </CardContent>
    </Card>
  );
};

export default VehicleRequirements;
