import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { itemId } = useParams();

  // Implementar el código para obtener los detalles del producto según el 'itemId'

  return (
    <div>
      {/* Mostrar los detalles del producto en una tarjeta estilizada */}
    </div>
  );
};

export default ProductDetailPage;
