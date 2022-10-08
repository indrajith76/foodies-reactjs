import React from "react";
import Product from "../Product/Product";

const Products = ({ products }) => {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-3 justify-items-center gap-y-10 mt-10">
        {products.map((product) => (
          <Product key={product.idMeal} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
