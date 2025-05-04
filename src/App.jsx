import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import React
import React from "react";

// Import Layouts
import DefaultLayout from "./layouts/DefaultLayout";

// Import Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
