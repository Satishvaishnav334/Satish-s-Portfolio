// Navbar.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed  left-1/2 transform -translate-x-1/2 w-[25vw] bg-cyan-200/20 backdrop-blur-md border border-cyan-100/30 h-15 mt-5 p-2 rounded-3xl z-50 shadow-lg">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex justify-between items-center">
        <div className="text-white font-semibold text-lg">Menu</div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="absolute top-full left-0 w-full bg-cyan-200/20 backdrop-blur-lg mt-2 rounded-b-3xl shadow-md"
            >
              <ul className="flex flex-col items-center text-white py-4 space-y-4">
                <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                  <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                </motion.li>
                <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                  <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
                </motion.li>
                <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                  <Link to="/project" onClick={() => setIsOpen(false)}>Projects</Link>
                </motion.li>
                <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </motion.li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex justify-center  mt-2">
        <ul className="flex space-x-10  text-white text-lg">
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/skills">Skills</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/projects">Project</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact">Contact</Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
