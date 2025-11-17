/**
 * @component Footer
 * @summary Application footer
 * @domain core
 * @type layout-component
 * @category layout
 */
export const Footer = () => {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Catálogo de Carros. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
