import toast, { Toaster } from "react-hot-toast";
import {
  Key_Access_Token,
  getItem,
  studentEmail,
  teacherEmail,
} from "./utils/localStorage";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import TeacherSignup from "./Teacher/TeacherSignup";
import TeacherLogin from "./Teacher/TeacherLogin";
import StudentSignup from "./Student/StudentSignup";
import StudentLogin from "./Student/StudentLogin";
import Chart from "./Attendance/Chart";
import { Route, Routes } from "react-router-dom";
import Home from "./router/Home";
import Navbar from "./router/Navbar";
import Attendance from "./Attendance/Attendance";
import Marks from "./Marks/Marks";
import Budget from "./router/Budget";
import Feedback from "./router/Feedback";
import Logout from "./router/Logout";
import Login from "./router/Login";
import Signup from "./router/Signup";
import SecA from "./Attendance/SecA";
import MarksSecA from "./Marks/MarksSecA";
import MarksSecB from "./Marks/MarksSecB";
import SecB from "./Attendance/SecB";
import DLD from "./Feedback/Sem2/DLD";
import DSA from "./Feedback/Sem2/DSA";
import EM2 from "./Feedback/Sem2/EM2";
import Humanity from "./Feedback/Sem2/Humanity";
import OOPL from "./Feedback/Sem2/OOPL";
import EStudies from "./Feedback/Sem2/EStudies";
import CNV from "./Feedback/Sem2/CNV";

import PlagChecker from "./PlagChecker/PlagChecker";
import Assignment from "./Assignment/Assignment";
import Student from "./Attendance/Student";
import StudentShowMarks from "./Marks/StudentShowMarks";
import Stat from "./Static/Stat";
import ShowStat from "./Static/ShowStat";
import Poll from "./Poll/Poll";
import UpdatePoll from "./Poll/UpdatePoll";
import studentNavbar from "./assets/studentNavbar.json";
import teacherNavbar from "./assets/teacherNavbar.json";
import TeacherCNV from "./Feedback/Sem2/Teacher/TeacherCNV";
import TeacherDLD from "./Feedback/Sem2/Teacher/TeacherDLD";
import TeacherDSA from "./Feedback/Sem2/Teacher/TeacherDSA";
import TeacherEM2 from "./Feedback/Sem2/Teacher/TeacherEM2";
import TeacherEstudies from "./Feedback/Sem2/Teacher/TeacherEstudies";
import TeacherOOPL from "./Feedback/Sem2/Teacher/TeacherOOPL";
import TeacherHumanity from "./Feedback/Sem2/Teacher/TeacherCNV";
import TeachFeedback from "./router/Teachfeedback";
export const TOAST_SUCCESS = "toast_success";
export const TOAST_ERROR = "toast_error";

function App() {
  const isLoading = useSelector(state => state.appConfigReducer.isloading);
  const toastData = useSelector(state => state.appConfigReducer.toastData);
  const loadingRef = useRef(null);
  useEffect(() => {
    if (isLoading) {
      loadingRef.current?.continuousStart();
    } else {
      loadingRef.current?.complete();
    }
  }, [isLoading]);
  useEffect(() => {
    switch (toastData.type) {
      case TOAST_SUCCESS:
        toast.success(toastData.message);
        break;
      case TOAST_ERROR:
        toast.error(toastData.message);

        break;
    }
  }, [toastData]);

  var teacher = 10;
  teacher = getItem(teacherEmail);
  var student = 10;
  student = getItem(studentEmail);
  return (
    <div className="App bg-gradient-to-b from-indigo-900 to-purple-900 min-h-[100vh]">
      <LoadingBar color="#f11946" ref={loadingRef} />
      <div>
        <Toaster />
      </div>

      {teacher != 10 && teacher != undefined ? (
        <Navbar NavbarItem={teacherNavbar} />
      ) : student != 10 && student != undefined ? (
        <Navbar NavbarItem={studentNavbar} />
      ) : (
        <Navbar />
      )}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />}>
          <Route path="teacher" element={<TeacherLogin />} />
          <Route path="student" element={<StudentLogin />} />
        </Route>

        <Route path="/signup" element={<Signup />}>
          <Route path="teacher" element={<TeacherSignup />} />

          <Route path="student" element={<StudentSignup />} />
        </Route>

        <Route path="/attendance" element={<Attendance />}>
          <Route path="" element={<Chart />} />
          <Route path="secA" element={<SecA />} />
          <Route path="secB" element={<SecB />} />
          <Route path="chart" element={<Chart />} />
        </Route>
        <Route path="/marks" element={<Marks />}>
          <Route path="secA" element={<MarksSecA />} />
          <Route path="secB" element={<MarksSecB />} />
        </Route>

        <Route path="/student/attendanceshow" element={<Student />} />
        <Route path="/student/marksshow" element={<StudentShowMarks />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/plagchecker" element={<PlagChecker />} />
        <Route path="/assignment" element={<Assignment />} />

        <Route path="/budgets" element={<Budget />} />
        <Route path="/stats" element={<Stat />} />
        <Route path="/stats/show" element={<ShowStat />} />
        <Route path="/polls" element={<Poll />} />
        <Route path="/update/polls" element={<UpdatePoll />} />

        <Route path="/feedback" element={<Feedback />}>
          <Route path="dld" element={<DLD />} />
          <Route path="dsa" element={<DSA />} />
          <Route path="em2" element={<EM2 />} />
          <Route path="estudies" element={<EStudies />} />
          <Route path="oopl" element={<OOPL />} />
          <Route path="cnv" element={<CNV />} />
          <Route path="humanity" element={<Humanity />} />
        </Route>
        <Route path="/feedback/teacher" element={<TeachFeedback />}>
          <Route path="DLD" element={<TeacherDLD />} />
          <Route path="DSA" element={<TeacherDSA />} />
          <Route path="EM2" element={<TeacherEM2 />} />
          <Route path="Estudies" element={<TeacherEstudies />} />
          <Route path="OOPL" element={<TeacherOOPL />} />
          <Route path="cnv" element={<TeacherCNV />} />
          <Route path="Humanity" element={<TeacherHumanity />} />
        </Route>
      </Routes>
      {/* <Student/> */}
    </div>
  );
}

export default App;
