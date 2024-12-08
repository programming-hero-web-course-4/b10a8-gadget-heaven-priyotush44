
import Category from "./Category";

const Categories = () => {
  const categories = [
    {
      path: "/",
      name: "All Products",
    },
    {
      path: "/smartphones",
      name: "Smartphones",
    },
    {
      path: "/laptops",
      name: "Laptops",
    },
    {
      path: "/headphones",
      name: "Headphones",
    },
    {
      path: "/monitors",
      name: "Monitors",
    },
  ];
  return (
    <div>
      <div className="bg-base-100 border rounded-2xl p-6 space-y-6 sticky top-6">
        {categories.map((item, idx) => (
          <Category key={idx} category={item}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
