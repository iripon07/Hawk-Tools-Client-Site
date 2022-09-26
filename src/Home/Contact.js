import React from "react";
import bg2 from "../images/bg1.jpg";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg2})`,
      }}
      className="object-cover"
    >
      <h1 className="text-3xl font-bold text-secondary uppercase text-center pt-10">
        Stay With Us
      </h1>
      <div className="flex justify-center">
        <div className="max-w-screen-xl mx-auto py-10">
          <form action="">
            <div className="flex">
              <input
                type="text"
                placeholder="First Name"
                required
                className="input input-bordered input-primary text-primary mr-5"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                className="input input-primary text-primary"
              />
            </div>
            <input
              type="email"
              required
              placeholder="Enter Your Email"
              className="input input-bordered input-primary w-full max-w-xs text-primary my-5"
            />
            <br />
            <textarea
              required
              className="textarea textarea-primary text-primary"
              placeholder="Say About your opinion"
            ></textarea>
            <br />
            <button
              style={{
                border: "1px solid #056608",
              }}
              className="rounded-xl py-1 px-3 mt-2 font-bold uppercase text-primary hover:bg-primary hover:text-white transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
            >
              Subscribe Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
