import React from "react";
import {
  FaAd,
  FaBook,
  FaBookOpen,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaPaypal,
  FaShoppingCart,
  FaUser,
  FaUtensilSpoon,
} from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensilSpoon></FaUtensilSpoon>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook>
                  Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUser></FaUser>
                  All Users
                </NavLink>
              </li>
              
            </>
          ) : (
            <>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaPaypal></FaPaypal>
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addReview">
                  <FaAd></FaAd>
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myBooking">
                  <FaBookOpen></FaBookOpen>
                  My Booking
                </NavLink>
              </li>
            </>
          )}

          {/* Shared items */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <MdOutlineMenu></MdOutlineMenu>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
