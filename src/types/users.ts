
export type UserRole = 'super_admin' | 'admin' | 'support_staff' | 'service_center_staff' | 'car_owner' | 'customer';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  phoneNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  profileImage?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CarOwner extends User {
  role: 'car_owner';
  bankInformation?: {
    accountNumber: string;
    routingNumber: string;
    bankName: string;
  };
  taxInformation?: {
    taxId: string;
  };
  carsOwned: string[]; // Array of car IDs
}

export interface Customer extends User {
  role: 'customer';
  drivingLicense?: {
    number: string;
    state: string;
    expiryDate: string;
    verified: boolean;
  };
  paymentMethods?: {
    id: string;
    type: 'credit_card' | 'debit_card';
    lastFour: string;
    expiryDate: string;
    isDefault: boolean;
  }[];
  rentalHistory: string[]; // Array of rental IDs
}

export interface StaffUser extends User {
  role: 'super_admin' | 'admin' | 'support_staff' | 'service_center_staff';
  department?: string;
  employeeId?: string;
}
