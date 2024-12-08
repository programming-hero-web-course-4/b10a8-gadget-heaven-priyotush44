import React from "react";
import { Link } from "react-router-dom";

const Page = ({ data }) => {
  const { name } = data;
  return (
    <>
      <li>
        <Link className="text-base font-normal text-base-content-secondary hover:text-base-content">
          {name}
        </Link>
      </li>
    </>
  );
};

export default Page;
