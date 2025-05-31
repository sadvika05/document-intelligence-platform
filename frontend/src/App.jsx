import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import QAInterface from "./pages/QAInterface";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Navigation Bar */}
        <nav className="flex p-6 bg-gray-800 shadow-md">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-xl font-semibold px-4 py-2 rounded transition duration-200 ${
                isActive ? "bg-blue-500 text-white" : "text-blue-400 hover:bg-blue-600 hover:text-white"
              }`
            }
            end
          >
            <h1 className="mb-6">|Dashboard</h1>
          </NavLink>
          <NavLink
            to="/upload"
            className={({ isActive }) =>
              `text-xl font-semibold px-4 py-2 rounded transition duration-200 ${
                isActive ? "bg-blue-500 text-white" : "text-blue-400 hover:bg-blue-600 hover:text-white"
              }`
            }
          >
           <h1 className="mb-6">|                                  |Upload</h1>
          </NavLink>
          <NavLink
            to="/qa"
            className={({ isActive }) =>
              `text-xl font-semibold px-4 py-2 rounded transition duration-200 ${
                isActive ? "bg-blue-500 text-white" : "text-blue-400 hover:bg-blue-600 hover:text-white"
              }`
            }
          >
          <h1>|                        |Ask Questions|</h1>
          </NavLink>
        </nav>

        {/* Page Content */}
        <main className="flex justify-center items-start p-10">
          <div className="w-full max-w-5xl space-x-10">
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
