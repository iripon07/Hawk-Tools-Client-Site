import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-64 bg-gray-200 text-primary pt-8">
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/my_order">My Order</Link>
          </li>
          <li>
            <Link to="/dashboard/add_reviews">Add Review</Link>
          </li>
          <li>
            <Link to="/dashboard/manage_all_products">Manage All Products</Link>
          </li>
          <li>
            <Link to="/dashboard/make_admin">Make Admin</Link>
          </li>
          <li>
            <Link to="/dashboard/manage_products">Manage Products</Link>
          </li>
          <li>
            <Link to="/dashboard/add_product">Add Products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
