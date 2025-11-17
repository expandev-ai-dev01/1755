/**
 * @module vehicle
 * @summary Vehicle domain module for managing vehicle catalog, details, and related operations
 * @domain functional
 * @dependencies React Router DOM, TanStack Query, Axios
 * @version 1.0.0
 * @author Development Team
 * @lastModified 2024-01-15
 */

export * from './components/VehicleCard';
export * from './components/VehicleList';
export * from './components/VehicleDetailView';
export * from './hooks/useVehicleList';
export * from './hooks/useVehicleDetail';
export * from './services/vehicleService';
export * from './types';

export const moduleMetadata = {
  name: 'vehicle',
  domain: 'functional',
  version: '1.0.0',
  publicComponents: ['VehicleCard', 'VehicleList', 'VehicleDetailView'],
  publicHooks: ['useVehicleList', 'useVehicleDetail'],
  publicServices: ['vehicleService'],
  dependencies: {
    internal: ['@/core/components', '@/core/lib', '@/core/utils'],
    external: ['react', 'react-router-dom', '@tanstack/react-query', 'axios'],
    domains: [],
  },
  exports: {
    components: ['VehicleCard', 'VehicleList', 'VehicleDetailView'],
    hooks: ['useVehicleList', 'useVehicleDetail'],
    services: ['vehicleService'],
    types: ['Vehicle', 'VehicleListParams', 'VehicleFilters'],
  },
} as const;
