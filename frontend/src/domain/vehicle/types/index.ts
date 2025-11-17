/**
 * @type Vehicle
 * @summary Vehicle entity type
 */
export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: 'gasoline' | 'diesel' | 'electric' | 'hybrid';
  transmission: 'manual' | 'automatic';
  color: string;
  description: string;
  images: string[];
  features: string[];
  condition: 'new' | 'used';
  createdAt: string;
  updatedAt: string;
}

/**
 * @type VehicleListParams
 * @summary Parameters for vehicle list query
 */
export interface VehicleListParams {
  page?: number;
  limit?: number;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  year?: number;
  fuelType?: string;
  transmission?: string;
  condition?: string;
  sortBy?: 'price' | 'year' | 'mileage' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
}

/**
 * @type VehicleFilters
 * @summary Vehicle filtering options
 */
export interface VehicleFilters {
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  year?: number;
  fuelType?: string;
  transmission?: string;
  condition?: string;
}
