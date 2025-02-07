import { motion } from "framer-motion";

// Skill Card Component
const SkillCard = ({ logo, title, description }) => (
  <motion.div
    className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-64 m-4 flex flex-col items-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={logo} alt={title} className="h-16 mb-4" />
    <h3 className="text-2xl font-semibold text-blue-400 mb-2">{title}</h3>
    <p className="text-gray-300 text-center">{description}</p>
  </motion.div>
);

// Main Skills Section
const Skills = () => {
  const skillsData = [
    {
      title: "MongoDB",
      logo: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon.png", // MongoDB logo (alternative)
      description: "A NoSQL database to store data in flexible, JSON-like documents.",
    },
    {
      title: "Express",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", // Express logo
      description: "A web framework for Node.js to build APIs and web apps.",
    },
    {
      title: "React",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // React logo
      description: "A JavaScript library for building user interfaces.",
    },
    {
      title: "Node.js",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", // Node.js logo
      description: "A JavaScript runtime built on Chrome's V8 engine for building scalable applications.",
    },
    {
      title: "Tailwind CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", // Tailwind CSS logo
      description: "A utility-first CSS framework to design custom interfaces quickly.",
    },
    {
      title: "Framer Motion",
      logo: "data:image/jpeg;base64,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", // Framer logo (alternative)
      description: "A React library to create animations and interactions.",
    },
    {
      title: "HTML",
      logo: "data:image/jpeg;base64,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", // HTML logo (alternative)
      description: "The standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      title: "CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg", // CSS logo
      description: "A style sheet language used for describing the presentation of a document written in HTML.",
    },
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center min-h-screen  text-white px-6 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl w-full rounded-2xl text-center mb-12 bg-gray-900 pt-6 pb-6"
      >
        <h2 className="text-4xl font-bold text-blue-400 mb-6">My Skills</h2>
        <p className="text-xl text-gray-300">
          Here are the technologies and tools I am proficient in.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center">
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            logo={skill.logo}
            description={skill.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
