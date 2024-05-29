import React, { useEffect, useState } from "react";
import { getItem, teacherEmail } from "../utils/localStorage";
import { axiosClient } from "../utils/axiosClient";

function ShowPoll() {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    const fetchPoll = async () => {
      try {
        const response = await axiosClient.get(`polls/get`);
        setData(response.result[0]);
        // console.log(response.result[0]);
      } catch (error) {}
    };
    fetchPoll();
  }, []);

  return (
    <div className=" min-h-[50vh]">
      <div className="flex shadow-md gap-5  text-xl text-white shadow-yellow-500 max-w-[500px] mt-10 flex-col mx-auto justify-center items-center p-3 px-5 ">
        <h1 className=" text-2xl">Polls Responses</h1>
        <div className="flex flex-col gap-2">
          <h1>
            {" "}
            <span className=" bg-yellow-400 rounded mr-7 p-1 px-4">
              Question
            </span>{" "}
            {data?.question}
          </h1>
          <hr
            style={{ width: "100%", height: "2px" }}
            className="bg-gray-700"
          />
          <h1>
            {" "}
            <span className=" bg-green-500 rounded mr-7 p-1 px-4">
              Yes
            </span>{" "}
            {data?.yes}
          </h1>
          <hr
            style={{ width: "100%", height: "2px" }}
            className="bg-gray-700"
          />
          <h1>
            {" "}
            <span className=" bg-red-500 rounded mr-7 p-1 px-4">No</span>{" "}
            {data?.no}
          </h1>
          <hr
            style={{ width: "100%", height: "2px" }}
            className="bg-gray-700"
          />
          <div className=" border-2 rounded-md p-4 w-[300px]">
            <h1 className=" bg-gray-700 rounded  mb-4 p-1 px-4">
              Somethings else
            </h1>
            <hr
              style={{ width: "100%", height: "2px" }}
              className="bg-gray-700"
            />
            <div>
              {data?.somethings?.map(item => {
                return <p>{item}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowPoll;
