import React from "react";
import { Link } from "react-router-dom";

const Tool = ({ tool }) => {
  const {_id, name, description, available, minimum, price, img } = tool;
  return (
    <div
      className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
      style={{
        border: "1px solid #056608",
      }}
    >
      <div className="w-full relative ">
        <p className="text-xl absolute right-0 top-0 bg-primary w-16 text-center h-8 text-white font-semibold">
          ${price}
        </p>
        <figure>
          <img className="h-[225px] mx-auto p-1" src={img} alt="Shoes" />
        </figure>

        <hr />
        <div className="">
          <h2 className="text-xl font-bold text-secondary uppercase text-center">
            {name}
          </h2>
          <p className="text-xs text-center text-accent px-1">{description}</p>

          <div className="flex justify-between p-4 text-sm text-primary">
            <p>
              Available: <span className="text-secondary">{available}</span>
            </p>

            <p>
              Minimum: <span className="text-secondary">{minimum}</span>
            </p>
          </div>

          <div className="card-actions justify-center py-2">
            <Link to={`/order/${_id}`}>
              <button
                style={{
                  border: "1px solid #056608",
                }}
                className="py-1 px-5 text-primary rounded-2xl hover:bg-primary hover:text-white text-sm font-semibold"
              >
                PURCHASE NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
