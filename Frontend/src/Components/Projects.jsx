const Projects = () => {
  return (
    <section id="projects" className="py-16 text-blue-400">
      <div className="container mx-auto px-6 text-center">
        <h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-gray-800 rounded-lg shadow-lg p-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/chat.png"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">
              AI-Based Interview Platform
            </h3>
            <p className="text-gray-400 mb-4">
              <b>Brahma Code Hackathon, SKIP University *Winner </b>
              Developed an AI-powered mock interview platform with MERN stack, providing real-time feedback to enhance interview skills. Recognized for innovation.
            </p>
            <a
              href="#"
              className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
            >
              Github Link
            </a>
          </div>
          <div
            className="bg-gray-800 rounded-lg shadow-lg p-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/chat.png"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">AI CHAT-BOT</h3>
            <p className="text-gray-400 mb-4">
            <b> SOUIVATHON Hackathon, SILVER OAK University </b>
            Developed a real-time conversational chatbot integrating Gemini API, enabling dynamic interactions and enhancing user experience with intelligent responses.
            </p>
            <a
              href="#"
              className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
            >
              Github Link
            </a>
          </div>
          
          <div
            className="bg-gray-800 rounded-lg shadow-lg p-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/image.png"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Portfolio Website</h3>
            <p className="text-gray-400 mb-4">
            Built a personal portfolio showcasing MERN stack projects, highlighting coding skills, creativity, and passion for web development with dynamic, responsive design.
            </p>
            <a
              href="#"
              className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
            >
              Github Link
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
