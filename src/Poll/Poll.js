// src/components/CreatePoll.js
import React, { useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import { setItem, teacherEmail } from "../utils/localStorage";
import ShowPoll from "./ShowPoll";
function CreatePoll() {
  const [flag,setFlag]=useState(false);
  const [poll, setPoll] = useState({
    email: "",
    sem: "",
    sec: "",
    question: "",
    options: ["Yes", "No", "Something else"], // Predefined options
  });

  const handleChange = e => {
    setPoll({ ...poll, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    setItem(teacherEmail, poll.email);
    e.preventDefault();
    try {
      const response = await axiosClient.post("/polls/create", { poll });
      alert("Poll Created Successfully!");
    } catch (error) {
      console.error("Failed to create poll:", error);
    }
  };

  return (
    <div className="pb-10">
      <form
        onSubmit={handleSubmit}
        className="flex border-2  py-4 justify-center items-center shadow-md shadow-green-400  flex-col mx-auto max-w-[600px] mt-8"
      >
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={poll.email}
        />
        <input
          type="text"
          name="sem"
          placeholder="Semester"
          onChange={handleChange}
          value={poll.sem}
        />
        <input
          type="text"
          name="sec"
          placeholder="sec"
          onChange={handleChange}
          value={poll.sec}
        />
        <input
          type="text"
          name="question"
          placeholder="Question"
          onChange={handleChange}
          value={poll.question}
        />
        <div className="bg-white p-3 justify-center items-center rounded-lg flex ">
          <p>Options:</p>
          <ul className="bg-gray-500 p-3 rounded-md flex gap-6 ">
            {poll.options.map((option, idx) => (
              <li key={idx}>{option}</li> // Display options as a list
            ))}
          </ul>
        </div>
        <button
          type="submit"
          className=" bg-green-500 p-3 mt-3 text-white text-lg rounded-md"
        >
          Create Poll
        </button>
      </form>

      <div>
        <ShowPoll />
      </div>
    </div>
  );
}

export default CreatePoll;
