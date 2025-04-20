// Navbar.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed md:left-1/2 left-1/2 md:w-75   transform -translate-x-1/2 w-[75vw] bg-cyan-200/20 backdrop-blur-md border border-cyan-100/30 h-12 mt-3  rounded-3xl z-50 shadow-lg">
      {/* Mobile Menu Toggle */}
      

      {/* Desktop Menu */}
      <nav className=" md:flex  justify-center mt-2">
        <ul className="flex gap-3 justify-center text-white text-lg">
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="/">Home</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#skills">Skills</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#projects">Project</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#contact">Contact</a>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
