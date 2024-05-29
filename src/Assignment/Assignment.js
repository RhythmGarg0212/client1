import React, { useState, useEffect } from "react";

const Assignment = () => {
  const [AssignmentText, setAssignmentText] = useState("");
  const [deadline, setDeadline] = useState("");
  const [topic, setTopic] = useState("");
  const [submissionType, setSubmissionType] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setShowForm(true);
  }, []);

  const handleAssignmentChange = event => {
    setAssignmentText(event.target.value);
  };

  const handleDeadlineChange = event => {
    setDeadline(event.target.value);
  };

  const handleTopicChange = event => {
    setTopic(event.target.value);
  };

  const handleSubmissionTypeChange = event => {
    setSubmissionType(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Handle form submission here
    alert(
      "Assignment submitted:\n\n" +
        "Assignment Text: " +
        AssignmentText +
        "\n" +
        "Deadline: " +
        deadline +
        "\n" +
        "Topic: " +
        topic +
        "\n" +
        "Submission Type: " +
        submissionType
    );
    // Reset form fields
    setAssignmentText("");
    setDeadline("");
    setTopic("");
    setSubmissionType("");
  };

  return (
    <div className="flex bg-gradient-to-b pb-5 from-indigo-900 to-purple-900  justify-center mt-12 mb-6 max-h-[100vh] items-center w-full">
      <div
        className=" text-white bg-gray-800 px-10 rounded-lg shadow-xl py-5  w-[700px] flex flex-col justify-center items-center"
        style={{
          opacity: showForm ? 1 : 0,
          transform: `translateY(${showForm ? 0 : "-20px"})`,
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <h2
          className="text-4xl font-bold mb-4"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Assignment
        </h2>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl"
          style={{
            opacity: showForm ? 1 : 0,
            transform: `translateY(${showForm ? 0 : "20px"})`,
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <div className="mb-4">
            <label htmlFor="deadline" className="block text-lg font-medium">
              Deadline:
            </label>
            <input
              type="date"
              id="deadline"
              className="w-full p-2 rounded-lg text-black"
              value={deadline}
              onChange={handleDeadlineChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="topic" className="block text-lg font-medium">
              Topic:
            </label>
            <input
              type="text"
              id="topic"
              className="w-full p-2 rounded-lg text-black"
              value={topic}
              onChange={handleTopicChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="submissionType"
              className="block text-lg font-medium"
            >
              Submission Type:
            </label>
            <select
              id="submissionType"
              className="w-full p-2 rounded-lg text-black"
              value={submissionType}
              onChange={handleSubmissionTypeChange}
            >
              <option value="PPT">PPT</option>
              <option value="PDF">PDF</option>
              <option value="Drive Link">Drive Link</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="Assignment" className="block text-lg font-medium">
              Assignment:
            </label>
            <textarea
              id="Assignment"
              className="w-full h-32 p-2 rounded-lg resize-none text-black"
              placeholder="Type your Assignment here..."
              value={AssignmentText}
              onChange={handleAssignmentChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Assignment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Assignment;
