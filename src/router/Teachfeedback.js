
import React, { useState, useEffect } from "react";
import Data from "../Feedback/Sem2/data.json";
import { axiosClient } from "../utils/axiosClient";
import { Link, Outlet } from "react-router-dom";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";






function Feedback() {

  const [data, setData] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from data.json (assuming it's in the public folder)
        const response = await axiosClient.get("http://localhost:8080/feedback/cnv");
        const jsonData = await response.json();

        // Set the fetched data to state
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only on component mount



  const getIntroOfPage = label => {
    if (label === "Depth") {
      return "Coverage and depth of the subject was";
    } else if (label === "Skill") {
      return "Value addition towards knowledge & Skill upgradation";
    } else if (label === "Clarity") {
      return "In terms of organization, clarity and presentation of the fundamental concepts, the lectures were";
    } else if (label === "Presentation") {
      return " Instructor's oral presentation in terms of audibility and articulation was";
    } else if (label === "Encourage") {
      return "Encouragement given by the instructor to think and reason,logically and objectively";
    } else if (label === "Availability") {
      return "The availability and approachability of the Instructors outside the class was";
    } else if (label === "Exam") {
      return "Examination were of appropriate level / length";
    } else if (label === "Marks") {
      return "The marks given were fair and transparent";
    }
    return "";
  };
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-gray-800 rounded-lg px-3 py-1">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          {/* <p className="intro">{getIntroOfPage(label)}</p> */}
          {/* <p className="desc">Anything you want can be displayed here.</p> */}
        </div>
      );
    }

    return null;
  };





  const data1 = [
    {
      name: "Depth",
      uv: 155,
      Rating: 155,
      amt: 170,
    },
    {
      name: "Encourage",
      uv: 170,
      Rating: 160,
      amt: 170,
    },
    
    {
      name: "Clarity",
      uv: 170,
      Rating: 143,
      amt: 170,
    },
    {
      name: "Marks",
      uv: 120,
      Rating: 130,
      amt: 120,
    },
    {
      name: "Skill",
      uv: 170,
      Rating: 111,
      amt: 170,
    },
    {
      name: "Presentation",
      uv: 170,
      Rating: 135,
      amt: 170,
    },

    {
      name: "Exam",
      uv: 150,
      Rating: 150,
      amt: 130,
    },
    {
      name: "Availability",
      uv: 170,
      Rating: 140,
      amt: 170,
    },
  ];

  
  return (
    <div>
    <div className="flex justify-center mt-6 items-center mx-auto px-5 gap-10 ">
      {Data.map(item => {
        return (
          <Link
            to={`${item?.link}`}
            className="max-w-[200px]  rounded-md px-3 py-1 text-xl text-white  bg-pink-700 hover:bg-pink-500 transition-all duration-500 text-center "
          >
            <h1>{item?.name}</h1>
          </Link>
        );
      })}
    </div>


      <Outlet />

      {/* Render BarChart with dynamic data */}
      <div className="flex mt-10 justify-center items-center mx-auto">
        <BarChart
          width={850}
          height={520}
          data={data1} // Use fetched data for chart
          margin={{
            top: 5,
            right: 40,
            left: 20,
            bottom: 5,
          }}
          className="text-white text-xl"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{
              fill: "white",
            }}
          />
          <YAxis
            label={{
              value: "Number of Students",
              angle: -90,
              position: "insideLeft",
              fontSize: 20,
              fill: "white",
            }}
            tick={{
              fill: "white",
            }}
          />
          <Tooltip
            content={<CustomTooltip />}
            style={{ backgroundColor: "gold" }}
          />
          <Legend />
          <Bar dataKey="Rating" barSize={25} fill="gold" />
        </BarChart>
      </div>
    </div>
  );
}








export default Feedback ;
