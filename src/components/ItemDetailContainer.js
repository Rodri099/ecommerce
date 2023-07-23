import React from 'react';
import { useParams } from 'react-router-dom';
import mockData from './mockData'; // Importa los datos de ejemplo

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  // Busca el producto en los datos de ejemplo según el itemId
  const selectedItem = mockData.find(item => item.id === parseInt(itemId));

  return (
    <div>
      {/* Mostrar información del producto seleccionado */}
      <h2>{selectedItem.name}</h2>
      <p>{selectedItem.description}</p>
      <img src={selectedItem.image} alt={selectedItem.name} />
      <p>Precio: {selectedItem.price}</p>
      {/* Agrega el botón de "Agregar al carrito" aquí */}
    </div>
  );
};

export default ItemDetailContainer;



