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

function App() {
  return (
    <div className="flex flex-col min-h-screen">
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
        <Route path="/dashboard" element={<RequiredAuth><Dashboard /></RequiredAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="my_order" element={<MyOrder></MyOrder>}></Route>
          <Route path="add_reviews" element={<AddReviews></AddReviews>}></Route>
          <Route path="manage_all_products" element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path="make_admin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="manage_products" element={<ManageProducts></ManageProducts>}></Route>
          <Route path="add_product" element={<AddProduct></AddProduct>}></Route>
        </Route>

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<PortFolio />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
