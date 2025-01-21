"use client";
export default function BookMark() {
  const bookmarks = [
    {
      id: 1,
      company: "Google",
      title: "Frontend Developer",
      status: "Pending",
      deadline: "2024-02-15",
      createdAt: "2024-01-10",
    },
    {
      id: 2,
      company: "Amazon",
      title: "Backend Developer",
      status: "Interview",
      deadline: "2024-02-20",
      createdAt: "2024-01-12",
    },
    {
      id: 3,
      company: "Microsoft",
      title: "Full Stack Developer",
      status: "Rejected",
      deadline: "2024-03-01",
      createdAt: "2024-01-15",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">My Bookmarks</h2>
      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
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
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-600 text-sm sm:text-base">
            {bookmarks.map((bookmark) => (
              <tr key={bookmark.id} className="hover:bg-gray-50 transition-all">
                <td className="px-6 py-4 whitespace-nowrap">
                  {bookmark.company}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {bookmark.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-xs font-medium ${
                      bookmark.status === "Pending"
                        ? "bg-yellow-500"
                        : bookmark.status === "Interview"
                        ? "bg-blue-500"
                        : "bg-red-500"
                    }`}
                  >
                    {bookmark.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {bookmark.deadline}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {bookmark.createdAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
