"use client";

import { IoIosNotifications } from "react-icons/io";
import { IoBookmarkSharp } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";

export default function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 shadow-md rounded-lg">
        {/* Notification Icon */}
        <div className="relative cursor-pointer">
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            3
          </span>
          <IoIosNotifications className="h-8 w-8 text-gray-600" />
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2 cursor-pointer mt-4 sm:mt-0">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-gray-400"
          />
          <p className="text-gray-700 font-semibold text-sm sm:text-base">
            John Doe
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-6 text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-800">
          Hey there, <span className="text-blue-500">username!</span>
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Here you can manage all your tasks and notifications.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Job Applications */}
        <div className="bg-white p-2 rounded-lg shadow hover:shadow-lg transition-all flex items-center justify-between">
          {/* Number Display */}
          <div className=" flex flex-col gap-3">
            <span className="text-2xl font-bold text-gray-700">12</span>
            <h2 className="text-xl">Applied</h2>
          </div>
          {/* Icon */}
          <div className="text-red-500 text-4xl ">
            <BsBriefcase />
          </div>
        </div>

        {/* Saved Jobs */}
        <div className="bg-white p-2 rounded-lg shadow hover:shadow-lg transition-all flex items-center justify-between">
          {/* Number Display */}
          <div className=" flex flex-col gap-3">
            <span className="text-2xl font-bold text-gray-700">12</span>
            <h2 className="text-xl">Bookmarks</h2>
          </div>
          {/* Icon */}
          <div className="text-green-500 text-4xl ">
            <IoBookmarkSharp />
          </div>
        </div>

        {/* Messages */}
        <div className="bg-white p-2 rounded-lg shadow hover:shadow-lg transition-all flex items-center justify-between">
          {/* Number Display */}
          <div className=" flex flex-col gap-3">
            <span className="text-2xl font-bold text-gray-700">12</span>
            <h2 className="text-xl">Bookmarks</h2>
          </div>
          {/* Icon */}
          <div className="text-green-500 text-4xl ">
            <IoBookmarkSharp />
          </div>
        </div>

        {/* Profile Completion */}
        <div className="bg-white p-2 rounded-lg shadow hover:shadow-lg transition-all flex items-center justify-between">
          {/* Number Display */}
          <div className=" flex flex-col gap-3">
            <span className="text-2xl font-bold text-gray-700">12</span>
            <h2 className="text-xl">Bookmarks</h2>
          </div>
          {/* Icon */}
          <div className="text-green-500 text-4xl ">
            <IoBookmarkSharp />
          </div>
        </div>
      </div>
    </div>
  );
}
