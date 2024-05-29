import React, { useState } from "react";
import topics from "../assets/topics.json"; // Assuming you've resolved the import issue

function PlagChecker() {
  const [projectTitle, setProjectTitle] = useState("");
  const [message, setMessage] = useState("");

  const checkProject = () => {
    const trimmedTitle = projectTitle.trim(); // Trim leading and trailing spaces

    if (!trimmedTitle) {
      setMessage("Please enter a project title.");
      return;
    }

    // Modify the project title to remove extra spaces between words but preserve multiple spaces
    const trimmedTitleWithSingleSpaces = trimmedTitle.replace(/\s{2,}/g, ' ');

    const relatedTopics = topics.filter(topic =>
      topic.toLowerCase().includes(trimmedTitleWithSingleSpaces.toLowerCase())
    );

    if (relatedTopics.length > 0) {
      setMessage(
        `The project "${trimmedTitleWithSingleSpaces}" is related to: ${relatedTopics.join(", ")}. It's already covered.`
      );
      alert("We find Something Related!");
    } else {
      setMessage(
        `The project "${trimmedTitleWithSingleSpaces}" is not related to any of the topics. It's unique.`
      );
      alert("New Project! Good to Go.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-16 text-white">
      <div className="p-8 rounded-lg bg-gray-800 bg-opacity-80 shadow-lg max-w-xl w-full mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Project Checker</h1>
        <input
          type="text"
          placeholder="Enter project title..."
          value={projectTitle}
          onChange={e => setProjectTitle(e.target.value)}
          className="w-full px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-gray-900 text-white"
        />
        <button
          onClick={checkProject}
          className="px-6 py-3 rounded-md bg-indigo-600 text-white font-semibold transition duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full"
        >
          Check Project
        </button>
        {message && <p className="mt-4">{message}</p>}
      </div>
    </div>
  );
}

export default PlagChecker;
