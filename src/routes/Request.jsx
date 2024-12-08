import { Helmet, HelmetProvider } from "react-helmet-async";

const Request = () => {
  const gadgetCategories = [
    {
      title: "Smartphones",
      description:
        "Explore the latest smartphones from top brands, featuring cutting-edge technology and sleek designs.",
    },
    {
      title: "Laptops",
      description:
        "Discover high-performance laptops for gaming, work, and personal use, with top specifications and features.",
    },
    {
      title: "Headphones",
      description:
        "Find premium headphones with excellent sound quality, noise-cancellation, and wireless connectivity.",
    },
    {
      title: "Monitors",
      description:
        "Browse monitors with stunning display resolutions, ideal for gaming, creative work, and multitasking.",
    },
    {
      title: "Accessories",
      description:
        "Choose from a wide range of accessories, including cases, chargers, cables, and more.",
    },
  ];

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Request Product - Gadget Heaven</title>
        </Helmet>
        <div>
          <div className="bg-primary pt-8 pb-72 text-center relative">
            <h2 className="text-3xl font-bold text-banner-content">
              Request Product
            </h2>
            <p className="max-w-xl mx-auto text-base font-normal text-banner-content mt-4">
              Discover popular gadget categories and find the perfect match for
              your needs.
            </p>
          </div>
          <div className="bg-base-100 py-8 px-6 rounded-3xl absolute top-60 left-0 right-0 mx-auto max-w-screen-md">
            <h2 className="text-2xl font-bold text-base-content text-center">
              Gadget Categories
            </h2>
            <div className="mt-8 space-y-6">
              {gadgetCategories.map((category, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold text-base-content mb-2">
                    {category.title}
                  </h3>
                  <p className="text-base text-base-content-secondary">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </HelmetProvider>
    </>
  );
};

export default Request;
