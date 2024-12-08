
import { NavLink } from "react-router-dom";

const Category = ({ category }) => {
  const { path, name } = category;
  return (
    <div>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `btn rounded-full w-full text-lg font-bold ${
            isActive
              ? "bg-primary text-primary-content hover:bg-primary"
              : "bg-base-300 text-base-content-secondary"
          }`
        }
      >
        {name}
      </NavLink>
    </div>
  );
};

export default Category;
