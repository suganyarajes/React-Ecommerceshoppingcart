import React, { useEffect, useState } from 'react';
import './App.css'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import NavBar from './components/Header';
import Billboard from './components/Billboard';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then(response => response.json())
      .then((result) => {
        if (result.data.length > 0) {
          setProducts(result.data);
        }
      })
      .catch(error => console.log(error));
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div>
      <NavBar quantity={cart.length} />
      <Billboard />
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {products.map((product) => (
            <div className="col mb-4" key={product.id}>
              <Product
                product={product}
                onAddToCart={() => addToCart(product)}
                onRemoveFromCart={() => removeFromCart(product.id)}
                isInCart={cart.some((item) => item.id === product.id)}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
