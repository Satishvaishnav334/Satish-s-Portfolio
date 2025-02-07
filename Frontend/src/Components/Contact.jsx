import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://my-portfolio-apx9.onrender.com/api/contact", formData);
      alert("Message sent successfully!");
      console.log(response.data);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div 
      className="max-w-lg md:mx-auto m-5 p-8 bg-gray-800 shadow-lg rounded-2xl text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <div className="space-y-4">
        <a href="mailto:satishvaishna@gmail.com" className="flex items-center justify-start space-x-2 text-blue-500 hover:underline">
          <FaEnvelope />
          <span>satishvaishna@gmail.com</span>
        </a>
        <a href="https://linkedin.com/in/satish-vaishnav" target="_blank" rel="noopener noreferrer" className="flex items-center justify-start space-x-2 text-blue-700 hover:underline">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/Satishvaishnav334" target="_blank" rel="noopener noreferrer" className="flex items-center justify-start space-x-2 text-white-800 hover:underline">
          <FaGithub />
          <span>GitHub</span>
        </a>
        <button onClick={handleDownloadResume} className="flex items-center justify-center space-x-2 text-green-600 hover:underline">
          <FaFileAlt />
          <span>Download Resume</span>
        </button>
      </div>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          className="w-full p-2 border rounded-lg"
          required
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full p-2 border rounded-lg"
          required
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          className="w-full p-2 border rounded-lg"
          required
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
