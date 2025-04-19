// Navbar.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed md:left-1/2 left-1/2  transform -translate-x-1/2 w-[80vw] bg-cyan-200/20 backdrop-blur-md border border-cyan-100/30 h-15 mt-5 p-2 rounded-3xl z-50 shadow-lg">
      {/* Mobile Menu Toggle */}
      

      {/* Desktop Menu */}
      <nav className=" md:flex justify-center mt-2">
        <ul className="flex gap-4 pl-2 text-white text-lg">
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="/">Home</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="/skills">Skills</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="/projects">Project</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="/contact">Contact</a>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
