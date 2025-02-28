
const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center  text-white px-6 py-12"
    >
      <div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl  bg-gray-900 p-10 text-center rounded-2xl"
      >
        <h2 className="text-4xl font-bold text-blue-400  mb-6">About Me</h2>
        <p className="text-xl text-gray-300 mb-4">
          Hi, I'm <span className="text-blue-400">Satish</span>, a passionate
          web developer currently pursuing a BCA degree in my 2nd year at{" "}
          <span className="text-blue-400">Silver Oak University, Ahmedabad</span>.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          I am deeply focused on learning the{" "}
          <span className="text-blue-400">MERN stack</span> and building modern,
          scalable web applications.
        </p>
        <p className="text-lg text-gray-300">
          My goal is to become proficient in the MERN stack and build full-stack
          applications that solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default About;
