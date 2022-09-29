import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getOrders = async () => {
        const email = user?.email;
      const { data } = await axios.get(`http://localhost:5000/orders?email=${email}`);
      setOrders(data);
    };
    getOrders();
  }, [user]);

  return (
    <div>
      <div class="overflow-x-auto flex items-center justify-center my-10">
        <table class="table table-zebra lg:w-1/4 md:w-1/2">
          <thead>
            <tr>
              <th>Sl.No.</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map ( (t, index) => <tr>
                <th>{index + 1}</th>
                <td>{t.tool}</td>
                <td>{t.quantity}</td>
                <td>${t.price}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
