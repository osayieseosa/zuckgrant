import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import AppContext from "../context/AppProvider";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import { jwtDecode } from "jwt-decode";

const Drawer = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const decoded = auth?.length ? jwtDecode(auth) : undefined;
  const [isLoading, setIsLoading] = useState();
  const { companyName } = useContext(AppContext);

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      console.log(decoded.UserInfo);
      await axios.get(`/users/${decoded?.UserInfo?.name}`, {
        withCredentials: true,
      });
      setAuth({});
      localStorage.setItem("token", JSON.stringify({}));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 font-bold text-sm justify-between">
            <Link to="/" className="w-max">
              {companyName}
            </Link>
            {auth?.length ? (
              <button
                className="text-xs btn btn-secondary"
                onClick={handleLogout}
              >
                {isLoading ? "Loading..." : "Logout"}
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/winners">Lottery Winners</Link>
              </li>
              <li>
                <Link to="/terms">Terms</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <a href="tel:+19282507054">Tel</a>
              </li>
              {auth?.length ? (
                <li>
                  <Link to="/admin">Admin Page</Link>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <Outlet />
        <Footer />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/winners">Lottery Winners</Link>
          </li>
          <li>
            <Link to="/terms">Terms</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <a href="tel:+19282507054">Tel</a>
          </li>
          {auth?.length && (
            <li>
              <Link to="/admin">Admin Page</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
