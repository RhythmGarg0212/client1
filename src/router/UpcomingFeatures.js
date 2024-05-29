import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const UpcomingFeatures = () => {
  const [headingVisible, setHeadingVisible] = useState(false);
  const features = [
    {
      title: "Notice Information",
      description:
        "Stay informed with Notice Information. Receive important announcements, updates, and notifications about classes, assignments, events, and more, all in one centralized location.",
    },
    {
      title: "Student Engagement",
      description:
        "Boost student engagement with interactive features. From polls and quizzes to discussion forums and group activities, Student Engagement offers diverse tools to encourage active participation.",
    },
  ];

  return (
    <div className="  text-white flex mb-16 flex-col justify-between">
      <div className="container mx-auto pt-10">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 6 }}
          className="text-4xl font-bold  text-center text-white"
          style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
          }}
          onAnimationComplete={() => setHeadingVisible(true)}
        >
          Upcoming Features
        </motion.h1>
      </div>

      <div className="container mx-auto py-12">
        <AnimatePresence>
          {headingVisible && (
            <div className="grid grid-cols-1 px-8  md:grid-cols-2 gap-8 justify-center">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="bg-white bg-opacity-75 rounded-lg  max-w-[700px] text-justify overflow-hidden shadow-xl hover:shadow-2xl transform transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    boxShadow:
                      "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-center text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UpcomingFeatures;
