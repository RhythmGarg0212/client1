import React, { useEffect, useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showToast } from "../slice/appConfigSlice";
import { TOAST_ERROR, TOAST_SUCCESS } from "../App";
import {
  Key_Access_Token,
  TeacherSem,
  TeacherSubject,
  setItem,
  teacherEmail,
} from "../utils/localStorage";

function TeacherSignup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [subject, setSubject] = useState("");
  const [sem, setSem] = useState("");
  const [password, setpassword] = useState("");

  async function handleSignup(e) {
    e.preventDefault();

    try {
      const result = await axiosClient.post("/teacher/signup", {
        email,
        password,
        name,
        subject,
        sem,
      });
      setItem(TeacherSubject, subject);
      setItem(TeacherSem, sem);
      setItem(Key_Access_Token, result.result.token);
      // console.log(result);

      setTimeout(() => {
        dispatch(
          showToast({
            type: TOAST_SUCCESS,
            message: "Now Login",
          })
        );
      }, 1000);
      if (result) {
        //
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
    // console.log('vipin');
  }
  // console.log(error);

  return (
    <div class=" mx-auto ">
      <div class="font-mullish text-white pt-8 bg-blue-700 h-[500px] gap-4 mt-4 p-3 flex flex-col justify-center items-center mx-auto  max-w-[500px] rounded-md">
        <h1 className=" text-3xl font-bold   "> Teacher Signup</h1>
        <Form onSubmit={handleSignup}>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input
              placeholder="Name"
              className="min-w-[300px] py-3"
              onChange={e => setname(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              class=""
              type="email"
              className="min-w-[300px] py-3"
              placeholder="Enter your Email"
              onChange={e => setemail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="sem"
            rules={[
              {
                required: true,
                message: "Please input sem!",
              },
            ]}
          >
            <Input
              type="sem"
              placeholder="Semester"
              className="min-w-[300px] py-3"
              onChange={e => setSem(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="subject"
            rules={[
              {
                required: true,
                message: "Please input your subject!",
              },
            ]}
          >
            <Input
              class=""
              type="subject"
              placeholder="Subject"
              className="min-w-[300px] py-3"
              onChange={e => setSubject(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              placeholder="password"
              className="min-w-[300px] py-3"
              onChange={e => setpassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <button
              className=" mx-auto text-center flex justify-center items-center  bg-violet-700 rounded-md text-2xl p-1 px-3 text-white hover:bg-blue-600 transition-all duration-200  "
              onClick={handleSignup}
            >
              SignUp
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default TeacherSignup;
