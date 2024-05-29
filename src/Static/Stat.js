import React, { useState } from "react";
import student from "../assets/statStudnet.json";
import { axiosClient } from "../utils/axiosClient";
import ShowStats from "./ShowStat";
import Chart from "./Chart";
function Stat() {
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState([{}]);
  const handleSubmit = async mis => {
    try {
      const res = await axiosClient.post("/stats/getStat", { mis });
      // navigate("/stats/show", { state: { result: res.result } });
      // setData([{}]);
      setData(res.result);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleStudentClick = studentData => {
    handleSubmit(studentData.mis);
    setFlag(true);
  };
  const toggle = e => {
    setFlag(false);
  };
  return (
    <div className="">
      <div className="ml-10 mt-5  ">
        <div className="flex flex-wrap gap-5">
          {student?.map(item => {
            return (
              <div
                className="flex flex-row bg-gray-800 rounded-lg  text-yellow-300 w-[200px] mt-1 hover:bg-gray-600 px-2 py-2   cursor-pointer  "
                onClick={() => handleStudentClick(item)}
              >
                <h1 className="w-[200px]">{item?.name}</h1>
                <h1 className="w-[200px]">{item?.mis}</h1>
              </div>
            );
          })}
        </div>
      </div>

      {flag && (
        <div>
          <h1
            onClick={toggle}
            className="w-[100px] cursor-pointer bg-slate-600 text-center text-white text-xl rounded-md top-[200px] p-2 absolute right-10"
          >
            Close
          </h1>
          <ShowStats data={data} />
          <Chart data={data.data} />
        </div>
      )}
    </div>
  );
}

export default Stat;
