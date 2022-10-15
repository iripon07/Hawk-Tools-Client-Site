import React from "react";
import Rating from "react-rating";
import { BsFillStarFill } from "react-icons/bs";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import 'animate.css';

const Review = ({ review }) => {
  const { name, img, description, ratings } = review;
  return (
    <div className="card shadow-lg w-full transform transition duration-500 hover:scale-105 animate__animated animate__lightSpeedInRight delay-500">
      <div className="mx-auto">
        <div className="avatar ">
          <div className="w-24 rounded-full">
            <img className="transform transition duration-500 hover:scale-90" src={img} alt="" />
          </div>
        </div>
      </div>
      <h2 className="text-center text-2xl font-semibold text-primary">
        {name}
      </h2>
      <div className="mx-auto mt-1">
        <Rating
          initialRating={ratings}
          emptySymbol={<BsFillStarFill></BsFillStarFill>}
          fullSymbol={
            <BsFillStarFill
              style={{
                color: "rgb(255,226,52)",
              }}
            ></BsFillStarFill>
          }
          fractions={2}
          readonly
        />
      </div>
      <div className="card-body pt-1">
        <h1><ImQuotesLeft className="text-primary animate__animated animate__bounceIn animate__infinite"></ImQuotesLeft><span>{description}</span><ImQuotesRight className="text-primary animate__animated animate__bounceIn animate__infinite"></ImQuotesRight></h1>
      </div>
    </div>
  );
};

export default Review;
