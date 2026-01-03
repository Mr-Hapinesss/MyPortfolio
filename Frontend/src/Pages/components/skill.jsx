import React from 'react';
import {Link} from "react-router-dom";
import { Database, Zap, Code, Layout, Server, Layers } from 'lucide-react';

export default function SkillsGrid() {
  const skills = [
    {
      title: "MERN Stack",
      desc: "Fullstack JavaScript development using MongoDB, Express, React, and Node.js.",
      icon: <Layers className="text-blue-500" />,
      tags: ["MongoDB", "Express", "React", "Node"]
    },
    {
      title: "Real-time Systems",
      desc: "Building event-driven applications with low-latency communication.",
      icon: <Zap className="text-yellow-500" />,
      tags: ["Socket.io", "WebSockets", "Polling"]
    },
    {
      title: "Backend Engineering",
      desc: "Robust server-side logic and data management.",
      icon: <Server className="text-green-500" />,
      tags: ["Python", "Django", "SQL"]
    },
    {
      title: "Modern Styling",
      desc: "Utility-first CSS for rapid UI development and responsive design.",
      icon: <Layout className="text-cyan-500" />,
      tags: ["Tailwind CSS", "Flexbox", "Grid"]
    },
    {
      title: "Language Mastery",
      desc: "Writing clean code with dynamic or static typing as needed.",
      icon: <Code className="text-purple-500" />,
      tags: ["JavaScript", "TypeScript"]
    },
    {
      title: "Architecture",
      desc: "Designing scalable software for web and mobile platforms.",
      icon: <Database className="text-red-500" />,
      tags: ["REST APIs", "Mobile Dev", "MVC"]
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Technical Expertise</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Specialized in building end-to-end applications with a focus on speed, 
            type-safety, and real-time user engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {skill.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-end'>
            <Link to={"/about"} ><button className='bg-blue-300 p-2 rounded-lg mt-2 hover:bg-blue-500'>See more...</button></Link>
        </div>
      </div>
    </section>
  );
}