"use client";
import React, { useState } from "react";
import {
  HiOutlineUser,
  HiOutlineAcademicCap,
  HiOutlineCollection,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineStar, // For achievement
  HiOutlineLightBulb,
  HiOutlineFlag, // Replaced HiOutlineLanguage with HiOutlineFlag
} from "react-icons/hi"; // Importing icons

const Profile = () => {
  const [activeSection, setActiveSection] = useState("about");

  const sections = [
    { name: "about", icon: <HiOutlineUser /> },
    { name: "education", icon: <HiOutlineAcademicCap /> },
    { name: "projects", icon: <HiOutlineCollection /> },
    { name: "experience", icon: <HiOutlineCollection /> }, // Assuming icon for experience
    { name: "skills", icon: <HiOutlineLightBulb /> },
    { name: "achievement", icon: <HiOutlineStar /> },
    { name: "training", icon: <HiOutlineLightBulb /> },
    { name: "language", icon: <HiOutlineFlag /> },
    { name: "email", icon: <HiOutlineMail /> },
    { name: "phone", icon: <HiOutlinePhone /> },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">
        My Profile
      </h2>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/4 flex flex-col space-y-2">
          {sections.map(({ name, icon }) => (
            <button
              key={name}
              onClick={() => setActiveSection(name)}
              className={`px-4 py-2 text-left text-sm font-medium transition-all flex items-center space-x-2 ${
                activeSection === name
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              } rounded-lg`}
            >
              <span>{icon}</span>
              <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
            </button>
          ))}
        </div>
        <div className="w-full sm:w-3/4 bg-white p-6 rounded-lg shadow-md">
          {activeSection === "about" && (
            <form className="space-y-4">
              <label className="block">
                <span className="text-gray-700">About</span>
                <textarea
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md"
                  rows={4}
                ></textarea>
              </label>
            </form>
          )}
          {activeSection === "education" && (
            <form className="space-y-4">
              <label className="block">
                <span className="text-gray-700">Degree</span>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">University</span>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Year of Graduation</span>
                <input
                  type="number"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md"
                />
              </label>
            </form>
          )}
          {activeSection === "projects" && (
            <form className="space-y-4">
              <label className="block">
                <span className="text-gray-700">Project Name</span>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Description</span>
                <textarea
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md"
                  rows={4}
                ></textarea>
              </label>
            </form>
          )}
          {activeSection === "email" && (
            <form className="space-y-4">
              <label className="block">
                <span className="text-gray-700">Email</span>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md"
                />
              </label>
            </form>
          )}
          {activeSection === "phone" && (
            <form className="space-y-4">
              <label className="block">
                <span className="text-gray-700">Phone</span>
                <input
                  type="tel"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md"
                />
              </label>
            </form>
          )}
          {/* Additional sections (experience, skills, achievement, etc.) can be handled similarly */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
