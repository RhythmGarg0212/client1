import React, { useState, useEffect } from "react";
import { axiosClient } from "../utils/axiosClient";
import { getItem, setItem } from "../utils/localStorage";
import { Form, Input, Radio } from "antd";

function RespondToPoll({ pollId }) {
  const [poll, setPoll] = useState([{}]);
  const [answer, setAnswer] = useState(false);
  const [Somethings, setSomethings] = useState("");
  useEffect(() => {
    const fetchPoll = async () => {
      try {
        const response = await axiosClient.get(`polls/get`);
        setPoll(response.result[0]);
        setItem(pollId, response.result[0]._id);
        // console.log(response.result._id);
      } catch (error) {}
    };
    fetchPoll();
  }, []);
  const handleAnswerChange = e => {
    setAnswer(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Here you would need an endpoint to handle saving responses
      const id = getItem(pollId);
      const response = await axiosClient.put("/polls/update", {
        id,
        answer,
        somethings: Somethings,
      });
      alert("Poll Submitted")
    } catch (error) {}
  };
  return (
    <div>
      <div className="bg-gray-800 min-h-[300px] text-white gap-3 mt-5 rounded-md p-4 flex flex-col justify-center items-center mx-auto flex-wrap max-w-[500px] text-lg">
        <h1>Teacher Email : {poll?.email}</h1>
        <h1>Semester : {poll?.semester}</h1>
        <h1>Section : {poll?.section}</h1>
        <h1>Question : {poll?.question}</h1>
      </div>
      <div className="  shadow-md shadow-red-500 px-5 py-2 mt-10 max-w-[300px] flex flex-col mx-auto justify-center items-center">
        <div className=" flex gap-16 mx-auto justify-center items-center text-lg">
          <Radio
            className="bg-green-500 p-1 px-5 rounded"
            onChange={handleAnswerChange}
            value="Yes" // Set the value for this option
            checked={answer === "Yes"} // Control the checked attribute
            name="answer"
          >
            Yes
          </Radio>
          <Radio
            className="bg-red-500 p-1 px-5 rounded"
            onChange={handleAnswerChange}
            value="No" // Set the value for this option
            checked={answer === "No"} // Control the checked attribute
            name="answer"
          >
            No
          </Radio>
        </div>

        <Form
          className="px-5 flex flex-col justify-center items-center"
          onSubmitCapture={handleSubmit}
        >
          <Form.Item
            name="Somethings"
            rules={[
              {
                required: true,
                message: "Please input your Somethings!",
              },
            ]}
          >
            <Input
              class=""
              placeholder="Somethings"
              className="min-w-[250px] py-3 mt-3"
              onChange={e => setSomethings(e.target.value)}
            />
          </Form.Item>
          <button
            className="bg-blue-500 p-1 px-5 rounded "
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}

export default RespondToPoll;
