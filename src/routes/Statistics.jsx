import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Statistics - Gadget Heaven</title>
        </Helmet>
        <div className="bg-primary py-8 px-5">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-banner-content">
              Statistics
            </h2>
            <p className="max-w-xl mx-auto text-base font-normal text-banner-content mt-4">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-base-content my-12">
            Statistics
          </h2>
          <div className="mt-8 rounded-2xl bg-base-100 p-6">
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <XAxis dataKey="product_title" scale="band" />
                <YAxis dataKey="price" />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="price"
                  fill="#8884d8"
                  stroke="#8884d8"
                />
                <Bar dataKey="price" barSize={20} fill="#413ea0" />
                <Scatter dataKey="rating" fill="red" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </HelmetProvider>
    </>
  );
};

export default Statistics;
