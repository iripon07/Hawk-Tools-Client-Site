import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReviews = () => {
  const [user] = useAuthState(auth);
  const userName = user?.displayName;
  const userEmail = user?.email;
  const image = user?.photoURL;
  console.log(image);


  const reviewHandle = event => {
    event.preventDefault();
    const rating = event.target.rating.value;
    const review = event.target.review.value;

    const userReview = {
      name: userName,
      email: userEmail,
      img: image,
      description: review,
      ratings: rating
    }

    fetch('https://desolate-reef-03804.herokuapp.com/reviews', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(userReview)
  })
      .then(res => res.json())
      .then(data => {
          if (data.insertedId) {
              toast.success("successfully added!");
          }
          console.log('review', data);
      })

  event.target.reset();
  }
  return (
    <form onSubmit={reviewHandle} className="flex flex-col justify-center items-center my-20 gap-10">
      <select class="select select-bordered border-primary  lg:w-1/4 md:w-1/2 text-primary " name="rating">
        <option className="text-primary" disabled selected>
          Please Give Your Ratings
        </option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>

      <textarea
        class="textarea textarea-primary  placeholder:text-primary text-primary  leading-tight focus:outline-none  focus:border-primary lg:w-1/4 md:w-1/2"
        placeholder="Please Give Your Opinion"
        name="review"
        required
      ></textarea>
      <button
          style={{
            border: "1px solid grey",
          }}
          className="lg:w-1/4 md:w-1/2 py-3 text-primary font-bold hover:bg-primary hover:text-white text-sm"
        >
          Post Your Comment
        </button>
    </form>
  );
};

export default AddReviews;
