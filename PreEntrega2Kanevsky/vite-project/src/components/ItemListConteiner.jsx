import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      let fetchedItems = [];
      if (categoryId) {
        fetchedItems = await getItemsByCategory(categoryId);
      } else {
        fetchedItems = await getAllItems();
      }
      setItems(fetchedItems);
    };

    fetchItems();
  }, [categoryId]);

  return (
    <div className="container mt-5">
      <h1>{greeting}</h1>
      <div className="row">
        {items.map(item => (
          <div className="col-md-4" key={item.id}>
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <Link to={`/item/${item.id}`} className="btn btn-primary">Ver detalle</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getAllItems = async () => {
  return [
    { id: 1, name: 'Item 1', description: 'Descripción del item 1', category: 'nutrition', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Item 2', description: 'Descripción del item 2', category: 'physical', image: 'https://via.placeholder.com/150' },
  ];
};

const getItemsByCategory = async (categoryId) => {
  const allItems = await getAllItems();
  return allItems.filter(item => item.category === categoryId);
};

export default ItemListContainer;
