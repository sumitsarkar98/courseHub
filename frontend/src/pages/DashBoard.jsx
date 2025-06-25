import React, { useState } from "react";
import studentImage from "../assets/studentImage3.png";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-[calc(100vh-100px)] mt-[100px]">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block w-64 bg-[#d9d9d9] p-6 fixed top-[100px] left-0 h-[calc(100vh-100px)] z-20`}
      >
        <div className="flex flex-col items-center">
          <img
            src={studentImage}
            alt="profile"
            className="w-28 h-28 rounded-full mb-2 border-4 border-white shadow"
          />
          <h3 className="font-semibold text-center text-lg">Sumit Sarkar</h3>
        </div>
        <ul className="mt-8 space-y-4 text-sm font-medium">
          <li>
            <a href="#profile" className="block">
              Profile
            </a>
          </li>
          <li>
            <a href="#courses" className="block">
              My Courses
            </a>
          </li>
          <li>
            <a href="#about" className="block">
              About
            </a>
          </li>
          <li>
            <a href="#settings" className="block">
              Settings
            </a>
          </li>
        </ul>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-[100px] left-0 right-0 bg-[#d9d9d9] p-4 z-30 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <button
          onClick={toggleSidebar}
          className="text-2xl font-bold focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 overflow-y-auto p-6 w-full h-[calc(100vh-100px)] ">
        <header className="mb-8">
          <h3 className="text-2xl font-bold">Welcome Back, Sumit </h3>
        </header>

        <section id="profile" className="my-8">
          <h2 className="text-xl font-semibold mb-2 ">📄 Profile</h2>
          <div className="bg-white p-4 rounded shadow">
            <p>
              <strong>Name:</strong> Sumit Sarkar
            </p>
            <p>
              <strong>Email:</strong> sumit@example.com
            </p>
            <p>
              <strong>Member since:</strong> January 2024
            </p>
          </div>
        </section>

        <section id="courses" className="my-8">
          <h2 className="text-xl font-semibold mb-2">📚 My Courses</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">React for Beginners</h3>
              <p className="text-sm text-gray-600">Progress: 75%</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Advanced JavaScript</h3>
              <p className="text-sm text-gray-600">Progress: 40%</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Tailwind CSS Mastery</h3>
              <p className="text-sm text-gray-600">Progress: 90%</p>
            </div>
          </div>
        </section>

        <section id="about" className="my-8">
          <h2 className="text-xl font-semibold mb-2">ℹ️ About</h2>
          <div className="bg-white p-4 rounded shadow">
            <p>
              This dashboard helps students monitor their learning progress,
              access courses, and manage account preferences.
            </p>
          </div>
        </section>

        <section id="settings">
          <h2 className="text-xl font-semibold my-2">⚙️ Settings</h2>
          <div className="bg-white p-4 rounded shadow space-y-2">
            <p>🔒 Change Password</p>
            <p>📬 Update Email</p>
            <p>🚪 Logout</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
