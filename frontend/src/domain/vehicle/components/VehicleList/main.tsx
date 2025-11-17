import { useVehicleList } from '../../hooks/useVehicleList';
import { VehicleCard } from '../VehicleCard';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import { ErrorMessage } from '@/core/components/ErrorMessage';
import type { VehicleListProps } from './types';

/**
 * @component VehicleList
 * @summary Vehicle list component with loading and error states
 * @domain vehicle
 * @type domain-component
 * @category display
 */
export const VehicleList = ({ filters }: VehicleListProps) => {
  const { vehicles, isLoading, error, refetch } = useVehicleList({ filters });

  if (isLoading) {
    return <LoadingSpinner size="large" />;
  }

  if (error) {
    return (
      <ErrorMessage
        title="Erro ao carregar veículos"
        message="Não foi possível carregar a lista de veículos. Por favor, tente novamente."
        onRetry={refetch}
      />
    );
  }

  if (vehicles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">Nenhum veículo encontrado.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
};
