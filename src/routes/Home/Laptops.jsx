import React, { useEffect, useState } from "react";
import Products from "../../components/DisplayProducts/Products";
import { useLoaderData } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Laptops = () => {
  const data = useLoaderData();
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    const newData = data.filter((item) => item.category === "Laptop");
    setCategoryData(newData);
  }, []);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Laptops - Gadget Heaven</title>
      </Helmet>
      <div>
        <Products data={categoryData}></Products>
      </div>
    </HelmetProvider>
  );
};

export default Laptops;
