import type { Vehicle, VehicleListParams } from '../../types';
import type { PaginatedResponse } from '@/core/types';

export interface UseVehicleListOptions {
  filters?: VehicleListParams;
  enabled?: boolean;
}

export interface UseVehicleListReturn {
  vehicles: Vehicle[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  } | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}
