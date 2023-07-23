// components/ItemListContainer.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mockData from './mockData';

const getProductsByCategory = (categoryId) => {
  // Simulamos una llamada a la API utilizando 'mockData'
  return Promise.resolve(mockData[categoryId] || []);
};

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Llama a la función para obtener los productos por categoría desde el mockData y actualiza el estado
    getProductsByCategory(categoryId).then((data) => setProducts(data));
  }, [categoryId]);

  const handleAddToCart = (product) => {
    // Implementa aquí la lógica para agregar el producto al carrito
    console.log('Producto agregado al carrito:', product);
  };

  return (
    <div>
      <h2>Categoria: {categoryId}</h2>
      <div className="product-cards">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;




