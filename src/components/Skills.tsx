"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Skill {
  name: string;
  level: string;
}

const skills: Skill[] = [
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "React", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "HTML/CSS", level: "Advanced" },
];

const SkillsPage: React.FC = () => {
  const getProgressWidth = (level: string) => {
    switch (level) {
      case "Advanced":
        return "100%";
      case "Intermediate":
        return "70%";
      case "Beginner":
        return "40%";
      default:
        return "0";
    }
  };

  return (
    <div className="skills-page container mx-auto p-4 pt-1">
      <div className="bg-gradient-to-br from-purple-400 via-indigo-500 to-purple-600 relative text-white">
        <header className="bg-indigo-900 bg-opacity-50 backdrop-blur-lg shadow-lg">
          <nav className="flex justify-between items-center max-w-6xl mx-auto py-6 px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-white"
            >
              RK
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-x-6 text-lg"
            >
              {["Home", "Skills", "Portfolio", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={
                    item === "Home" ? "/" : item === "Skills" ? "/skills" : ""
                  }
                  className="hover:text-indigo-300 transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          </nav>
        </header>
      </div>
      <header className="text-center py-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-down">
          My Skills
        </h1>
        <div className="w-16 h-1 bg-white mx-auto mb-4 rounded-full"></div>
        <p className="text-white text-lg md:text-xl">
          A collection of my technical expertise and proficiency levels
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{skill.name}</h2>
            <p className="mb-4">Level: {skill.level}</p>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${
                  skill.level === "Advanced"
                    ? "bg-green-500"
                    : skill.level === "Intermediate"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
                style={{ width: getProgressWidth(skill.level) }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
