import React from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router";
import RecentProductsCard from "./RecentProductsCard";

const Home = () => {
  const data = useLoaderData();
  //   console.log(data);
  return (
    <div>
      <Banner></Banner>
      <section>
        <h2 className="text-center text-3xl font-medium mt-7">
          Recent <span className="text-purple-600">Products</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-7">
          {data.map((recentData) => (
            <RecentProductsCard
              key={recentData._id}
              recentData={recentData}
            ></RecentProductsCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
