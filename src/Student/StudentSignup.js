
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../utils/axiosClient";
import { useDispatch } from "react-redux";
import { showToast } from "../slice/appConfigSlice";
import { TOAST_SUCCESS } from "../App";
import { StudentMIS, StudentSem, setItem, studentEmail } from "../utils/localStorage";
function StudentSignup() {
  const [mis, setMIS] = useState("");
  const [name, setName] = useState("");
  const [sem, setSem] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [sec, setSec] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const data = await axiosClient.post("student/signup", {
        mis,
        name,
        sem,
        password,
        email,
        sec,
      });
      setItem(StudentSem, sem);
      setItem(StudentMIS,mis);
      setTimeout(() => {
        dispatch(
          showToast({
            type: TOAST_SUCCESS,
            message: "Now Login",
          })
        );
      }, 1000);
      if (data) {
        //
        navigate("/login");
      }
    } catch (err) {}
  }
  return (
    <div className="font-mullish  bg-blue-700 h-[550px] gap-4 mt-4 p-3 flex flex-col justify-center items-center mx-auto  max-w-[400px] rounded-md">
      <h1 className=" text-3xl font-bold   "> Student SignUp</h1>
      <form action="" className=" ml-6 ">
        <input
          type="text"
          placeholder="MIS"
          onChange={e => {
            setMIS(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Name"
          onChange={e => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Sem"
          onChange={e => {
            setSem(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Section {A/B or ECE}"
          onChange={e => {
            setSec(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
      </form>

      <button
        className="bg-violet-700 rounded-md text-2xl p-1 px-3 text-white hover:bg-blue-600 transition-all duration-200 "
        onClick={handleSubmit}
      >
        Sign Up
      </button>
      <div className="">
        Already have an account?{" "}
        <Link to="/login">
          <span className="bg-blue-700 p-2 m-1 px-2 text-xl rounded-md text-white mb-3 hover:bg-blue-600 transition-all duration-200 ">
            Login
          </span>
        </Link>
      </div>
    </div>
  );
}

export default StudentSignup;
