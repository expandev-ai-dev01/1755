import { useParams } from 'react-router-dom';

/**
 * @page VehicleDetailPage
 * @summary Vehicle detail page with contact form
 * @domain vehicle
 * @type detail-page
 * @category vehicle-management
 */
export const VehicleDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Detalhes do Veículo</h1>
      <p className="text-gray-600">Detalhes do veículo ID: {id}</p>
    </div>
  );
};

export default VehicleDetailPage;
