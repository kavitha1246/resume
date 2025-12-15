import { HashRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}
