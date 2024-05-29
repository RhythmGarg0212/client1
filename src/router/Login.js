import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import teacher from "../assets/img/teacher.png";
import student from "../assets/img/student.png";
import bg from "../assets/img/meetup1.jpg";
function Login() {
  const [flag, setFlag] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setFlag(true);
  }, []);
  return (
    <div
      className={`bg-cover bg-center bg-no-repeat w-screen h-screen`}
      // style={
      //   flag
      //     ? {
      //         backgroundImage: `url(${bg})`,
      //       }
      //     : { backgroundColor: "white" }
      // }
    >
      {flag ? (
        <div className="max-w-[900px] mx-auto justify-between items-center font-mullish flex  flex-wrap gap-10 ">
          <div className="w-[400px] mt-10 h-[400px] bg-yellow-400  flex justify-center items-center rounded-md ">
            <div
              onClick={() => {
                setFlag(!flag);
                navigate("/login/teacher");
              }}
              className="border border-green-500 bg-[#597beb] flex flex-col justify-center items-center cursor-pointer rounded-md w-[380px] h-[380px] p-6 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h1 className="font-bold text-2xl mb-4 text-center text-white">
                Login As{" "}
                <span className="text-violet-800 text-3xl">Teacher</span>
              </h1>
              <img src={teacher} alt="" width="120px" />
              <p className="text-lg text-deepBlueHead mb-6 text-center">
                "Educating Today for a Brighter Tomorrow"
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400">
                Login Now
              </button>
            </div>
          </div>

          <div className="w-[400px] mt-8 h-[400px] bg-green-400 flex justify-center items-center rounded-md ">
            <div
              onClick={() => {
                setFlag(!flag);
                navigate("/login/student");
              }}
              className="border border-green-500 bg-[#ba5cec] flex flex-col justify-center items-center cursor-pointer rounded-md w-[380px] h-[380px] p-6 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h1 className="font-bold text-2xl mb-4 text-center text-white">
                Login As <span className="text-red-800 text-3xl">Student</span>
              </h1>
              <img
                src={student}
                alt="Student"
                className="w-24 h-24 mb-6 rounded-full"
              />
              <p className="text-lg text-deepBlueHead mb-6 text-center">
                "Unlock your potential, embrace the journey."
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400">
                Login Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default Login;
