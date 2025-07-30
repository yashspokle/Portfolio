import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaGithub,
  FaBrain,
  FaLinkedin,
  FaMicrochip,
} from "react-icons/fa";
import {
  SiC,

} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import "./index.css";

function App() {
  useEffect(() => {
    document.title = "Yash Pokle | Portfolio";
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-4 overflow-x-hidden">
      {/* Hero */}
      <section className="text-center py-20">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Yash Sumedh Pokle
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Electronics & CS Undergrad | Full Stack & Embedded Developer
        </motion.p>
        <motion.div
          className="mt-6 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="/resume.pdf"
            download
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Download Resume
          </a>
          <a
            href="mailto:yashpokle277@gmail.com"
            className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </motion.div>
      </section>

      {/* About */}
      <motion.section
        className="max-w-4xl mx-auto mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300">
          I'm an Electronics & Computer Science undergraduate from Ramdeobaba University. I specialize in merging hardware with full-stack development to create impactful, smart solutions.
        </p>
      </motion.section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "EduHive - AI Learning Platform",
              description: "Full-stack app idea for personalized education.",
            },
            {
              title: "Resume Builder",
              description:
                "React app that generates resumes from input.",
              link: "https://github.com/yashspokle/Resume-Builder",
            },
            {
              title: "Smart Grocery Management with Grocero",
              description:
                "Smart system combining ESP32 + OpenCV for item detection, inventory tracking, and recipe suggestions.",
            },
            {
              title: "Object Detection using Open-CV",
              description:
                "A Python project which detects Objects and talks back the scanned object name",
              link: "https://github.com/yashspokle/Object-Detection-Open-CV-",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              className="p-6 border border-white/10 rounded bg-white/5 backdrop-blur"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              {project.link && (
                <a
                  className="text-blue-400 underline mt-2 inline-block"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <motion.section
        className="max-w-4xl mx-auto mb-20 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-6">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center text-4xl">
          <div className="flex flex-col items-center text-orange-500"><FaHtml5 /><span className="text-sm mt-2">HTML</span></div>
          <div className="flex flex-col items-center text-blue-500"><FaCss3Alt /><span className="text-sm mt-2">CSS</span></div>
          <div className="flex flex-col items-center text-red-500"><FaJava /><span className="text-sm mt-2">Java</span></div>
          <div className="flex flex-col items-center text-gray-300"><SiC /><span className="text-sm mt-2">C</span></div>
          <div className="flex flex-col items-center text-yellow-400"><FaPython /><span className="text-sm mt-2">Python</span></div>
          <div className="flex flex-col items-center text-teal-300"><FaMicrochip /><span className="text-sm mt-2">Embedded</span></div>
          <div className="flex flex-col items-center text-pink-400"><FaBrain /><span className="text-sm mt-2">LLMs / AI</span></div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        className="text-center mb-20 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p>
          Email:{" "}
          <a className="text-blue-300" href="mailto:yashpokle277@gmail.com">
            yashpokle277@gmail.com
          </a>
        </p>
        <div className="flex justify-center gap-6 mt-4 text-2xl">
          <a href="https://github.com/yashspokle" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:yashpokle277@gmail.com">
            <MdEmail />
          </a>
          <a href="https://www.linkedin.com/in/yash-pokle-02aa34340/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </motion.section>
    </main>
  );
}

export default App;
