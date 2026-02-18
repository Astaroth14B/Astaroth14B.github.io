import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import CyberButton from "./CyberButton";
import { FiMenu, FiX } from "react-icons/fi";
import profileImg from "../assets/images/Pranish.jpg";

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  const linkClasses = ({ isActive }) => `
    relative flex items-center gap-3 px-4 py-3 rounded-sm
    text-sm md:text-base font-rajdhani uppercase tracking-wider
    transition-all duration-300 group overflow-hidden
    ${isActive
      ? "text-cyber-cyan border-l-2 border-cyber-cyan bg-cyber-cyan/10"
      : "text-white/90 hover:text-cyber-cyan group-hover:border-l-2 group-hover:border-cyber-cyan"
    }
  `;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/techstack", label: "Tech Stack" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="hidden max-md:flex fixed top-4 left-4 z-50 p-2 text-cyber-cyan hover:text-cyber-magenta transition-colors"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : 0 }}
        className={`
          fixed md:relative w-full max-w-xs h-screen
          bg-gradient-to-b from-cyber-gray via-cyber-dark to-cyber-dark
          border-r border-cyber-cyan/30
          flex flex-col justify-between px-6 py-8 md:py-10
          overflow-y-auto
          ${sidebarOpen ? "block" : "max-md:hidden"}
          z-40
          grain-overlay
        `}
      >
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h2 className="font-orbitron font-bold text-2xl md:text-3xl tracking-widest text-cyber-cyan text-glow-cyan mb-1 leading-none">
            PRANISH
          </h2>
          <h2 className="font-orbitron font-bold text-2xl md:text-3xl tracking-widest text-cyber-cyan mb-3 text-glow-cyan leading-none">
            ACHARYA
          </h2>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent mb-4"></div>
          <p className="font-rajdhani text-xs md:text-sm font-semibold text-cyber-cyan/80 uppercase tracking-widest">
            Video Editor | VFX Artist
          </p>
          <p className="font-rajdhani text-xs md:text-sm font-semibold text-cyber-magenta/80 uppercase tracking-widest">
            Front-End Developer
          </p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center my-6"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-2 border-cyber-cyan/50 p-2 hover-lift box-glow overflow-hidden">
            <div className="w-full h-full rounded-full bg-cyber-cyan/10 flex items-center justify-center overflow-hidden">
              <img
                src={profileImg}
                alt="Pranish Acharya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-3"
        >
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={linkClasses}
              onClick={() => setSidebarOpen(false)}
            >
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                {item.label}
              </motion.span>
            </NavLink>
          ))}
        </motion.nav>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
            <CyberButton variant="primary" className="w-full text-center">
              Download CV
            </CyberButton>
          </a>
        </motion.div>

        {/* Social links footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-xs text-cyber-cyan/50 font-rajdhani"
        >
          <p>© 2024 Pranish Acharya</p>
        </motion.div>
      </motion.div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SideBar;
