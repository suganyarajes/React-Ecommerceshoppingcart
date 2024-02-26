

import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ product, onAddToCart, onRemoveFromCart, isInCart }) => {
  return (
    <div className="product">
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '450px', height: '300px' }} 
      />
      <h6>{product.name}</h6>
      <p>${product.actualCost}</p>
     
      {isInCart ? (
        <button onClick={onRemoveFromCart}>Remove from Cart</button>
      ) : (
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
  isInCart: PropTypes.bool.isRequired,
};

export default Product;
