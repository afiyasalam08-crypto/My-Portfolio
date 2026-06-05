import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaPython, FaGithub, FaGitAlt, FaJs, FaLaptopCode,
  FaBriefcase, FaCertificate, FaGraduationCap,
  FaEnvelope, FaPhone, FaMapMarkerAlt
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function App() {
  const skills = [
    "HTML","CSS","JavaScript","React",
    "Python","Git","GitHub","VS Code","UiPath Studio"
  ];

  const projects = [
    {
      title: "CampusHub Website",
      tech: "React + Tailwind CSS",
      desc: "College campus platform with events, notices, departments and resources."
    },
    {
      title: "Portfolio Website",
      tech: "React + Tailwind CSS",
      desc: "Personal portfolio showcasing projects, skills, certifications and achievements."
    },
    {
      title: "Enterprise Supplier Data Management",
      tech: "UiPath Studio",
      desc: "Automation solution to streamline supplier data workflows."
    }
  ];

  return (
    <div className="min-h-screen text-white bg-slate-950 overflow-x-hidden">
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-sky-400 via-blue-600 to-cyan-500" />
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-white/10 blur-[180px] rounded-full -z-10" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-cyan-200/10 blur-[180px] rounded-full -z-10" />

      <nav className="fixed top-0 w-full backdrop-blur-lg bg-white/10 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="font-bold text-2xl">Afiya.</h1>
          <div className="hidden md:flex gap-6">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="min-h-[90vh] flex items-center justify-center relative px-6 pt-24">

  {/* Background Glow */}
  <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

  {/* Floating Icons */}
  <FaReact className="absolute left-10 top-40 text-cyan-400 text-6xl opacity-80 animate-pulse" />
  <FaPython className="absolute right-10 top-40 text-yellow-400 text-6xl opacity-80 animate-pulse" />

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center max-w-5xl"
  >

    {/* Name */}
    <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
      <span className="text-white">Afiya</span>{" "}
      <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
        Safrin A
      </span>
    </h1>

    {/* Role */}
    <p className="text-xl md:text-2xl text-slate-200">
      BCA Student • React Developer • Python Enthusiast
    </p>

    {/* Intro */}
    <p className="max-w-3xl mx-auto mt-8 text-lg text-slate-300 leading-8">
      Passionate BCA student focused on building modern web applications,
      automation solutions, and intuitive user experiences using React,
      JavaScript, Python, Tailwind CSS, and UiPath Studio.
    </p>

    {/* Tech Stack */}
    <div className="flex flex-wrap justify-center gap-4 mt-10">

      {[
        "React",
        "JavaScript",
        "Python",
        "Tailwind CSS",
        "UiPath",
        "Git",
        "GitHub",
      ].map((tech) => (
        <span
          key={tech}
          className="px-5 py-2 rounded-full bg-white/10 border border-cyan-300/30 backdrop-blur-lg hover:bg-cyan-500/20 transition"
        >
          {tech}
        </span>
      ))}

    </div>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-5 mt-10">

      <a
        href="#projects"
        className="px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:scale-105 transition"
      >
        View Projects
      </a>

      <a
        href="/resume.pdf"
        download
        className="px-8 py-4 border border-white rounded-full hover:bg-white/10 transition"
      >
        Download Resume
      </a>

    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 max-w-4xl mx-auto">

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5">
        <h3 className="text-4xl font-bold text-cyan-300">3+</h3>
        <p className="text-slate-300">Projects</p>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5">
        <h3 className="text-4xl font-bold text-cyan-300">7+</h3>
        <p className="text-slate-300">Skills</p>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5">
        <h3 className="text-4xl font-bold text-cyan-300">2</h3>
        <p className="text-slate-300">Internships</p>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5">
        <h3 className="text-4xl font-bold text-cyan-300">3+</h3>
        <p className="text-slate-300">Certificates</p>
      </div>

    </div>

    {/* Social Links */}
    <div className="flex justify-center gap-8 mt-10 text-3xl">

      <a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-cyan-300 transition"
      >
        <FaGithub />
      </a>

      <a
        href="mailto:afisalam64@gmail.com"
        className="hover:text-cyan-300 transition"
      >
        <FaEnvelope />
      </a>

    </div>

  </motion.div>

</section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:50}}>
          <div className="text-center mb-16">
  <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm mb-3">
    Discover
  </p>

  <h2 className="text-4xl md:text-5xl font-black">
    About Me
  </h2>

  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
</div>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl">
             I am a passionate BCA student at Jamal Mohamed College
            with a strong interest in software development,
            web technologies, and automation. I enjoy building
            user-friendly applications, learning modern development
            tools, and solving real-world problems through technology.
            Currently, I am expanding my skills in React, Tailwind CSS,
            Git, GitHub, and Python while working on projects that
            strengthen both my technical and creative abilities.
          </div>
        </motion.div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
  <div className="text-center mb-16">
  <FaReact className="mx-auto text-5xl text-cyan-300 mb-4" />
  <h2 className="text-5xl font-black">
    Technical Skills
  </h2>
  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
</div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Frontend */}
    <div className="bg-gradient-to-br from-sky-500/20 to-cyan-500/20 backdrop-blur-xl p-8 rounded-3xl border border-sky-300/20 hover:scale-105 transition duration-300">
      <div className="flex items-center gap-3 mb-6">
        <FaReact className="text-4xl text-cyan-300" />
        <h3 className="text-2xl font-bold">
          Frontend
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map(
          (skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white/10 rounded-full text-sm"
            >
              {skill}
            </span>
          )
        )}
      </div>
    </div>

    {/* Programming */}
    <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-xl p-8 rounded-3xl border border-blue-300/20 hover:scale-105 transition duration-300">
      <div className="flex items-center gap-3 mb-6">
        <FaPython className="text-4xl text-yellow-300" />
        <h3 className="text-2xl font-bold">
          Programming
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {["Python"].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-white/10 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Tools */}
    <div className="bg-gradient-to-br from-cyan-500/20 to-sky-500/20 backdrop-blur-xl p-8 rounded-3xl border border-cyan-300/20 hover:scale-105 transition duration-300">
      <div className="flex items-center gap-3 mb-6">
        <FaGitAlt className="text-4xl text-orange-400" />
        <h3 className="text-2xl font-bold">
          Tools & Platforms
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {[
          "Git",
          "GitHub",
          "VS Code",
          "UiPath Studio",
          "MS Excel",
        ].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-white/10 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>

<div className="mt-12 bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
  <h3 className="text-2xl font-bold mb-6 text-center">
    Soft Skills
  </h3>

  <div className="grid md:grid-cols-3 gap-4">
    {[
      "Communication",
      "Problem Solving",
      "Quick Learning",
      "Team Collaboration",
      "Time Management",
      "Adaptability",
    ].map((skill) => (
      <div
        key={skill}
        className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition"
      >
        {skill}
      </div>
    ))}
  </div>
</div>

      <section className="max-w-6xl mx-auto px-6 py-20">

  <div className="text-center mb-16">
    <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm">
      Communication
    </p>

    <h2 className="text-5xl font-black mt-2">
      Languages & Communication
    </h2>

    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
  </div>

  <div className="grid md:grid-cols-4 gap-6">

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 hover:-translate-y-2 transition">
      <h3 className="text-2xl font-bold text-cyan-300">Tamil</h3>
      <p className="text-slate-300 mt-2">Native Proficiency</p>
    </div>

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 hover:-translate-y-2 transition">
      <h3 className="text-2xl font-bold text-cyan-300">English</h3>
      <p className="text-slate-300 mt-2">Professional Working</p>
    </div>

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 hover:-translate-y-2 transition">
      <h3 className="text-2xl font-bold text-cyan-300">French</h3>
      <p className="text-slate-300 mt-2">Basic Knowledge</p>
    </div>

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 hover:-translate-y-2 transition">
      <h3 className="text-2xl font-bold text-cyan-300">Hindi</h3>
      <p className="text-slate-300 mt-2">Basic Knowledge</p>
    </div>

  </div>

</section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
       <div className="text-center mb-16">
  <FaBriefcase className="mx-auto text-5xl text-cyan-300 mb-4" />
  <h2 className="text-5xl font-black">
    Projects
  </h2>
  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
</div> 
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p)=>(
            <div key={p.title} className="group bg-white/10 backdrop-blur-lg p-6 rounded-3xl hover:-translate-y-2 transition">
              <FaLaptopCode className="text-4xl mb-4"/>
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="text-sky-200">{p.tech}</p>
              <p className="mt-3">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
  <div className="text-center mb-16">
  <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm">
    Experience
  </p>

  <h2 className="text-5xl font-black mt-2">
    Professional Experience
  </h2>

  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
</div>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:-translate-y-2 transition">
      <FaBriefcase className="text-4xl text-sky-300 mb-4" />

      <h3 className="text-2xl font-bold">
        Qryptex
      </h3>

      <p className="text-sky-200 mb-3">
        15 Days Internship
      </p>

      <p className="text-slate-200 leading-7">
        Successfully completed a 15-day internship at Qryptex where I gained
        practical exposure to Frontend development, Modern web technologies,
        Teamwork, Project workflows, and Industry best practices.
      </p>
    </div>

    <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:-translate-y-2 transition">
      <FaBriefcase className="text-4xl text-sky-300 mb-4" />

      <h3 className="text-2xl font-bold">
        UiPath Studio Training
      </h3>

      <p className="text-sky-200 mb-3">
        Automation & RPA Internship
      </p>

      <p className="text-slate-200 leading-7">
        Completed internship training in UiPath Studio and gained hands-on
        experience in Robotic Process Automation (RPA), workflow automation,
        process optimization, and automation project development.
      </p>
    </div>

  </div>
</section>

      <section className="max-w-6xl mx-auto px-6 py-20">
  <div className="text-center mb-16">
  <FaGraduationCap className="mx-auto text-5xl text-cyan-300 mb-4" />
  <h2 className="text-5xl font-black">
    Education
  </h2>
  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
</div>

  <div className="relative border-l-4 border-sky-400 ml-4">

    <div className="mb-12 ml-8">
      <div className="absolute w-5 h-5 bg-sky-400 rounded-full -left-[11px]" />

      <h3 className="text-2xl font-bold">
        Bachelor of Computer Applications (BCA)
      </h3>

      <p className="text-sky-200 text-lg">
        Jamal Mohamed College, Tiruchirappalli
      </p>

      <p className="text-slate-300">
        2024 - Present
      </p>

      <p className="mt-3 text-slate-200">
        Pursuing a Bachelor's degree in Computer Applications with a focus on
        programming, web development, software engineering, databases,
        and emerging technologies.
      </p>
    </div>

    <div className="mb-12 ml-8">
      <div className="absolute w-5 h-5 bg-sky-400 rounded-full -left-[11px]" />

      <h3 className="text-2xl font-bold">
        Higher Secondary Education (12th)
      </h3>

      <p className="text-sky-200">
        Imam Gazzali Matric Hr. Sec. School, Lalpet
      </p>

      <p className="text-slate-300">
        2023 - 2024
      </p>

      <p className="text-green-300 font-semibold mt-2">
        Percentage: 83.5%
      </p>
    </div>

    <div className="ml-8">
      <div className="absolute w-5 h-5 bg-sky-400 rounded-full -left-[11px]" />

      <h3 className="text-2xl font-bold">
        SSLC (10th)
      </h3>

      <p className="text-sky-200">
        Aided Muslim High School, Ayangudi
      </p>

      <p className="text-slate-300">
        2021 - 2022
      </p>

      <p className="text-green-300 font-semibold mt-2">
        Percentage: 83.6%
      </p>
    </div>

  </div>
</section>

      <section className="max-w-6xl mx-auto px-6 py-20">
  <div className="text-center mb-16">
  <FaCertificate className="mx-auto text-5xl text-cyan-300 mb-4" />
  <h2 className="text-5xl font-black">
    Certifications & Achievements
  </h2>
  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
</div>

  <div className="space-y-6">

    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
      <FaCertificate className="text-3xl text-sky-300 mb-3" />

      <h3 className="text-xl font-semibold">
        Python for Data Science
      </h3>

      <p className="text-slate-300">
        SWAYAM NPTEL
      </p>

      <p className="text-green-300 mt-2">
        Score: 69%
      </p>
    </div>

    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
      <FaCertificate className="text-3xl text-sky-300 mb-3" />

      <h3 className="text-xl font-semibold">
        Frontend React Development
      </h3>

      <p className="text-slate-300">
        Successfully completed 15 Days Internship Training at Qryptex.
      </p>
    </div>

    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
      <FaCertificate className="text-3xl text-sky-300 mb-3" />

      <h3 className="text-xl font-semibold">
        Arduino Based Obstacle Avoiding Car Project
      </h3>

      <p className="text-slate-300">
        Participation Certificate received during College Expo.
      </p>
    </div>

  </div>
</section>

      <section
  id="contact"
  className="max-w-6xl mx-auto px-6 py-20"
>

  <div className="text-center mb-16">
    
    <h2 className="text-5xl font-black mt-2">
      Let's Connect
    </h2>

    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"></div>

    <p className="max-w-2xl mx-auto mt-6 text-slate-300">
      I'm available to discussing new opportunities,
      collaborations, projects, and learning experiences.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-center hover:-translate-y-2 transition">

      <FaPhone className="mx-auto text-5xl text-cyan-300 mb-5" />

      <h3 className="text-2xl font-bold mb-3">
        Phone
      </h3>

      <p className="text-slate-300">
        +91 7397708682
      </p>

    </div>

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-center hover:-translate-y-2 transition">

      <FaEnvelope className="mx-auto text-5xl text-cyan-300 mb-5" />

      <h3 className="text-2xl font-bold mb-3">
        Email
      </h3>

      <p className="text-slate-300 break-all">
        afisalam64@gmail.com
      </p>

    </div>

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-center hover:-translate-y-2 transition">

      <FaMapMarkerAlt className="mx-auto text-5xl text-cyan-300 mb-5" />

      <h3 className="text-2xl font-bold mb-3">
        Location
      </h3>

      <p className="text-slate-300">
        Ayangudi,
        Kattumannarkoil Taluk,
        Cuddalore District,
        Tamil Nadu
      </p>

    </div>

  </div>

</section>
    </div>
  );
}
