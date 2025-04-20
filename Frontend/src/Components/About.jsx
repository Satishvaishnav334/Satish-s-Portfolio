import { motion } from "framer-motion";

const About = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="about"
      className="flex font-mono flex-col-reverse md:flex-row items-center justify-around px-2 sm:px-6 md:px-5 lg:px-5 py-10 md:py-10 lg:py-10  min-h-screens"
    >
      {/* Info Card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-md bg-zinc-300 p-8 my-10 rounded-2xl shadow-lg text-left text-black font-mono"
      >
        <motion.h2
          variants={textVariant}
          className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6"
        >
          About Me
        </motion.h2>

        <motion.p variants={textVariant} custom={1} className="text-lg mb-4">
          Hi, I'm <span className="text-indigo-600">Satish</span>, a passionate web developer currently pursuing my BCA (2nd year) at{" "}
          <span className="text-indigo-600">Silver Oak University, Ahmedabad</span>.
        </motion.p>

        <motion.p variants={textVariant} custom={2} className="text-lg mb-4">
          My primary focus is on mastering the{" "}
          <span className="text-indigo-600 font-semibold">MERN Stack</span> and building
          modern, scalable web apps.
        </motion.p>

        <motion.p variants={textVariant} custom={3} className="text-lg mb-4">
          <span className="text-green-600 font-semibold">Goal:</span> Become a
          full-stack developer solving real-world problems through tech.
        </motion.p>

        <motion.p variants={textVariant} custom={4} className="text-lg">
          <span className="text-yellow-600 font-semibold">Interest:</span> Hackathons,
          UI/UX design, problem solving, and{" "}
          <span className="text-pink-600 font-semibold">currently learning Cybersecurity</span> to expand my technical depth.
        </motion.p>
      </motion.div>

      {/* Achievements Card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-md bg-zinc-300 p-8 rounded-2xl shadow-lg text-left text-black"
      >
        <motion.h2
          variants={textVariant}
          className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6"
        >
          Achievements
        </motion.h2>

        <motion.ul className="list-disc list-inside text-lg space-y-3">
          <motion.li variants={textVariant} custom={1}>
            🏆 <span className="text-indigo-600 font-semibold">1st Prize</span> in{" "}
            <span className="text-purple-600 font-semibold">Brahma Code Hackathon</span> at SKIP University.
          </motion.li>
          <motion.li variants={textVariant} custom={2}>
            📜 Received multiple certificates in web development, UI/UX, and coding challenges.
          </motion.li>
          <motion.li variants={textVariant} custom={3}>
            🚀 Participated in 5+ hackathons and collaborative tech events.
          </motion.li>
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default About;
