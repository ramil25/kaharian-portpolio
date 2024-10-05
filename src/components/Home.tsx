"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [opacity, setOpacity] = useState(100);

  useEffect(() => {
    const timer = setTimeout(() => setOpacity(70), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-indigo-500 to-purple-600  text-white">
      {/* Background with blur effect */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-${opacity}`}
        style={{
          backgroundSize: "",
          backgroundPosition: "center",
          filter: "blur(5px)",
        }}
      />

      {/* Main content */}
      <div className="skills-page container mx-auto p-4 pt-1">
        {/* Header with gradient and navigation */}
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

        {/* Main Section */}
        <main className="container mx-auto px-4 py-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-5xl font-bold mb-6 text-indigo-100"
          >
            Welcome to My Web Portfolio!
          </motion.h1>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-6"
          >
            <Image
              src="/assets/1.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full mx-auto border-4 border-indigo-300 shadow-lg"
            />
          </motion.div>

          {/* Name and Title */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-3xl font-semibold text-indigo-200"
          >
            Ramil L. Kaharian
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-xl text-indigo-100 mb-8"
          >
            Web and Android Game Developer
          </motion.p>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="bg-indigo-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg max-w-2xl mx-auto shadow-lg mb-8"
          >
            <p className="italic text-lg">
              "Any fool can write code that a computer can understand. Good
              programmers write code that humans can understand."
            </p>
            <p className="mt-2 text-indigo-300">— Martin Fowler</p>
          </motion.div>

          {/* Resume Section */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="mb-4 text-indigo-100"
          >
            Click the "My Resume" button to download my updated resume. Thank
            you and God bless!
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-colors duration-200"
          >
            <Link href={"/assets/rlk.pdf"}>My Resume</Link>
          </motion.button>
        </main>
      </div>
    </div>
  );
}
