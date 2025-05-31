import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import QAInterface from "./pages/QAInterface";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center px-10 py-4 bg-gray-900 shadow-lg">

          <h1 className="text-2xl font-bold text-blue-400">DocIntelli</h1>
          <div className="flex gap-6 space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg px-4 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-blue-300 hover:bg-blue-700 hover:text-white"
                }`
              }
              end
            >
              <h2>
              |Dashboard
              </h2>
            </NavLink>
            <NavLink
              to="/upload"
              className={({ isActive }) =>
                `text-lg px-4 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-blue-300 hover:bg-blue-700 hover:text-white"
                }`
              }
            >
              <h2>
              |       |Upload
              </h2>
            </NavLink>
            <NavLink
              to="/qa"
              className={({ isActive }) =>
                `text-lg px-4 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-blue-300 hover:bg-blue-700 hover:text-white"
                }`
              }
            >
              <h2>
              |       |Ask Questions|</h2>
            </NavLink>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex justify-center items-start p-8">
          <div className="w-full max-w-6xl">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/qa" element={<QAInterface />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}
