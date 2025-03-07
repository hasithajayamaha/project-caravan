
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

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const calculateRentalDuration = (startDate: Date, endDate: Date): { weeks: number; months: number; days: number } => {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const millisecondsPerWeek = 7 * millisecondsPerDay;
  const millisecondsPerMonth = 30 * millisecondsPerDay; // Approximation
  
  const durationMs = endDate.getTime() - startDate.getTime();
  
  const months = Math.floor(durationMs / millisecondsPerMonth);
  const remainingAfterMonths = durationMs % millisecondsPerMonth;
  
  const weeks = Math.floor(remainingAfterMonths / millisecondsPerWeek);
  const remainingAfterWeeks = remainingAfterMonths % millisecondsPerWeek;
  
  const days = Math.round(remainingAfterWeeks / millisecondsPerDay);
  
  return { months, weeks, days };
};

export const formatRentalDuration = (startDate: Date, endDate: Date): string => {
  const { months, weeks, days } = calculateRentalDuration(startDate, endDate);
  
  const parts = [];
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
  }
  if (weeks > 0) {
    parts.push(`${weeks} ${weeks === 1 ? 'week' : 'weeks'}`);
  }
  if (days > 0) {
    parts.push(`${days} ${days === 1 ? 'day' : 'days'}`);
  }
  
  return parts.join(', ');
};
