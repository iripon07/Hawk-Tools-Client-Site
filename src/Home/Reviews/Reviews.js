import React, { useEffect, useState } from "react";
import Review from "./Review";
import 'animate.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://desolate-reef-03804.herokuapp.com/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  
  return (
    <div className="max-w-screen-xl mx-auto my-10">
        <h1 className="font-semibold text-3xl text-center text-secondary py-3 uppercase mb-5 animate__animated animate__zoomInLeft delay-100">What Our Clients Say</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-10">
        {
        reviews.slice(0, 3).map((review) => (
          <Review 
          key={review._id} 
          review={review}
          ></Review>
        ))
        }
      </div>
    </div>
  );
};

export default Reviews;
