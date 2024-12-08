import React from "react";
import { useRouteError } from "react-router-dom";
import ErrorLaptopImg from "../assets/error.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="max-w-32 lg:max-w-64">
        <img className="w-full animate-bounce" src={ErrorLaptopImg} alt="" />
      </div>
      <div className="text-center">
        <h2 className="text-4xl lg:text-7xl font-bold text-red-500">
          {error.status}
        </h2>
        <p className="text-base font-bold text-red-500">{error.statusText}!</p>
      </div>
      <Link
        to="/"
        className="mt-8 px-6 py-2 rounded-full border-2 border-primary bg-primary text-primary-content text-base hover:text-primary hover:bg-primary-content"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
