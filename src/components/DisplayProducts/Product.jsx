import React from "react";
import { Link } from "react-router-dom";

const Product = ({ data }) => {
  const { product_id, product_title, product_image, price } = data;
  return (
    <div className="bg-base-100 rounded-2xl p-5">
      <div className="h-48">
        <img
          className="h-full w-full object-contain"
          src={product_image}
          alt=""
        />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-card-content mt-6">
          {product_title}
        </h3>
        <p className="text-xl font-medium text-base-content-secondary mt-3">
          Price: ${price}
        </p>
        <Link
          to={`/details/${product_id}`}
          className="py-2 px-4 border-2 border-primary rounded-full text-lg font-semibold text-primary mt-4 inline-block hover:bg-primary hover:text-primary-content"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
