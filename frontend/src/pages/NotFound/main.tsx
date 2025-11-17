import { Link } from 'react-router-dom';

/**
 * @page NotFoundPage
 * @summary 404 error page
 * @domain core
 * @type error-page
 * @category navigation
 */
export const NotFoundPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Página não encontrada</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default NotFoundPage;
