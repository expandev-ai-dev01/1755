import { useNavigate } from 'react-router-dom';
import { Car, Fuel, Gauge } from 'lucide-react';
import type { VehicleCardProps } from './types';

/**
 * @component VehicleCard
 * @summary Vehicle card component for list display
 * @domain vehicle
 * @type domain-component
 * @category display
 */
export const VehicleCard = ({ vehicle, onClick }: VehicleCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(vehicle.id);
    } else {
      navigate(`/vehicles/${vehicle.id}`);
    }
  };

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
    <div
      onClick={handleClick}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="aspect-video bg-gray-100 relative">
        {vehicle.images && vehicle.images.length > 0 ? (
          <img
            src={vehicle.images[0]}
            alt={`${vehicle.brand} ${vehicle.model}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Car className="h-16 w-16 text-gray-400" />
          </div>
        )}
        {vehicle.condition === 'new' && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Novo
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">
          {vehicle.brand} {vehicle.model}
        </h3>
        <p className="text-2xl font-bold text-blue-600 mb-3">{formatPrice(vehicle.price)}</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Gauge className="h-4 w-4" />
            <span>{formatMileage(vehicle.mileage)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="h-4 w-4" />
            <span className="capitalize">{vehicle.fuelType}</span>
          </div>
          <span>{vehicle.year}</span>
        </div>
      </div>
    </div>
  );
};
