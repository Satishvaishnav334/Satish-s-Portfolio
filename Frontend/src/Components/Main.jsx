import { motion } from "framer-motion";
import bg from "./assets/bg.png";

const Main = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-around text-center px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-16 lg:py-20 mb-0 min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=" flex flex-wrap max-w-3xl bg-blue-950 rounded-2xl m-15 p-15 w-full"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm <span className="text-blue-400">Satish Kumar</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white mb-6">
          I'm a passionate{" "}
          <span className="text-blue-300  font-semibold">Web Developer</span> with a love for creating beautiful and functional websites.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          View My Work
        </a>
      </motion.div>

      <img
        src={bg}
        alt="Profile Image"
        className="w-40 sm:w-80 mt-20 md:w-105 lg:w-96 h-auto min-w-80  rounded-2xl mb-6 md:mb-0 object-cover shadow-xl  shadow-blue-300"
      />
    </section>
  );
};

export default Main;
