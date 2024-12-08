import React from "react";
import Product from "./Product";

const Products = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {data.length
        ? data.map((item) => (
            <Product key={item.product_id} data={item}></Product>
          ))
        : "Nothing to show!"}
    </div>
  );
};

export default Products;
