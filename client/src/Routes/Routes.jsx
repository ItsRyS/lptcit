import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Layouts
import LayoutStudent from "../layout/LayoutStudent";
import LayoutTeacher from "../layout/LayoutTeacher";

// Pages
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import HomeStudent from "../pages/HomeStudent/HomeStudent";
import HomeTeacher from "../pages/HomeTeacher/HomeTeacher";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />{" "}
        <Route path="*" element={<div>Page Not Found</div>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student/*" element={<LayoutStudent />} />
        <Route path="/teacher/*" element={<LayoutTeacher />} />
        <Route path="/student/home" element={<HomeStudent />} />
        <Route path="/teacher/home" element={<HomeTeacher />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
