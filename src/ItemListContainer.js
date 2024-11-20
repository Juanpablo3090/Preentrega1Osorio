import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div 
      className="d-flex flex-column justify-content-center align-items-center" 
      style={{ height: '70vh', backgroundColor: '#f8f9fa' }}
    >
      <h1 className="text-secondary text-center">{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
