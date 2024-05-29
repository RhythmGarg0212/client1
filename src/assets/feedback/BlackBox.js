import React from "react";

function BlackBox({
  subject,
  percentage,
  CGPA,
  setPercentage,
  setCGPA,
  setEmail,
  setDate,
}) {
  // Define function to handle radio button change
  const handlePercentageChange = event => {
    setPercentage(event.target.value);
  };
  const handlePercentageChange1 = event => {
    setCGPA(event.target.value);
  };

  return (
    <>
      <div  className="border-2 mt-8 w-[700px] mx-auto p-5 flex flex-col gap-5 bg-white  border-gray-500 rounded-md">
        <div className="text" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "1.5em", fontWeight: "bold" }}>
            SUBJECT FEEDBACK FORM{" "}
          </h1>
          <h2 style={{ fontSize: "1.5em", fontWeight: "bold" }}>
            B.Tech/CSE/2nd Semester
          </h2>
          <h2 style={{ fontSize: "1.5em", fontWeight: "bold" }}>{subject}</h2>
        </div>
      </div>

      <div className="border-2 w-[700px] mx-auto p-5 flex flex-col gap-5 bg-white  border-gray-500 rounded-md">
        <h1 style={{ fontWeight: "bold" }}>1. Email*</h1>

        <label
          htmlFor=""
          className="flex items-center gap-5 rounded-md"
          style={{ border: "2px solid black", width: "300px" }}
        >
          <input
            required
            type="text"
            placeholder=" your email"
            style={{ outline: "none", width: "100%" }}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
      </div>

      <div className="border-2 w-[700px] mx-auto p-5 flex flex-col gap-5  bg-white  border-gray-500 rounded-md">
        <h1 style={{ fontWeight: "bold" }}>2.Date of Feedback *</h1>

        <label htmlFor="" className="flex items-center gap-5 cursor-pointer">
          <input
            required
            type="date"
            placeholder=" dd-mm-year "
            onChange={e => {
              setDate(e.target.value);
            }}
          />
        </label>
      </div>

      <div className="border-2 w-[700px] mx-auto p-5 flex flex-col gap-5  bg-white  border-gray-500 rounded-md">
        <h1 style={{ fontWeight: "bold" }}>3. Approx. Attendance till date*</h1>

        {/* Radio buttons */}
        <label
          htmlFor="option1"
          className="flex items-center gap-5 cursor-pointer"
        >
          <input
            type="radio"
            id="option1"
            name="percentage"
            value="0%-25%"
            className="mr-2"
            checked={percentage === "0%-25%"}
            onChange={handlePercentageChange}
          />
          0%-25%
        </label>
        <label
          htmlFor="option2"
          className="flex items-center gap-5 cursor-pointer"
        >
          <input
            type="radio"
            id="option2"
            name="percentage"
            value="26%-50%"
            className="mr-2"
            checked={percentage === "26%-50%"}
            onChange={handlePercentageChange}
          />
          26%-50%
        </label>
        <label
          htmlFor="option3"
          className="flex items-center gap-5 cursor-pointer"
        >
          <input
            type="radio"
            id="option3"
            name="percentage"
            value="51%-75%"
            className="mr-2"
            checked={percentage === "51%-75%"}
            onChange={handlePercentageChange}
          />
          51%-75%
        </label>
        <label
          htmlFor="option4"
          className="flex items-center gap-5 cursor-pointer"
        >
          <input
            type="radio"
            id="option4"
            name="percentage"
            value="76%-100%"
            className="mr-2"
            checked={percentage === "76%-100%"}
            onChange={handlePercentageChange}
          />
          76%-100%
        </label>

        {/* Display the selected percentage */}
        <p>Selected Percentage: {percentage}</p>
        {/* Button to uncheck all radio buttons */}
      </div>

      <div className="border-2 w-[700px] mx-auto p-5 flex flex-col gap-5  bg-white  border-gray-500 rounded-md">
        <h1 style={{ fontWeight: "bold" }}>4. Approx.CGPA till date*</h1>

        {/* Radio buttons */}
        <label
          htmlFor="option11"
          className="flex items-center gap-5 cursor-pointer"
        >
          <input
            type="radio"
            id="option11"
            name="CGPA"
            value="0-5"
            className="mr-2"
            checked={CGPA === "0-5"}
            onChange={handlePercentageChange1}
          />
          0-5
        </label>
        <label
          htmlFor="option12"
          className="flex items-center gap-5 cursor-pointer"
        >
          <input
            type="radio"
            id="option12"
            name="CGPA"
            value="6"
            className="mr-2"
            checked={CGPA === "6"}
            onChange={handlePercentageChange1}
          />
          6
        </label>
        <label
          htmlFor="option13"
          className="flex items-center gap-5 cursor-pointer"
        >
          <input
            type="radio"
            id="option13"
            name="CGPA"
            value="7"
            className="mr-2"
            checked={CGPA === "7"}
            onChange={handlePercentageChange1}
          />
          7
        </label>
        <label
          htmlFor="option14"
          className="flex items-center gap-5 cursor-pointer"
        >
          <input
            type="radio"
            id="option14"
            name="CGPA"
            value="8"
            className="mr-2"
            checked={CGPA === "8"}
            onChange={handlePercentageChange1}
          />
          8
        </label>
        <label
          htmlFor="option15"
          className="flex items-center gap-5 cursor-pointer"
        >
          <input
            type="radio"
            id="option15"
            name="CGPA"
            value="9"
            className="mr-2"
            checked={CGPA === "9"}
            onChange={handlePercentageChange1}
          />
          9
        </label>
        <label
          htmlFor="option16"
          className="flex items-center gap-5 cursor-pointer"
        >
          <input
            type="radio"
            id="option16"
            name="CGPA"
            value="10"
            className="mr-2"
            checked={CGPA === "10"}
            onChange={handlePercentageChange1}
          />
          10
        </label>

        {/* Display the selected percentage */}
        <p>Selected Value: {CGPA}</p>
        {/* Button to uncheck all radio buttons */}
      </div>
    </>
  );
}

export default BlackBox;
