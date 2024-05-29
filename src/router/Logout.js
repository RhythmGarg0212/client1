import React, { useState } from "react";
import {
  Key_Access_Token,
  TeacherSem,
  TeacherSubject,
  deleteUser,
  studentEmail,
  teacherEmail,
} from "../utils/localStorage";

const Logout = () => {
  const [logoutConfirmed, setLogoutConfirmed] = useState(false);

  const transfer = () => {
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      setLogoutConfirmed(true);
    }
  };
  if (logoutConfirmed) {
    deleteUser(TeacherSubject);
    deleteUser(TeacherSem);
    deleteUser(Key_Access_Token);
    deleteUser(studentEmail);
    deleteUser(teacherEmail);

    return (
      <p className=" text-2xl text-white  p-2 rounded-md text-center mt-10 mx-auto flex justify-center items-center">
        Logging out...
        {transfer()}
      </p>
    );
  }

  return (
    <button
      className=" text-2xl text-white bg-pink-400 p-2 rounded-md text-center mt-10 mx-auto flex justify-center items-center"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
