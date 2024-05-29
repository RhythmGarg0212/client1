import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { Key_Access_Token, getItem } from "../utils/localStorage";

function Navbar({ NavbarItem }) {
  const AA = getItem(Key_Access_Token);
  const location = useLocation(); // Get current location
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    // Set Navbar visibility based on current location
    if (location.pathname === "/budgets") {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }
  }, [location]);

  return (
    <div>
      {isNavbarVisible && (
        <div
          className="w-full  bg-[#957fec] text-xl "
          style={{ textShadow: "10px 10px 10px rgba(0,0,0,.2)" }}
        >
          <div className="max-w-[1300px] z-50  mx-auto overflow-hidden flex justify-evenly items-center   ">
            <div>
              <a href="#">
                <img src={logo} alt="" width=" 250px" height="200px" />
              </a>
            </div>

            <ul className="flex gap-10 mx-auto items-center mt-2  font-mullish text-deepBlue justify-center text-lg">
              {NavbarItem?.map(item => {
                return (
                  <li key={item.link}>
                    <Link
                      to={item.link}
                      className=" hover:underline transition-all duration-500"
                    >
                      {item.tag}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div>
              {AA ? (
                <Link
                  to="/logout"
                  className="font-mullish bg-red-500 rounded-xl p-2  hover:bg-red-400 transition-all  duration-300 text-white   text-xl"
                >
                  {" "}
                  Logout{" "}
                </Link>
              ) : (
                <ul className="flex gap-10 mx-auto items-center  font-mullish justify-center text-2xl">
                  <li>
                    <Link
                      to="/signup"
                      className="bg-yellow-500 rounded-lg p-2 hover:bg-yellow-400 transition-all duration-300  text-white"
                    >
                      Signup
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="bg-green-500 rounded-lg p-2 hover:bg-green-400 transition-all duration-300  text-white"
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
