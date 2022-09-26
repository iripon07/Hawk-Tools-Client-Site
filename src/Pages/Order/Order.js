import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { ImMinus, ImPlus } from "react-icons/im";

const Order = () => {
  const { _id } = useParams();
  const [user] = useAuthState(auth);
  const [tool, setTool] = useState({});
  const [num, setNum] = useState(0);

  useEffect(() => {
    fetch(`https://desolate-reef-03804.herokuapp.com/tools/${_id}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [tool, _id]);

  const {img, name, price, description, available, minimum} = tool;
  const mini = parseInt(minimum)
  const max = parseInt(available);

  useEffect( () =>{
    setNum(mini)
  } ,[mini])

  const handleIncrease = () => {
    console.log("Increase button clicked");
    if(mini <= max){
        setNum(mini + 1)
    }

  };

  const handleDecrease = () => {
    console.log("Decrease button clicked");
  };

  return (
    <div className="max-w-screen-lg mx-auto my-10">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 mx-10">
        <div>
          <img className="w-3/4" src={img} alt="" />
          <h2 className="text-2xl font-bold text-primary uppercase">
            {name}
          </h2>
          <h3 className="text-xl font-serif text-secondary">
            Price: ${price}
          </h3>
          <p className="font-mono text-neutral">{description}</p>
          <h3 className="text-primary font-serif text-xl">
            Available Quantity:{" "}
            <span className="text-secondary text-2xl">{available}</span>
          </h3>
          <h3 className="text-primary font-serif text-xl">
            Minimum Order Quantity:{" "}
            <span className="text-secondary text-2xl">{minimum}</span>
          </h3>
          <div className="flex justify-center items-center">
            <ImMinus
              onClick={handleDecrease}
              className="text-primary text-2xl font-extrabold mt-5 mr-5"
            ></ImMinus>
            <button
              style={{
                border: "2px solid #ffb300",
              }}
              className="py-2 px-10 text-primary rounded mt-5 uppercase text-xl font-semibold"
            >
              {num}
            </button>
            <ImPlus
              onClick={() => handleIncrease(_id)}
              className="text-primary text-2xl font-extrabold mt-5 ml-5"
            ></ImPlus>
          </div>
        </div>
        <div>
          <h1 className="text-center font-semibold text-3xl uppercase text-primary">
            Order Place
          </h1>
          <div class="w-full">
            <label
              class="block uppercase tracking-wide text-secondary font-semibold mb-1"
              for="grid-last-name"
            >
              Name
            </label>
            <input
              class="w-full  uppercase text-primary border border-primary py-3 px-4 leading-tight focus:outline-none  focus:border-primary"
              id="name"
              readOnly
              type="text"
              value={user?.displayName}
            />
          </div>

          <div class="w-full my-5">
            <label
              class="block uppercase tracking-wide text-secondary  font-semibold mb-1"
              for="grid-last-name"
            >
              Email
            </label>
            <input
              class="w-full text-primary border border-primary py-3 px-4 leading-tight focus:outline-none  focus:border-primary"
              id="name"
              readOnly
              type="text"
              value={user?.email}
            />
          </div>

          <div class="w-full">
            <label
              class="block tracking-wide text-secondary font-semibold mb-1"
              for="grid-last-name"
            >
              Phone Number
            </label>
            <input
              class="w-full text-primary border border-primary py-3 px-4 leading-tight focus:outline-none  focus:border-primary"
              id="name"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div class="w-full my-5">
            <label
              class="block tracking-wide text-secondary font-semibold mb-1"
              for="grid-last-name"
            >
              Address
            </label>
            <input
              class="w-full text-primary border border-primary py-3 px-4 leading-tight focus:outline-none  focus:border-primary"
              id="name"
              type="text"
              placeholder="Address"
            />
          </div>
          <button
            style={{
              border: "1px solid #056608",
            }}
            className="py-2 px-10 text-primary uppercase font-bold rounded-2xl hover:bg-primary hover:text-white text-sm"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
