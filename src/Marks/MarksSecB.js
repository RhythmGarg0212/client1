import React, { useEffect, useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import { TeacherSubject, getItem } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

function MarksSecB() {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(true);
  const subject = getItem(TeacherSubject);
//   console.log(subject);
  const [marks, setMarks] = useState([{}]);

  const BB = () => {
    setTimeout(() => {
      setFlag(false);
      navigate("/login");
    }, 1000);
  };

  if (subject == null) {
    BB();
  }

  const fetchMarks = async () => {
    try {
      const user = await axiosClient.post(`attendance/${subject}`, {
        sec: "B",
      });

      // Initialize marks to zero if not present
      const updatedMarks = user?.result?.secB.map((item) => ({
        ...item,
        t1: item.t1 || "0",
        t2: item.t2 || "0",
        t3: item.t3 || "0",
      }));

      setMarks(updatedMarks || [{}]);
    } catch (error) {
      console.error("Error fetching marks:", error);
    }
  };

  useEffect(() => {
    if (flag) {
      fetchMarks();
    }
  }, []);

  async function handleUpdate() {
    try {
      const user = await axiosClient.post(`marks/${subject}`, {
        sec: "B",
        marks,
      });

      alert("Submitted");
    } catch (error) {
      alert(error);
    }
  }

  const handleMarksChange = (index, field, value) => {
    const updatedMarks = [...marks];
    updatedMarks[index] = { ...updatedMarks[index], [field]: value };
    setMarks(updatedMarks);
  };

  return (
    <>
      {flag ? (
        <div className="flex bg-white flex-col gap-2 pl-10 mt-4 border-spacing-2 border-2 p-4 ">
          <div className="w-[100%]  flex gap-2 bg-green-500 p-2 py-3 rounded-sm mb-3 ">
            <h1 className="w-[100px]">MIS</h1>
            <h1 className="w-[300px]">Name</h1>
            <h1 className="w-[200px] pl-16">T1</h1>
            <h1 className="w-[150px] pl-4">T2</h1>
            <h1 className="w-[200px]">Endsem</h1>
          </div>

          <div>
            {marks?.map((item, index) => {
              if(index==0) return '';
              return (
                <div key={index}>
                <hr
                  style={{ width: "100%", height: "2px" }}
                  className="bg-gray-700"
                />
                <div className="flex gap-2 py-2  items-center ">
                  <h1 className="w-[100px]">{item?.MIS}</h1>
                  <h1 className="w-[300px]">{item?.name}</h1>

                  <input
                    type="text"
                    className="w-[70px] border border-black mx-10 outline-none"
                    value={item.t1}
                    onChange={(e) =>
                      handleMarksChange(index, "t1", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    className="w-[70px] border border-black mx-10 outline-none"
                    value={item.t2}
                    onChange={(e) =>
                      handleMarksChange(index, "t2", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    className="w-[70px] border border-black mx-10 outline-none"
                    value={item.t3}
                    onChange={(e) =>
                      handleMarksChange(index, "t3", e.target.value)
                    }
                  />
                </div>
              </div>
              )
            })}
          </div>

          <button
            className="bg-red-500 w-[200px] py-4 mt-8 mb-10  font-bold text-2xl  rounded-md hover:scale-110 transition-all duration-500 flex justify-center items-center mx-auto  "
            onClick={handleUpdate}
          >
            Submit
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default MarksSecB;
