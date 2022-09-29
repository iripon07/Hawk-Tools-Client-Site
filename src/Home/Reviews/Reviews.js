import React, { useEffect, useState } from "react";
import Review from "./Review";
import "animate.css";
import axios from "axios";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const url = `https://desolate-reef-03804.herokuapp.com/reviews`;
      const { data } = await axios.get(url);
      setReviews(data);
    };

    getReviews();
  }, []);


  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <h1 className="font-semibold text-3xl text-center text-primary py-3 uppercase mb-5 animate__animated animate__zoomInLeft delay-100">
        What Our Clients Say
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-10">
        {reviews.slice(0, 3).map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
