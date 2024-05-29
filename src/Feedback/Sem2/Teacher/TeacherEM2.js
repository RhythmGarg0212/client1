import React, { useState, useEffect } from 'react';
import { axiosClient } from "../../../utils/axiosClient";
function FeedbackResponses() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to fetch stored feedback responses
    axiosClient.get('feedback/em2')
      .then(response => {
        // Assuming your response data is an array of feedback objects
        setFeedbackData(response.result);
      })
      .catch(error => {
        
      });
  }, []); // Empty dependency array ensures this effect runs once on component mount

  return (
    <div>
      <h1 style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '32px'  // Adjust size as needed
      }}>Stored Feedback Responses</h1>
      {feedbackData?.map((feedback, index) => (
        <div key={index}  className="feedback-item flex flex-col justify-center  items-center mx-auto text-white mt-6 text-lg bg-gray-600 rounded-md p-3 max-w-[600px]">
          <p>Email: {feedback.email}</p>
          <p>Date of Feedback: {feedback.DateofFeedback}</p>
          {/* Add more fields based on your formData structure */}
          Example: <p>CGPA: {feedback.CGPA}</p>
          {/* Display other fields similarly */}
          <p>Additional Comments: {feedback.additionalcomments}</p>
          {/* Display radio button selections */}
          <p>Attendance: {feedback.Attendance}</p>
          {/* Display other radio button selections similarly */}
        </div>
      ))}
    </div>
  );
}

export default FeedbackResponses;
