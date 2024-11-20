import React from 'react';

const CartWidget = () => {
  const cartCount = 3; 
  return (
    <div className="position-relative">
      <i className="fas fa-shopping-cart fa-2x text-primary"></i>
      <span 
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {cartCount}
      </span>
    </div>
  );
};

export default CartWidget;
