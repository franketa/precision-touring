// Core application types

export interface User {
  id: string;
  email: string;
  name?: string;
  role: 'admin' | 'customer';
  created_at: string;
}

export interface Tour {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  status: 'planning' | 'active' | 'completed';
  total_cost?: number;
  currency: string;
  stops?: TourStop[];
  mileage?: TourMileage[];
  costs?: TourCost[];
}

export interface TourStop {
  id: string;
  tour_id: string;
  city: string;
  state: string;
  venue?: string;
  arrival_date: string;
  departure_date?: string;
  created_at: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface TourMileage {
  id: string;
  tour_id: string;
  from_stop_id: string;
  to_stop_id: string;
  distance: number;
  duration: number;
  route_data?: any;
  created_at: string;
}

export interface TourCost {
  id: string;
  tour_id: string;
  category: CostCategory;
  description: string;
  amount: number;
  per_mile?: boolean;
  per_day?: boolean;
  created_at: string;
}

export type CostCategory = 
  | 'vehicle'
  | 'fuel'
  | 'driver'
  | 'hotel'
  | 'per_diem'
  | 'overdrive'
  | 'misc';

export interface DieselPrice {
  price: number;
  date: string;
  region: string;
}

export interface RouteCalculation {
  distance: number;
  duration: number;
  route: string;
  toll_cost?: number;
}

export interface AITourPlan {
  stops: Array<{
    city: string;
    state: string;
    date: string;
    venue?: string;
  }>;
  recommendations: string[];
  estimated_cost?: number;
  total_mileage?: number;
}

// Fleet management types
export interface Vehicle {
  id: string;
  type: 'bus' | 'truck' | 'trailer' | 'van';
  capacity: number;
  daily_rate: number;
  per_mile_rate: number;
  fuel_efficiency: number; // MPG
}

export interface Driver {
  id: string;
  name: string;
  daily_rate: number;
  overtime_rate: number;
  per_mile_rate?: number;
  hos_compliant: boolean; // Hours of Service compliance
}

// HOS (Hours of Service) tracking
export interface HOSRecord {
  id: string;
  driver_id: string;
  date: string;
  driving_hours: number;
  on_duty_hours: number;
  off_duty_hours: number;
  sleeper_berth_hours: number;
  violations?: string[];
}

// API response types
export interface ApiResponse<T> {
  data: T;
  error?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  limit: number;
  total: number;
  has_more: boolean;
}
