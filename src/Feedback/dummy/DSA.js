import React, { useState } from "react";
import Data from "../../assets/feedback.json";
import BlackBox from "../../assets/feedback/BlackBox";

function DSA() {
  // Initialize the state variables
  const [percentage, setPercentage] = useState("");
  const [CGPA, setCGPA] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const [selectedValues, setSelectedValues] = useState({});
  const [additionalComments, setAdditionalComments] = useState({});
  // Function to handle changes in radio button values
  const handlePercentageChangeG = (index, value) => {
    setSelectedValues({ ...selectedValues, [index]: value });
  };

  // Function to uncheck radio buttons
  const uncheckRadioButtonsG = index => {
    setSelectedValues({ ...selectedValues, [index]: null });
  };

  // Function to handle changes in additional comments
  const handleAdditionalCommentsChange = event => {
    setAdditionalComments(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Prepare data for alert
    let formData = `Email: ${email}\n`;
    formData += `Date: ${date}\n`;
    formData += `Percentage: ${percentage}\n`;
    formData += `CGPA: ${CGPA}\n`;
  
    formData += "Selected Values:\n";
    var i = 5;
    Object.keys(selectedValues).forEach(index => {
      formData += `${i}: ${selectedValues[index]}\n`;
      i++;
    });
    formData += `\nAdditional Comments:\n${additionalComments}`;
  
    // Display alert with form data
    alert(formData);
  };

  return (
    <>
      <div className="flex  mx-auto w-[800px] mt-5 flex-col rounded-lg p-4   pb-10 gap-4">
        <BlackBox
          subject="Data Structure & Algorithms"
          percentage={percentage}
          CGPA={CGPA}
          setPercentage={setPercentage}
          setCGPA={setCGPA}
          setEmail={setEmail}
          setDate={setDate}
        />

        {Data.map(item => (
          <div
            key={item.index}
            className="border-2 w-[700px] mx-auto p-5 flex flex-col gap-5 bg-white border-gray-500 rounded-md"
          >
            <h1 style={{ fontWeight: "bold" }}>{item.heading}</h1>
            <h2 className="flex flex-wrap gap-6">
              <p>1-Poor</p>
              <p>2-Average</p>
              <p>3-Good</p>
              <p>4-Very Good</p>
              <p>5-Excellent</p>
            </h2>

            <div className="flex flex-row gap-5">
              {/* Radio buttons */}
              {[1, 2, 3, 4, 5].map(value => (
                <label
                  key={value}
                  htmlFor={`option${item.index}${value}`}
                  className="flex items-center gap-5 cursor-pointer"
                >
                  <input
                    type="radio"
                    id={`option${item.index}${value}`}
                    name={`percentage${item.index}`}
                    value={value}
                    className="mr-2"
                    checked={selectedValues[item.index] === `${value}`}
                    onChange={() =>
                      handlePercentageChangeG(item.index, `${value}`)
                    }
                  />
                  {value}
                </label>
              ))}
            </div>

            <div className="flex gap-12 font-bold">
              <p>Selected Value: {selectedValues[item.index]}</p>

              <button
                onClick={() => uncheckRadioButtonsG(item.index)}
                className="border-2 px-1 text-lg bg-gray-300 font-bold rounded-md"
              >
                clear
              </button>
            </div>
          </div>
        ))}

        {/* Additional comments section */}
        <div className="border-2 w-[700px] mx-auto p-5 flex flex-col gap-5 bg-white border-gray-500 rounded-md">
          <h1 style={{ fontWeight: "bold" }}>
            14. Please give additional comments to improve the subject
          </h1>

          <input
            type="text"
            placeholder="Your answer"
            value={additionalComments}
            onChange={handleAdditionalCommentsChange}
            className="border rounded-md p-2"
          />

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            className="text-center mx-auto w-[100px] text-white font-bold border rounded-md bg-red-500 p-2"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default DSA;
