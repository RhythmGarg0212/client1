import { useLocation } from "react-router-dom";
import subjectData from "../assets/stats.json";
import { useEffect, useState } from "react";

function ShowStats({ data }) {
  const [sem, setSem] = useState([]);
  const location = useLocation();
  // const data = location.state?.result;

  useEffect(() => {
    if (data && data.data) {
      const newSemData = data?.data?.map(item => {
        const res = subjectData.find(x => x.sem === item.sem);
        item.s1 = "  " + res.s1 + "   " + item.s1;
        item.s2 = "  " + res.s2 + "    " + item.s2;
        item.s3 = "  " + res.s3 + "    " + item.s3;
        item.s4 = "  " + res.s4 + "    " + item.s4;
        item.s5 = "  " + res.s5 + "    " + item.s5;
        item.s6 = "  " + res.s6 + "    " + item.s6;

        if (item.s7) {
          item.s7 = "  " + res.s7 + "    " + item.s7;
        }
        return { ...res };
      });

      setSem(newSemData);
    }
  }, [data]);

  return (
    <div className="h-[120vh] z-50  bg-gradient-to-b from-indigo-900 to-purple-900">
      <div className="flex flex-wrap mb-5  text-yellow-200   mt-10 mx-auto justify-center items-center gap-8  ">
        {data?.data?.map((item, index) => (
          <div
            key={index}
            className="flex shadow-orange-400 shadow-md flex-col w-[400px] h-[380px] bg-slate-600 rounded-md px-3 py-3 "
          >
            <h1 className=" text-center text-white text-2xl mb-1 ">
              Semester : {item.sem}
            </h1>
            <div className=" text-center text-xl mb-2 ">
              <h1>Name : {item.name}</h1>
              <h1>MIS : {item.mis}</h1>
              <h1>SGPA : {item.CGPA}</h1>
              <h1>Attendance : {item.Attendance}</h1>
            </div>
            <hr />
            <h1 className=" text-center text-white text-2xl mt-1 ">Marks</h1>
            <div>
              <h1>{item.s1}</h1>
              <h1>{item.s2}</h1>
              <h1>{item.s3}</h1>
              <h1>{item.s4}</h1>
              <h1>{item.s5}</h1>
              <h1>{item.s6}</h1>
              {item.s7 && <h1>{item.s7}</h1>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowStats;

// import React, { useState } from "react";
// import student from "../assets/statStudnet.json";
// import { axiosClient } from "../utils/axiosClient";
// import subjectData from "../assets/stats.json";
// function Stat() {
//   const [sem, setSem] = useState([]);
//   // const [data, setData] = useState([{}]);
//   const [data, setData] = useState([{}]);
//   const [flag, setFlag] = useState(true);
//   const handleSubmit = async mis => {
//     try {
//       const user = await axiosClient.post("/stats/getStat", { mis });
//       const res = user.result;
//       // navigate("/stats/show", { state: { result: res.result } });
//       setData(res);
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   const handleStudentClick = studentData => {
//     handleSubmit(studentData.mis);
//     setFlag(false);
//   };

//   return (
//     <div className="ml-10 mt-5">
//       {flag ? (
//         <div className="ml-10 mt-5 ">
//           <div className="flex flex-row text-xl mb-2 text-white bg-green-400 rounded-sm px-4 pt-2  ">
//             <h1 className="w-[200px]">Name </h1>
//             <h1 className="w-[200px]">MIS </h1>
//           </div>
//           <div>
//             {student?.map(item => {
//               return (
//                 <div
//                   className="flex flex-row text-yellow-300 mt-1 hover:bg-gray-600 px-2 py-2 rounded-sm  cursor-pointer  "
//                   onClick={() => handleStudentClick(item)}
//                 >
//                   <h1 className="w-[200px]">{item?.name}</h1>
//                   <h1 className="w-[200px]">{item?.mis}</h1>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       ) : (
//         <div className="h-[120vh] bg-gradient-to-b from-indigo-900 to-purple-900">
//           <div className="flex flex-wrap mb-5  text-yellow-200   mt-10 mx-auto justify-center items-center gap-8  ">
//             {data?.data?.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col w-[400px] h-[380px] bg-slate-600 rounded-md px-3 py-3 "
//               >
//                 <h1 className=" text-center text-white text-2xl mb-1 ">
//                   Semester : {item.sem}
//                 </h1>
//                 <div className=" text-center text-xl mb-2 ">
//                   <h1>Name : {item.name}</h1>
//                   <h1>MIS : {item.mis}</h1>
//                   <h1>SGPA : {item.CGPA}</h1>
//                   <h1>Attendance : {item.Attendance}</h1>
//                 </div>
//                 <hr />
//                 <h1 className=" text-center text-white text-2xl mt-1 ">
//                   Marks
//                 </h1>
//                 <div>
//                   <h1>{item.s1}</h1>
//                   <h1>{item.s2}</h1>
//                   <h1>{item.s3}</h1>
//                   <h1>{item.s4}</h1>
//                   <h1>{item.s5}</h1>
//                   <h1>{item.s6}</h1>
//                   {item.s7 && <h1>{item.s7}</h1>}
//                 </div>
//               </div>
//             ))}
//       
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Stat;
