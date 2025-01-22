"use client";
import React, { useState } from "react";

const Application = () => {
  const [activeTab, setActiveTab] = useState("all");

  const jobs = [
    {
      id: 1,
      company: "Google",
      title: "Frontend Developer",
      status: "Pending",
      deadline: "2024-02-15",
      createdAt: "2024-01-10",
      openings: 3,
      location: "New York",
    },
    {
      id: 2,
      company: "Amazon",
      title: "Backend Developer",
      status: "Viewed",
      deadline: "2024-02-20",
      createdAt: "2024-01-12",
      openings: 5,
      location: "Seattle",
    },
    {
      id: 3,
      company: "Microsoft",
      title: "Full Stack Developer",
      status: "Offered",
      deadline: "2024-03-01",
      createdAt: "2024-01-15",
      openings: 2,
      location: "Redmond",
    },
    {
      id: 4,
      company: "Facebook",
      title: "UI/UX Designer",
      status: "Rejected",
      deadline: "2024-02-10",
      createdAt: "2024-01-08",
      openings: 4,
      location: "Menlo Park",
    },
    {
      id: 5,
      company: "Apple",
      title: "Mobile Developer",
      status: "Hired",
      deadline: "2024-02-25",
      createdAt: "2024-01-18",
      openings: 1,
      location: "Cupertino",
    },
  ];

  const filterJobs = (status: string) => {
    if (status === "all") return jobs;
    return jobs.filter((job) => job.status.toLowerCase() === status);
  };

  const sections = ["all", "pending", "viewed", "offered", "rejected", "hired"];

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Job Listings</h2>
      <div className="flex space-x-4 mb-4 overflow-x-auto">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setActiveTab(section)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === section
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="min-w-full bg-white hover:bg-gray-200 cursor-pointer border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr className="text-left text-gray-700 text-sm sm:text-base">
              <th className="px-6 py-4 border-b border-gray-300 font-semibold">
                Company
              </th>
              <th className="px-6 py-4 border-b border-gray-300 font-semibold">
                Title
              </th>
              <th className="px-6 py-4 border-b border-gray-300 font-semibold">
                Status
              </th>
              <th className="px-6 py-4 border-b border-gray-300 font-semibold">
                Deadline
              </th>
              <th className="px-6 py-4 border-b border-gray-300 font-semibold">
                Created At
              </th>
              <th className="px-6 py-4 border-b border-gray-300 font-semibold">
                Openings
              </th>
              <th className="px-6 py-4 border-b border-gray-300 font-semibold">
                Location
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-600 text-sm sm:text-base">
            {filterJobs(activeTab).map((job) => (
              <tr key={job.id} className="hover:bg-gray-50 transition-all">
                <td className="px-6 py-4 whitespace-nowrap">{job.company}</td>
                <td className="px-6 py-4 whitespace-nowrap">{job.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-xs font-medium ${
                      job.status === "Pending"
                        ? "bg-yellow-500"
                        : job.status === "Viewed"
                        ? "bg-blue-500"
                        : job.status === "Offered"
                        ? "bg-green-500"
                        : job.status === "Rejected"
                        ? "bg-red-500"
                        : "bg-purple-500"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{job.deadline}</td>
                <td className="px-6 py-4 whitespace-nowrap">{job.createdAt}</td>
                <td className="px-6 py-4 whitespace-nowrap">{job.openings}</td>
                <td className="px-6 py-4 whitespace-nowrap">{job.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Application;
