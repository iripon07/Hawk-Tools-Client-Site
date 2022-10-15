import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Footer from "./Pages/Shared/Footer";
import SignIn from "./Pages/SignIn/SignIn";
import Registration from "./Pages/SignIn/Registration";
import Blogs from "./Pages/Blogs/Blogs";
import PortFolio from "./Pages/PortFolio/PortFolio";

import Order from "./Pages/Order/Order";
import RequiredAuth from "./Pages/SignIn/RequiredAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyOrder from "./Pages/Dashboard/MyOrder";
import AddReviews from "./Pages/Dashboard/AddReviews";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import AddProduct from "./Pages/Dashboard/AddProduct";
import Payment from "./Pages/Dashboard/Payment";
import DotLoader from "react-spinners/DotLoader";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <div className="min-h-screen">
      {loading ? (
        <div className=" flex justify-center items-center w-full h-screen">
          <DotLoader  size={100} color={"#056608"} loading={loading} />
        </div>
      ) : (
        <>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/order/:_id"
              element={
                <RequiredAuth>
                  <Order />
                </RequiredAuth>
              }
            />
            <Route
              path="/dashboard"
              element={
                <RequiredAuth>
                  <Dashboard />
                </RequiredAuth>
              }
            >
              <Route index element={<MyProfile></MyProfile>}></Route>
              <Route path="my_order" element={<MyOrder></MyOrder>}></Route>
              <Route
                path="add_reviews"
                element={<AddReviews></AddReviews>}
              ></Route>
              <Route
                path="manage_all_orders"
                element={<ManageAllOrders></ManageAllOrders>}
              ></Route>
              <Route
                path="make_admin"
                element={<MakeAdmin></MakeAdmin>}
              ></Route>
              <Route
                path="manage_products"
                element={<ManageProducts></ManageProducts>}
              ></Route>
              <Route
                path="add_product"
                element={<AddProduct></AddProduct>}
              ></Route>
              <Route path="payment/:id" element={<Payment></Payment>}></Route>
            </Route>

            <Route path="/blogs" element={<Blogs />} />
            <Route path="/portfolio" element={<PortFolio />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
          <Footer></Footer>
        </>
      )}

      <ToastContainer />
    </div>
  );
}

export default App;
