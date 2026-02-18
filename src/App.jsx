
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import SideBar from "./Components/SideBar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import TechStack from "./Pages/TechStack";
import Contact from "./Pages/Contact";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cyber-dark text-white overflow-x-hidden grain-overlay scan-lines">
      {/* Background gradients and effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyber-dark via-cyber-gray to-cyber-dark pointer-events-none -z-10"></div>

      {/* Animated background elements */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-cyber-magenta/5 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="flex h-screen">
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex-1 overflow-auto relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/techstack" element={<TechStack />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
