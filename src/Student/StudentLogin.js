import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../utils/axiosClient";
import {
  Key_Access_Token,
  StudentMIS,
  StudentSem,
  setItem,
  studentEmail,
} from "../utils/localStorage";
import { useDispatch } from "react-redux";
import { showToast } from "../slice/appConfigSlice";
import { TOAST_SUCCESS } from "../App";
function StudentLogin() {
  const [mis, setMIS] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sem, setSem] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setItem(studentEmail, email);
      const result = await axiosClient.post("/student/login", {
        mis,
        email,
        password,
      });
      setItem(Key_Access_Token, result.result.token);
      setItem(StudentMIS, mis);
      setItem(StudentSem, sem);

      dispatch(
        showToast({
          type: TOAST_SUCCESS,
          message: "Successfully Login",
        })
      );
      if (result) {
        navigate("/");
      }
    } catch (err) {}
  }
  return (
    <div className="container font-mullish  bg-blue-700 h-[450px] gap-4 mt-4 p-3 flex flex-col justify-center items-center mx-auto  max-w-[400px] rounded-md">
      <h1 className=" text-3xl font-bold   "> Student Login</h1>
      <form action="" className="ml-6">
        <input
          type="text"
          placeholder="MIS"
          required
          onChange={e => {
            setMIS(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Sem"
          required
          onChange={e => {
            setSem(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Email"
          required
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
      </form>
      <button
        onClick={handleSubmit}
        className=" hover:bg-blue-600 transition-all duration-200 bg-violet-500 text-2xl rounded-md px-4 py-1 "
      >
        Login
      </button>
      <div className="text-white mt-6 ">
        Don't have an account?{" "}
        <Link to="/signup">
          <span class="bg-blue-700 p-2 m-1 px-2 text-xl rounded-md text-white mb-3 hover:bg-blue-600 transition-all duration-200 ">
            SignUp
          </span>
        </Link>
      </div>
    </div>
  );
}

export default StudentLogin;
