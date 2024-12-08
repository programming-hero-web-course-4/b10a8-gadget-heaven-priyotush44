import React from "react";
import { ImCancelCircle } from "react-icons/im";

const WishlistCard = ({ data }) => {
  const { product_id, product_title, product_image, price, description } = data;

  return (
    <div className="bg-base-100 p-6 rounded-2xl flex flex-col gap-6 relative md:flex-row">
      <div className="w-full  h-32 bg-base-200 rounded-2xl md:max-w-52">
        <img
          className="w-full h-full object-contain"
          src={product_image}
          alt=""
        />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-card-content">
          {product_title}
        </h3>
        <p className="text-base text-card-content-secondary my-4">
          <span className="font-bold text-card-content">Description:</span>{" "}
          {description}
        </p>
        <span className="inline-block text-xl font-semibold text-card-content-secondary">
          Price: ${price}
        </span>
        <button className="w-full mt-4 block px-6 py-2 rounded-full bg-primary text-primary-content md:w-auto">
          Add to Cart
        </button>
      </div>
      <ImCancelCircle className="absolute -top-2 -right-2 w-6 h-6 fill-red-500 cursor-pointer hover:opacity-70 md:top-6 md:right-6" />
    </div>
  );
};

export default WishlistCard;
