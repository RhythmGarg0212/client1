import React, { useEffect, useState } from "react";
import sem2 from "../assets/student/2sem.json";
import sem4 from "../assets/student/4sem.json";
import sem6 from "../assets/student/6sem.json";
import { getItem, StudentSem, StudentMIS } from "../utils/localStorage";
import { axiosClient } from "../utils/axiosClient";
import Marks from "./Marks";
function StudentShowMarks() {
  const [data, setData] = useState([]);
  const [sub, setSub] = useState("");
  const [marks, setMarks] = useState([]);
  const currentSem = getItem(StudentSem);
  const mis = getItem(StudentMIS);

  useEffect(() => {
    if (currentSem == 2) {
      setData(sem2);
    }
    if (currentSem == 4) {
      setData(sem4);
    }
    if (currentSem == 6) {
      setData(sem6);
    }
  }, []);

  async function handleSubmit(e, subject) {
    e.preventDefault();
    try {
      // const result = await axiosClient.post(`/attendance/student/dsa`, {
      const result = await axiosClient.post(`/attendance/student/${subject}`, {
        mis,
      });
      //   console.log(result.result.student[0]);

      setMarks(result.result.student[0]);
    } catch (err) {}
  }

  return (
    <div className="pb-10 overflow-hidden mt-4">
      <div className="mx-auto max-w-[1400px] text-center text-white flex flex-wrap gap-6 justify-center items-center mt-4">
        {data.map(item => {
          return (
            <div
              onClick={e => {
                setSub(item.name);
                const subject = item.link;
                handleSubmit(e, subject);
              }}
              className="bg-yellow-800 cursor-pointer hover:bg-yellow-700 hover:scale-110  transition-all duration-300 p-1 px-3 rounded-lg text-xl text-center "
            >
              <h1>{item.name}</h1>
            </div>
          );
        })}
      </div>
      <div className=" text-center text-3xl text-pretty  text-white bg-gray-800  shadow-yellow-400 shadow-md  max-w-[450px] justify-center mx-auto rounded-xl p-3 mt-10">
        <h1>{marks.name}</h1>
      </div>
      <div className=" text-center text-3xl text-pretty  text-white bg-slate-800  shadow-blue-400 shadow-md  max-w-[200px] justify-center mx-auto rounded-xl p-3 mt-8">
        <h1>{sub}</h1>
      </div>
      <div className="flex mt-10 justify-evenly md:px-28">
        <div className="flex flex-col flex-wrap  justify-evenly items-center h-[200px]  w-[200px] rounded-lg p-3 bg-[#201f1f] shadow-md shadow-green-500 text-white text-2xl">
          <h1>Term 1</h1>
          <h1 className=" text-5xl">{marks.t1}</h1>
        </div>
        <div className="flex flex-col flex-wrap justify-evenly items-center h-[200px]  w-[200px] rounded-lg p-3 bg-[#201f1f] shadow-md shadow-red-500 text-white text-2xl">
          <h1>Term 2</h1>
          <h1 className=" text-5xl">{marks.t2}</h1>
        </div>
        <div className="flex flex-col flex-wrap justify-evenly items-center h-[200px]   w-[200px] rounded-lg p-3 bg-[#201f1f] shadow-md shadow-white text-white text-2xl">
          <h1>End Term</h1>
          <h1 className=" text-5xl">{marks.t3}</h1>
        </div>
      </div>

      <div className=" mt-10 pb-10 mx-auto  flex-col flex-wrap gap-4  shadow-emerald-400 shadow-md   justify-center items-center flex bg-[#0E0D27] text-white text-4xl rounded-xl w-[200px] h-[200px]">
        <h1>Total</h1>
        <h1>{marks.t1+marks.t2+marks.t3} </h1>
      </div>
      <div></div>
    </div>
  );
}

export default StudentShowMarks;
