
export const formatDuration = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return `${hours} hr`;
  }
  
  return `${hours} hr ${remainingMinutes} min`;
};

export const formatDistanceToMetric = (kilometers: number): string => {
  return `${kilometers.toFixed(1)} km`;
};

export const formatElevation = (meters: number): string => {
  return `${meters} m`;
};

export const formatRating = (rating: number): string => {
  return rating.toFixed(1);
};
