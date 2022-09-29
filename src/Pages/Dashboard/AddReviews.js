import React from "react";

const AddReviews = () => {
  return (
    <form className="flex flex-col justify-center items-center my-20 gap-10">
      <select class="select select-bordered border-primary lg:w-1/4 md:w-1/2 text-primary ">
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
