import SidePannel from "./SidePannel";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4 h-screen">
      {/* Sidebar */}
      <SidePannel />

      {/* Main Content */}
      <main className="flex-1 ml-[18%] p-6 text-black bg-gray-200 overflow-auto">
        {children}
      </main>
    </div>
  );
}
