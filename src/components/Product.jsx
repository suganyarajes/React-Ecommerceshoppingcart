import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ product, onAddToCart, onRemoveFromCart, isInCart }) => {
  return (
    <div className="card h-100">
      <img
        src={product.image}
        className="card-img-top img-fluid"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.actualCost}</p>
        {isInCart ? (
          <button onClick={onRemoveFromCart} className="btn btn-danger">Remove from Cart</button>
        ) : (
          <button onClick={onAddToCart} className="btn btn-primary">Add to Cart</button>
        )}
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    actualCost: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
  isInCart: PropTypes.bool.isRequired,
};

export default Product;
