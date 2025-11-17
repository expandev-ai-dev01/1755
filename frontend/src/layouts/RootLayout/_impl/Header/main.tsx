import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';

/**
 * @component Header
 * @summary Application header with navigation
 * @domain core
 * @type layout-component
 * @category navigation
 */
export const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <Car className="h-6 w-6" />
            <span>Catálogo de Carros</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
