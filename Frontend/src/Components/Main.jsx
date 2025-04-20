import { motion } from "framer-motion";

const Main = () => {
  return (
    <section
      className="flex font-mono flex-col-reverse md:flex-row items-center justify-around px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-16 lg:py-20  min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col max-w-3xl mt-5 bg-zinc-300 rounded-2xl p-10 w-full shadow-lg text-left"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl sm:text-xl md:text-2xl font-bold text-black mb-4"
        >
          Hi, I'm <span className="text-gray-600">Satish Vaishnav</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="sm:text-lg md:text-2xl text-xl text-black mb-6"
        >
          I'm a passionate{" "}
          <span className="text-blue-600 font-semibold">Full Stack Developer</span>{" "}
          currently Work at <span className="text-purple-700 font-bold">TechySquad</span>, where I build scalable web applications.
          I’m also an enthusiastic{" "}
          <span className="text-green-700 font-semibold">Hackathon participant</span>{" "}
          who loves solving real-world problems through tech.
        </motion.p>

        <div className="mt-4">
          <h2 className="text-black font-bold text-xl">Location:</h2>
          <span className="font-semibold text-blue-600 text-lg">Ahmedabad, India</span>
        </div>
      </motion.div>

      <motion.img
        src="/Profile-photo.png"
        alt="Satish Vaishnav Profile"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="w-40 sm:w-80 mt-15 md:w-105 lg:w-96 h-auto min-w-80 rounded-2xl mb-6 md:mb-0 object-cover shadow-xl shadow-blue-300"
      />
    </section>
  );
};

export default Main;
