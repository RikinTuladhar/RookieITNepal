"use client";

import Brand from "@/components/Brand";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // HiX for close button

const SidePannel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Hamburger menu for small screens (only visible when sidebar is closed) */}
      {!sidebarOpen && (
        <button
          className="md:hidden p-2 fixed top-4 left-4 z-10 text-gray-700"
          onClick={toggleSidebar}
        >
          <HiMenu size={30} />
        </button>
      )}
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-200 ease-in-out bg-gray-100 text-white p-4 w-48 sm:w-56 md:w-36 lg:w-52 xl:w-64 z-10`}
      >
        <div className="content flex flex-col gap-5">
          {/* Close button (only visible when sidebar is open on small screens) */}
          <button
            className="md:hidden absolute top-0 right-2 text-gray-700"
            onClick={toggleSidebar}
          >
            <HiX size={30} />
          </button>

          <Brand />
          <ul>
            <li className="mb-4">
              <Link
                href={"/rookies/"}
                className="block p-2 hover:bg-green-200 text-gray-400 hover:text-green-600 rounded"
              >
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href={"/rookies/job-listings"}
                className="block p-2 hover:bg-green-200 text-gray-400 hover:text-green-600 rounded"
              >
                Job Listings
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href={"/rookies/applications"}
                className="block p-2 hover:bg-green-200 text-gray-400 hover:text-green-600 rounded"
              >
                Applications
              </Link>
            </li>
            <li>
              <Link
                href={"/rookies/bookmark"}
                className="block p-2 hover:bg-green-200 text-gray-400 hover:text-green-600 rounded"
              >
                Bookmarks
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidePannel;
