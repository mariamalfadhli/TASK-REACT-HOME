import React from "react";
import products from "../products";
const ProductsItem = () => {
  const productList = products.map((product) => {
    return (
      <div className="product">
        <img className="productImage" alt={product.name} src={product.image} />

        <p className="text">{product.name}</p>
        <p className="text">{product.price}</p>
      </div>
    );
  });
  return <div className="list">{productList}</div>;
};

export default ProductsItem;
