import React, { useEffect, useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import { TeacherSubject, getItem } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
function Show() {
  const navigate = useNavigate();
  const subject = getItem(TeacherSubject);
  console.log(subject);
  if (subject == null) {
    navigate("/login");
  }
  const [data, setData] = useState([{}]);
  const [cnt, setcnt] = useState(0);
  const [present, setPresent] = useState([false]);

  useEffect(async () => {
    const user = await axiosClient.post(`attendance/${subject}`, {
      sec: "B",
    });
    setData(user?.result?.secB);
    console.log(user);
    // console.log(user.result.secA);
  }, []);

  return (
    <div className="flex flex-col gap-2 ">
      <div className="w-[100%] flex gap-2">
        <h1 className="w-[100px]">MIS</h1>
        <h1 className="w-[300px]">Name</h1>
        <h1 className="w-[100px]">Absent</h1>
        <h1 className="w-[100px]">Present</h1>
        <h1 className="w-[100px]">Percentage</h1>
        <h1 className="w-[100px]">TotalClass</h1>
        <h1 className="w-[100px]">Today</h1>
      </div>
      
      <div>
        {data?.map((item, index) => {
          if (index === 0) {
            return "";
          }
          // console.log(index);
          // var present = false;
          // const handleClick = e => {
            // e.preventDefault();
          //   console.log("vipin");
          //   setcnt(cnt+1);
          //   console.log(cnt);
          //   present = !present;
          // };

          return (
            <>
            <hr style={{ color: "black", width: "100%", height: "2px" }} />
              <div className="flex gap-2 py-2  items-center ">
                
                <h1 className="w-[100px]">{item?.MIS}</h1>
                <h1 className="w-[300px]">{item?.name}</h1>
                <h1 className="w-[100px]">{item?.currentAbsent}</h1>
                <h1 className="w-[100px]">{item?.currentPresent}</h1>
                <h1 className="w-[100px]">{item?.currentPercentage}</h1>
                <h1 className="w-[100px]">{item?.totalClass}</h1>

                <button
                  className={` ${
                    present[index] ? " bg-green-400" : "bg-red-500"
                  }   w-[50px] py-1 rounded-md `}
                  onClick={() => {
                    present[index] = !present[index];
                    setcnt(!cnt);
                    console.log(cnt);
                    item.current = !item.current;
                  }}
                >
                  {item?.current ? "P" : "A"}
                </button>
              </div>
              
            </>
          );
        })}
      </div>

      {/* <div className="flex gap-3  items-center ">
        {data?.map((item, index) => {
          if (index == 0) return "";
          return (
            <>
              <div className="flex gap-3  items-center ">
                {item?.current ? "P" : "F"}
              </div>
            </>
          );
        })}
      </div> */}
    </div>
  );
}

export default Show;
