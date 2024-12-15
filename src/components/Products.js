import React from "react";
import "./Products.css";

const Products = () => {
  const productData = [
    { id: 1, name: 'Marble', image: '/assets/images/marble.jpg', description: 'Elegant and luxurious marble.' },
    { id: 2, name: 'Granite', image: '/assets/images/granite.jpg', description: 'Durable and stylish granite.' },
    { id: 3, name: 'Slate', image: '/assets/images/slate.jpg', description: 'Natural and classic slate.' },
  ];

  return (
    <section id="product" className="products-section">
      <h2>Our Products</h2>
      <div className="products-grid">
        {productData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
