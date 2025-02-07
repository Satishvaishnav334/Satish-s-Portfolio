import { motion } from "framer-motion";
import Portfolio from './assets/image.png'
import sportify from './assets/sportify.png'
import chatbot from './assets/chat.png' 

const Projects = () => {
  return (
    <section id="projects" className="py-16 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <motion.div 
              
              className="bg-gray-800 rounded-lg shadow-lg p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              >
              <img src={chatbot} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">Chatbot AI</h3>
              <p className="text-gray-400 mb-4">A chatbot integrated with OpenAI API for real-time conversation.</p>
              <a 
                href="#"
                className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
                >
                Github Link
              </a>
            </motion.div>
            <motion.div 
              
              className="bg-gray-800 rounded-lg shadow-lg p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              >
              <img src={sportify} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">Sportfy Music streming</h3>
              <p className="text-gray-400 mb-4">An music steming platform with song list and basic features.</p>
              <a 
                href="https://github.com/Satishvaishnav334/Spotify"
                className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
                >
                Github Link
              </a>
            </motion.div>
            <motion.div 
              
              className="bg-gray-800 rounded-lg shadow-lg p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              >
              <img src={Portfolio} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">Portfolio Website</h3>
              <p className="text-gray-400 mb-4">A personal portfolio built with React and Tailwind CSS.</p>
              <a 
                href="#"
                className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
                >
                Github Link
              </a>
            </motion.div>
            </div>
      </div>
    </section>
  );
};

export default Projects;
