import React, { useEffect, useState } from "react";
import Products from "../../components/DisplayProducts/Products";
import { useLoaderData } from "react-router-dom";

const AllProducts = () => {
  const data = useLoaderData();

  return (
    <div>
      <Products data={data}></Products>
    </div>
  );
};

export default AllProducts;
