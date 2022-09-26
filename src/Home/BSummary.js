import React from "react";
import img from "../images/2.webp";

const BSummary = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-5">
      <h1 className="text-center text-primary text-3xl font-bold">
        WHO WE ARE
      </h1>
      <div className="hero-content flex-col lg:flex-row mx-10">
        <img src={img} className="max-w-sm" alt="" />
        <div className="">
          <p>
            Welcome to{" "}
            <span className="text-primary font-semibold">Hawk Tools</span>.{" "}
            <span className="text-primary font-semibold">Hawk Tools</span> is
            currently one of the most trusted online and offline Tools store in
            our country. Here you will find all the authentic tools and
            accessories at affordable prices.We have been providing the best
            services all over the country for the last 4 years. Your faith is
            our strength. We send products to any part of the country. We are
            committed to provide the highest level of service. Order a product
            and get it home delivered within 24-48 hours anywhere in Bangladesh.{" "}
            <br />
            <span className="text-primary font-bold">
              "Your Trust, Our Service"
            </span>
            .
          </p>
          <button
            style={{
              border: "1px solid #056608",
            }}
            className="rounded-xl py-1 px-3 mt-2 font-bold uppercase text-primary hover:bg-primary hover:text-white transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
            Explore Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default BSummary;
