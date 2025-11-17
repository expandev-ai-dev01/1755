import { useQuery } from '@tanstack/react-query';
import { vehicleService } from '../../services/vehicleService';
import type { UseVehicleListOptions, UseVehicleListReturn } from './types';

/**
 * @hook useVehicleList
 * @summary Manages vehicle list with filtering and pagination
 * @domain vehicle
 * @type domain-hook
 * @category data
 */
export const useVehicleList = (options: UseVehicleListOptions = {}): UseVehicleListReturn => {
  const { filters = {}, enabled = true } = options;

  const queryKey = ['vehicles', filters];

  const { data, isLoading, error, refetch } = useQuery({
    queryKey,
    queryFn: () => vehicleService.list(filters),
    enabled,
    staleTime: 2 * 60 * 1000,
  });

  return {
    vehicles: data?.data || [],
    pagination: data
      ? {
          total: data.total,
          page: data.page,
          limit: data.limit,
          totalPages: data.totalPages,
        }
      : null,
    isLoading,
    error: error as Error | null,
    refetch,
  };
};
