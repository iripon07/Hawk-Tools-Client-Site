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

function App() {
  return (
    <div>
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
