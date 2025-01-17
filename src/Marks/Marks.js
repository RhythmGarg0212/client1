import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

function Marks() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="max-w-[900px] mx-auto justify-center mt-10 items-center font-mullish flex  flex-wrap gap-10 ">
        <div
          onClick={() => {
            navigate("/marks/secA");
          }}
          className="border h-[20px] border-green-500 bg-[#8aadea] flex flex-col justify-center items-center cursor-pointer rounded-md  p-6 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <h1 className="font-bold text-2xl  text-center text-green-700">
            <span className="text-violet-800">Section A</span>
          </h1>
        </div>
        <div
          onClick={() => {
            navigate("/marks/secB");
          }}
          className="border h-[20px] border-green-500 bg-[#8aadea] flex flex-col justify-center items-center cursor-pointer rounded-md  p-6 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <h1 className="font-bold text-2xl  text-center text-green-700">
            <span className="text-violet-800">Section B</span>
          </h1>
        </div>
        
      </div>

      <Outlet />
    </div>
  );
}

export default Marks;
