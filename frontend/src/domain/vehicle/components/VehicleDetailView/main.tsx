import { useVehicleDetail } from '../../hooks/useVehicleDetail';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import { ErrorMessage } from '@/core/components/ErrorMessage';
import { Car, Calendar, Fuel, Gauge, Palette, Settings } from 'lucide-react';
import type { VehicleDetailViewProps } from './types';

/**
 * @component VehicleDetailView
 * @summary Vehicle detail view component
 * @domain vehicle
 * @type domain-component
 * @category display
 */
export const VehicleDetailView = ({ vehicleId }: VehicleDetailViewProps) => {
  const { vehicle, isLoading, error, refetch } = useVehicleDetail({ vehicleId });

  if (isLoading) {
    return <LoadingSpinner size="large" />;
  }

  if (error) {
    return (
      <ErrorMessage
        title="Erro ao carregar detalhes"
        message="Não foi possível carregar os detalhes do veículo. Por favor, tente novamente."
        onRetry={refetch}
      />
    );
  }

  if (!vehicle) {
    return (
      <ErrorMessage
        title="Veículo não encontrado"
        message="O veículo solicitado não foi encontrado."
      />
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('pt-BR').format(mileage) + ' km';
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {vehicle.images && vehicle.images.length > 0 ? (
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={vehicle.images[0]}
                alt={`${vehicle.brand} ${vehicle.model}`}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <Car className="h-24 w-24 text-gray-400" />
            </div>
          )}
          {vehicle.images && vehicle.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {vehicle.images.slice(1, 5).map((image, index) => (
                <div key={index} className="aspect-video bg-gray-100 rounded overflow-hidden">
                  <img
                    src={image}
                    alt={`${vehicle.brand} ${vehicle.model} - ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {vehicle.brand} {vehicle.model}
            </h1>
            <p className="text-4xl font-bold text-blue-600">{formatPrice(vehicle.price)}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500">Ano</p>
                <p className="font-semibold">{vehicle.year}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Gauge className="h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500">Quilometragem</p>
                <p className="font-semibold">{formatMileage(vehicle.mileage)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Fuel className="h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500">Combustível</p>
                <p className="font-semibold capitalize">{vehicle.fuelType}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Settings className="h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500">Transmissão</p>
                <p className="font-semibold capitalize">{vehicle.transmission}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Palette className="h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500">Cor</p>
                <p className="font-semibold capitalize">{vehicle.color}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Car className="h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500">Condição</p>
                <p className="font-semibold capitalize">
                  {vehicle.condition === 'new' ? 'Novo' : 'Usado'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4">Descrição</h2>
        <p className="text-gray-700 whitespace-pre-line">{vehicle.description}</p>
      </div>
      {vehicle.features && vehicle.features.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Características</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {vehicle.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <span className="h-1.5 w-1.5 bg-blue-600 rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
