import React, { useState } from "react";
import { Checkbox, Form, Input } from "antd";

import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../utils/axiosClient";
import {
  Key_Access_Token,
  TeacherSubject,
  count_User,
  setItem,
  getItem,
  teacherEmail,
} from "../utils/localStorage";
import { useDispatch } from "react-redux";
import {  showToast } from "../slice/appConfigSlice";
import { TOAST_SUCCESS } from "../App";
// import {  TeacherSubject, getItem } from "../utils/localStorage";
function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [subject, setSubject] = useState("");
  //   const [subject, setpassword] = useState("");

  //   if(subject==null ){
  //     navigate('/signup')
  //   }
  //   console.log("subject" + subject);
  const dispatch = useDispatch();
 
  // const [count, setcount1] = useState(0);
  async function submitHandle(e) {
    e.preventDefault();

    try {
      setItem(teacherEmail, email);
      const result = await axiosClient.post("/teacher/login", {
        email,
        password,
        subject,
      });
      // console.log(result);
      setItem(TeacherSubject, result.result.subject);
      setItem(Key_Access_Token, result.result.token);
      // console.log(getItem(TeacherSubject));
      dispatch(
        showToast({
          type: TOAST_SUCCESS,
          message: "Successfully Login",
        })
      );
      if (result) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  }

  // useEffect(() => {
  //   countU();
  // }, []);
  return (
    <div class="  mx-auto  ">
      <div class="font-mullish text-white pt-8 bg-blue-700 h-[450px] gap-4 mt-4 p-3 flex flex-col justify-center items-center mx-auto  max-w-[500px] rounded-md">
        <h1 className=" text-3xl font-bold   "> Teacher Login</h1>
        <Form autoComplete="off" className=" mx-auto  ">
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
              placeholder="email"
              className="min-w-[300px] py-3 mt-3"
              onChange={e => setemail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="subject"
            rules={[
              {
                required: true,
                message: "Please input subject",
              },
            ]}
          >
            <Input
              class=""
              placeholder="subject"
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

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 1,
            }}
          >
            <button
              class="bg-violet-700 rounded-md text-2xl p-1 px-3 text-white hover:bg-blue-600 transition-all duration-200  "
              onClick={submitHandle}
            >
              Login
            </button>
          </Form.Item>
        </Form>
        {/* <Link to="/auth/forpass">
          <h1 class="m-1 p-2  ">
             Forget Password
          </h1>
        </Link> */}
        <h1 class="m-1 p-2 ">
          Don't have an account?
          <Link
            to="/signup"
            class="bg-blue-700 p-2 m-1 px-2 text-xl rounded-md text-white mb-3 hover:bg-blue-600 transition-all duration-200 "
          >
            SignUp
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default Login;
