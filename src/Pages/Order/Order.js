import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { ImMinus, ImPlus } from "react-icons/im";
import { toast } from "react-toastify";
import axios from "axios";

const Order = () => {
  const { _id } = useParams();
  const [user] = useAuthState(auth);
  const [tool, setTool] = useState({});
  const [number, setNumber] = useState(0);
  const [buy, setBuy] = useState(true);

  useEffect(() => {
    fetch(`https://desolate-reef-03804.herokuapp.com/tools/${_id}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [_id]);

  const { img, name, price, description, available, minimum } = tool;
  const userName = user?.displayName;
  const userEmail = user?.email;
  const minNumber = parseInt(minimum);
  const availNumber = parseInt(available);

  useEffect(() => {
    setNumber(minNumber);
  }, [minNumber]);

  const handleIncrease = () => {
    if (number > 0) {
      if (number <= availNumber - 1) {
        setNumber(number + 1);
      } else if (number >= availNumber - 1 && number <= availNumber - 1) {
        setBuy(true);
      } else if (number > availNumber - 1) {
        toast.error(`You can't choose more than ${availNumber}`);
        setBuy(false);
      }
    }
  };

  const handleDecrease = () => {
    if (number > 0) {
      if (number >= minNumber + 1) {
        setNumber(number - 1);
      } else if (number >= minNumber + 1 && number <= minNumber + 1) {
        setBuy(true);
      } else if (number < minNumber + 1) {
        toast.error(`You can't choose less than ${minNumber}`);
        setBuy(false);
      }
    }
  };

  const placeOrder = event => {
    const totalPrice = parseInt(number) * parseInt(price);
    event.preventDefault();
    const orders = {
      name: userName,
      email: userEmail,
      tool: tool.name,
      toolId: tool._id,
      quantity: number,
      price: totalPrice,
      phone: event.target.phone.value,
      address: event.target.address.value
    }

    axios.post(`https://desolate-reef-03804.herokuapp.com/orders`, orders)
    .then( res => {
      const {data} = res;
      if(data.insertedId){
        toast.success('Your order is booked');
        event.target.reset();
      }
    })
    console.log('Order Placed', totalPrice, orders);
  }


  return (
    <div className="max-w-screen-lg mx-auto my-10">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 mx-10">
        <div>
          <img className="w-3/4" src={img} alt="" />
          <h2 className="text-2xl font-bold text-primary uppercase">{name}</h2>
          <h3 className="text-xl font-serif text-secondary">Price: ${price}</h3>
          <p className="font-mono text-neutral">{description}</p>
          <h3 className="text-primary font-serif text-xl">
            Available Quantity:{" "}
            <span className="text-secondary text-2xl">{available}</span>
          </h3>
          <h3 className="text-primary font-serif text-xl">
            Minimum Order Quantity:{" "}
            <span className="text-secondary text-2xl">{minimum}</span>
          </h3>
          <div className="flex justify-start items-center pt-5">
            <ImMinus
              onClick={handleDecrease}
              className="text-primary text-2xl font-extrabold mr-2"
            ></ImMinus>
            <input
              className="w-20 h-10 px-2 border-2 border-secondary rounded text-center font-semibold text-primary text-xl"
              type="text"
              name="number"
              value={number}
            />
            <ImPlus
              onClick={() => handleIncrease(_id)}
              className="text-primary text-2xl font-extrabold ml-2"
            ></ImPlus>
          </div>
        </div>
        <div>
          <h1 className="text-center font-semibold text-3xl uppercase text-primary">
            Order Place
          </h1>
          <form onSubmit={placeOrder}>
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
                id="phone"
                type="text"
                placeholder="Phone Number"
                required
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
                id="address"
                type="text"
                placeholder="Address"
                required
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
