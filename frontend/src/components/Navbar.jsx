import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../App.css";
export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const navigate = useNavigate();
  const [status, setStatus] = useState(false);

  const token = JSON.parse(localStorage.getItem("token"));

 /*  const check = () => {
    if (token.length === 0 || token === undefined) {
      console.log("if check");
      setStatus(false);
    } else {
      console.log("else  check");
      setStatus(true);
    }
  }; */
  const logout = async (e) => {
    axios
      .get(`http://127.0.0.1:8000/api/logoutUser`, {
        headers: { Authorization: `Bearer ${token.token}` },
      })
      .then((e) => {
        console.log(e);
        localStorage.removeItem("token");
        setStatus(false);
        navigate("/login");
      })
      .catch(() => {
        console.log("Internal Error ... Please Check Navbar ...", e);
        
      });
  };
 /*  useEffect(() => {
    check();
  }, [status]); */
  return (
    <>
      <nav
        id="nav"
        className="relative flex flex-wrap items-center justify-between px-2 py-3  mb-3"
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/Home"
            >
              BLOG POST
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavLink
                  to={"/Allposts"}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">All Posts</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/Dashboard"}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Dashboard</span>
                </NavLink>
              </li>
              <div className="nav-item">
                {token ? (
                  <button
                    onClick={logout}
                    className="text-sm font-bold leading-relaxed inline-block  py-2 whitespace-nowrap uppercase text-white"
                    href="#pablo"
                  >
                    Logout
                  </button>
                ) : (
                  <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li className="nav-item">
                    <NavLink
                      to={"/Register"}
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                      <span className="ml-2">Register</span>
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink
                      to={"/Login"}
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                      <span className="ml-2">Login</span>
                    </NavLink>
                    </li>
                  </ul>
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
