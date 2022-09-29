import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="">
      <h1 className="text-center text-3xl text-primary font-bold my-2 uppercase">My Profile</h1>
      <form className="flex flex-col items-center justify-center gap-5">
        <input
          class="lg:w-1/4 md:w-1/2 uppercase text-primary border border-primary py-3 bg-gray-100 px-4 leading-tight focus:outline-none  focus:border-primary" id="email" readOnly type="text" value={user?.displayName}/>
        <input
          class="lg:w-1/4 md:w-1/2 text-primary border border-primary py-3 bg-gray-100 px-4 leading-tight focus:outline-none  focus:border-primary" id="location" readOnly type="text" value={user?.email}/>
        <input
          class="lg:w-1/4 md:w-1/2 text-primary border border-primary py-3 bg-gray-100 px-4 leading-tight focus:outline-none  focus:border-primary" id="name" required type="text" placeholder="Location"/>
        <input
          class="lg:w-1/4 md:w-1/2 text-primary border border-primary py-3 bg-gray-100 px-4 leading-tight focus:outline-none  focus:border-primary" id="address" required type="text" placeholder="Address"/>
        <input
          class="lg:w-1/4 md:w-1/2 text-primary border border-primary py-3 bg-gray-100 px-4 leading-tight focus:outline-none  focus:border-primary" id="phone" required type="text" placeholder="Phone"/>
        <input
          class="lg:w-1/4 md:w-1/2 text-primary border border-primary py-3 bg-gray-100 px-4 leading-tight focus:outline-none  focus:border-primary" id="linkedProfile" type="text" required placeholder="LinkedIn Profile"/>

        <button
          style={{
            border: "1px solid #056608",
          }}
          className="lg:w-1/4 md:w-1/2 py-3 text-primary font-bold hover:bg-primary hover:text-white text-sm"
        >
          UpDate Profile
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
