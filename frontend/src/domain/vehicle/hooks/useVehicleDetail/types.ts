import type { Vehicle } from '../../types';

export interface UseVehicleDetailOptions {
  vehicleId: number;
  enabled?: boolean;
}

export interface UseVehicleDetailReturn {
  vehicle: Vehicle | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}
