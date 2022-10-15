import React, { useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaCcAmazonPay } from "react-icons/fa";
import DeleteModal from "./DeleteModal";
import { useNavigate } from "react-router-dom";

const SingleOrder = ({ order }) => {
  const [openModal, setOpenModal] = useState(false);
  const { _id, tool, price } = order;
  const navigate = useNavigate();
  // console.log(order)
  const paymentHandle = (id) => {
    // console.log('Payment clicked');
    navigate("dashboard/payment/:id");
  };

  return (
    <div className=" ">
      <div className="w-full lg:w-4/5 2xl:w-3/4 mx-auto  ">
        <div className="flex bg-white justify-center items-center hover:bg-gray-100 hover:cursor-text">
          <p className="w-2/5 h-16 flex items-center justify-center font-medium text-sm lg:text-xl text-center p-2 border-x-[2px] border-b-[2px] border-gray-300">
            {tool}
          </p>
          <p className="w-1/5 h-16 flex items-center justify-center font-semibold text-sm lg:text-base text-center p-2 border-r-[2px] border-b-[2px] border-gray-300">
            ${price}
          </p>
          <button
            onClick={() => paymentHandle(_id)}
            className="w-1/5 cursor-pointer h-16 flex items-center justify-center text-4xl text-primary text-center p-2 border-r-[2px] border-b-[2px] border-gray-300"
          >
            <FaCcAmazonPay></FaCcAmazonPay>
          </button>

          <label
            onClick={() => setOpenModal(true)}
            htmlFor="delete-modal"
            className="w-1/5 h-16 flex items-center cursor-pointer justify-center text-red-700 text-4xl text-center p-2 border-r-[2px] border-b-[2px] border-gray-300"
          >
            <RiDeleteBin2Fill></RiDeleteBin2Fill>
          </label>
        </div>
      </div>
      {openModal && <DeleteModal key={order._id} order={order}></DeleteModal>}
    </div>
  );
};

export default SingleOrder;
