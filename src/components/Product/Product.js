import React from "react";

const Product = ({ product }) => {
  const {
    strMeal :name,
    strMealThumb:image,
    strCategory :category,
    strInstructions: details,
  } = product;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} className='h-72 w-full' alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <p>{details.slice(0, 100)}...</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
