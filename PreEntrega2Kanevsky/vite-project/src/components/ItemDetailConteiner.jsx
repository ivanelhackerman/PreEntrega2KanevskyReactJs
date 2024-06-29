import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const fetchedItem = await getItemById(itemId);
      setItem(fetchedItem);
    };

    fetchItem();
  }, [itemId]);

  return (
    <div className="container mt-5">
      {item ? (
        <div className="card">
          <img src={item.image} className="card-img-top" alt={item.name} />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            {/* Otros detalles del producto */}
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

const getItemById = async (id) => {
  const items = await getAllItems();
  return items.find(item => item.id === parseInt(id));
};

const getAllItems = async () => {
  return [
    { id: 1, name: 'Item 1', description: 'Descripción del item 1', category: 'nutrition', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Item 2', description: 'Descripción del item 2', category: 'physical', image: 'https://via.placeholder.com/150' },
  ];
};

export default ItemDetailContainer;
