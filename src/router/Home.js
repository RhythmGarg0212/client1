import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import arrow from "../assets/img/link.png";
import saraswati from "../assets/img/saraswati.png";
import Footer from "./Footer";
import UpcomingFeatures from "./UpcomingFeatures";
function Home() {
  const features = [
    {
      title: "Attendance ",
      description:
        "Attendance System: Our cutting-edge attendance system redefines classroom management. Professors can effortlessly record attendance digitally, leveraging options such as QR code scanning or manual entry through our user-friendly interface. Real-time data updates ensure accurate tracking, while customizable features cater to diverse classroom needs. Detailed analytics offer insights into attendance trends, enabling educators to tailor their teaching approach and support student success effectively. With seamless integration and intuitive controls, our system simplifies administrative tasks, allowing professors to focus on delivering quality education.",
      image: "https://i.ibb.co/JKM35LF/attend.jpg", // Placeholder image for Attendance System
      link: "/attendance",
    },
    {
      title: "Assignment",
      description:
        "Assignment Scheduler: Simplify assignment management with our versatile scheduling platform. Professors can effortlessly create and organize assignments, set deadlines, and allocate resources within a centralized hub. Interactive features allow for collaboration and feedback, facilitating meaningful engagement between educators and students. Automated reminders and notifications keep learners on track, promoting accountability and time management skills. With intuitive navigation and seamless integration across devices, our scheduler enhances productivity and communication in academic settings, empowering professors to deliver a structured and enriching learning experience.",
      image: "https://i.ibb.co/fMGbrrL/aaignment.png", // Placeholder image for Notice Display
      link: "/assignment",
    },
    {
      title: "Feedback",
      description:
        "We are excited to introduce our Subject Review Form, a dynamic tool designed to enhance the educational experience for both students and instructors. This platform brings together the power of artificial intelligence and your valuable feedback to continually improve the quality of our courses.Our Subject Review Form is a comprehensive evaluation system that allows you, the students, to provide constructive feedback on your learning experience. It covers various aspects such as course content, teaching methods, and assessment strategies.We encourage all students to actively participate in the Subject Review process. Your opinions matter, and your involvement can positively impact the learning experiences of future students.",
      image: "https://i.ibb.co/hMDQXpL/feedback.png", // Placeholder image for Feedback Form
      link: "/feedback",
    },
    {
      title: "PlagChecker",
      description:
        "Plagiarism Checker: Elevate academic integrity with our comprehensive plagiarism detection tool. Powered by advanced algorithms, our system conducts thorough scans of student submissions, identifying instances of plagiarism with precision. From verbatim copying to paraphrasing, no form of academic dishonesty goes unnoticed. Professors receive detailed reports highlighting flagged content and original sources, enabling informed decision-making in addressing academic misconduct. With seamless integration into existing platforms and customizable settings, our plagiarism checker offers a seamless solution for upholding scholarly standards and fostering a culture of originality and authenticity in academia.",
      image: "https://i.ibb.co/mJhT6rD/pagcheck.jpg", // Placeholder image for Class Reminder
      link: "/plagchecker",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-purple-900 to-blue-900 text-white min-h-screen flex flex-col justify-between">
      <div className="container mx-auto py-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-white"
          style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
          }}
        >
          <span className="text-purple-400">Welcome to</span> <br /> Academify
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-xl md:text-2xl mb-4"
        >
          Your one-stop solution for <br /> seamless education management
        </motion.p>
      </div>
      <div className="mx-auto flex-col py-6 text-center flex justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 1.5 }}
          className="text-xl md:text-2xl flex items-center px-4 font-bold mb-4 text-white"
          style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
          }}
        >
          या देवी सर्वभूतेषु विद्यारूपेण संस्थिता
          <img src={saraswati} alt="" className="ml-2 rotate-3d" />
          नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, delay: 2 }}
          className="text-xl md:text-3xl mb-8"
        >
          विद्यारम्भं करिष्यामि सिद्धिर्भवतु में सदा॥
        </motion.p>
      </div>

      <div className="container mx-auto  py-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
        >
          Features
        </motion.h2>
        <div className="grid grid-cols-1  py-4 text-justify px-10 gap-16 justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }} // Apply different initial x values based on index
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 2 + index * 1 }}
              className={`max-w-full rounded gap-10 overflow-hidden shadow-xl transform transition duration-300 flex flex-col md:flex-row items-center hover:shadow-2xl ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <motion.img
                className="w-1/2 md:w-1/3"
                src={feature.image}
                alt={feature.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 3 + index * 1 }} // Adjust delay for image appearance
              />
              <motion.div
                className="px-6 py-4 w-full md:w-2/3"
                initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }} // Apply different initial x values based on index
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 3 + index * 1.2 }} // Adjust delay for description appearance
              >
                <div
                  className="font-bold flex flex-wrap gap-5 text-3xl md:text-4xl mb-2 bg-pink-500 rounded-lg p-2 w-auto max-w-[300px] text-white"
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}
                >
                  {feature.title}
                  <img src={arrow} alt="" width="50px" className="  " />
                </div>

                <p className="text-white text-lg md:text-xl">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <UpcomingFeatures />
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 4, delay: 6.5 }}
        className=""
      >
        {<Footer />}
      </motion.h2>
    </div>
  );
}

export default Home;
