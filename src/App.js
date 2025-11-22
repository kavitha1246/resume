import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navBar';
import Home from './Home';
import Education from './Education';
import Experience from './Experience/experience';
import SkillSet from './Skills';
import Certifications from './Certification';
import Contact from './Contact';
import ResumeActions from './Download';

export default function App() {
  return (
    <BrowserRouter basename="/kavitha1246/resume">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<SkillSet />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/download" element={<ResumeActions />} />
      </Routes>
    </BrowserRouter>
  );
}
