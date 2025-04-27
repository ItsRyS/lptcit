import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import HomeStudent from '../pages/HomeStudent/HomeStudent'; 

const LayoutStudent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <div className="font-bold">Lampang Tech | Student</div>
        <div className="space-x-4">
          <Link to="/student" className="hover:underline">Home</Link>
          <Link to="/student/profile" className="hover:underline">Profile</Link>
          <Link to="/login" className="hover:underline">Logout</Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow p-6 bg-gray-100">
        <Routes>
          <Route index element={<HomeStudent />} />
          {/* เพิ่มหน้าอื่นๆ ของนักเรียน */}
          <Route path="profile" element={<div>Student Profile Page</div>} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4">
        © 2025 Lampang Tech College
      </footer>

    </div>
  );
};

export default LayoutStudent;
