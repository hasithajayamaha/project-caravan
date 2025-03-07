
export type RentalStatus = 
  | 'pending_approval' 
  | 'approved' 
  | 'active' 
  | 'completed' 
  | 'cancelled' 
  | 'rejected';

export type RentalType = 'short' | 'long';

export interface Rental {
  id: string;
  carId: string;
  customerId: string;
  startDate: string;
  endDate: string;
  status: RentalStatus;
  type: RentalType;
  pricePerMonth: number;
  pricePerWeek: number;
  totalPrice: number;
  depositAmount: number;
  depositPaid: boolean;
  depositRefunded: boolean;
  deliveryOption: 'self_pickup' | 'delivery';
  deliveryAddress?: string;
  deliveryFee?: number;
  deliveryDate?: string;
  deliveryTimeSlot?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface MaintenanceRecord {
  id: string;
  rentalId: string;
  carId: string;
  serviceType: 'routine' | 'repair' | 'emergency';
  description: string;
  scheduledDate: string;
  completedDate?: string;
  cost: number;
  billToOwner: boolean;
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  notes?: string;
  serviceCenterId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Incident {
  id: string;
  rentalId: string;
  reportedBy: string;
  reportedAt: string;
  description: string;
  type: 'accident' | 'breakdown' | 'damage' | 'other';
  status: 'reported' | 'under_review' | 'resolved';
  resolution?: string;
  images?: string[];
  location?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Payment {
  id: string;
  rentalId: string;
  customerId: string;
  amount: number;
  type: 'deposit' | 'rental' | 'delivery' | 'late_fee' | 'damage' | 'refund';
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  paymentMethod: string;
  transactionId?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}
