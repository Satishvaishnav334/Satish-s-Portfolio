import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 right-4 left-4 rounded-xl p-4 bg-white/10 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Satish Portfolio</div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-gray-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-300">About</a>
          <a href="#skills" className="text-white hover:text-gray-300">Skills</a>
          <a href="#projects" className="text-white hover:text-gray-300">Projects</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`${isOpen ? "block" : "hidden"} md:hidden flex flex-col items-center bg-blue/10 backdrop-blur-lg shadow-lg py-4 space-y-4`}
      >
        <a href="#home" className="text-white hover:text-gray-300">Home</a>
        <a href="#about" className="text-white hover:text-gray-300">About</a>
        <a href="#projects" className="text-white hover:text-gray-300">Projects</a>
        <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
