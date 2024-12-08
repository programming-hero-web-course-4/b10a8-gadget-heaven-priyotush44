import React from "react";
import Page from "./Page";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const services = [
    { name: "Product Support" },
    { name: "Order Tracking" },
    { name: "Shipping & Delivery" },
    { name: "Returns" },
  ];
  const company = [
    { name: "About Us" },
    { name: "Careers" },
    { name: "Contact" },
  ];
  const legal = [
    { name: "Terms of Service" },
    { name: "Privacy Policy" },
    { name: "Cookie Policy" },
  ];

  const location = useLocation();

  return (
    <footer
      className={`bg-base-100 py-12 lg:py-24 ${
        location.pathname.includes("details") ||
        location.pathname.includes("request")
          ? location.pathname.includes("request")
            ? "mt-[900px] lg:mt-[1000px]"
            : "mt-[710px] md:mt-[400px] lg:mt-[450px]"
          : "mt-12 lg:mt-24"
      }`}
    >
      <div className="flex flex-col items-center max-w-screen-xl mx-auto px-5">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-base-content">
            Gadget Heaven
          </h2>
          <p className="mt-3 text-base font-medium text-base-content-secondary">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="w-full mt-8 pt-8 border-t grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:text-center">
            <h4 className="font-lg text-base-content font-bold">Services</h4>
            <ul className="mt-4 space-y-3">
              {services.map((item, idx) => (
                <Page key={idx} data={item}></Page>
              ))}
            </ul>
          </div>
          <div className="md:text-center">
            <h4 className="font-lg text-base-content font-bold">Company</h4>
            <ul className="mt-4 space-y-3">
              {company.map((item, idx) => (
                <Page key={idx} data={item}></Page>
              ))}
            </ul>
          </div>
          <div className="md:text-center">
            <h4 className="font-lg text-base-content font-bold">Legal</h4>
            <ul className="mt-4 space-y-3">
              {legal.map((item, idx) => (
                <Page key={idx} data={item}></Page>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
