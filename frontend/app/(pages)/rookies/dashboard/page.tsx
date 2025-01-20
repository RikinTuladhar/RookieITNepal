"use client";
export default function Dashboard() {
  return (
    <div className="bg-green-300 min-h-screen p-4">
      <div className="flex justify-end items-center gap-4 bg-white p-4 shadow-md rounded-lg">
        {/* Notification Icon */}
        <div className="relative cursor-pointer">
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            3
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V10a6 6 0 00-9.33-4.897M9 17a3 3 0 006 0m-6 0H5l1.405-1.405A2.032 2.032 0 018 14V10a6 6 0 019-4.897"
            />
          </svg>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-gray-400"
          />
          <p className="text-gray-700 font-semibold">John Doe</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Hey there, username!
        </h1>
        <p className="text-gray-600 mt-2">
          Here you can manage all your tasks and notifications.
        </p>
      </div>
    </div>
  );
}
