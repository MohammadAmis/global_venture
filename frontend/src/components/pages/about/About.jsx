import { useState, useEffect } from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaArrowUp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdPhone } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion"; // Import from framer-motion
import jackfruit from '../../../assets/jackfruit_1.jpg';
import CEO from '../../../assets/CEO.jpg';
import CTO from '../../../assets/CTO.jpg';
import Marketing from '../../../assets/Marketing.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState("company");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const teamMembers = [
    {
      name: "Abdullah Izhar",
      role: "CEO",
      description: "Visionary leader with 15+ years of industry experience",
      image: CEO,
    },
    {
      name: "Mohammad Amis",
      role: "CTO",
      description: "Tech innovator driving digital transformation",
      image: CTO,
    },
    {
      name: "Saeed",
      role: "Marketing Director",
      description: "Creative mind behind our brand identity",
      image: Marketing,
    },
  ];

  const tabContent = {
    company: (
      <motion.div
        key="company"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">About Our Company</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={jackfruit}
              alt="Company office"
              className="rounded-lg w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x300?text=Company+Image";
              }}
            />
          </div>
          <div>
            <p className="text-black leading-relaxed">
            Global Venture is a trailblazing Indian company that creates innovative products using the versatile superfood, jackfruit. Based in Mumbai, this sustainability-focused enterprise offers a range of thoughtfully developed, natural products designed to contribute to a healthier planet. Global Venture is committed to shaping a better future by producing items made from ethically cultivated and responsibly sourced ingredients, processed with meticulous hygiene standards. Their products are free from preservatives, have a shelf life of one year, and do not require refrigeration, combining convenience with eco-consciousness.
            </p>
          </div>
        </div>
      </motion.div>
    ),
    team: (
      <motion.div
        key="team"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-3 text-gray-800 text-center">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-transparent rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-96 object-fill rounded-full "
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x400?text=Team+Member";
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    ),
    mission: (
      <motion.div
        key="mission"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center max-w-3xl mx-auto h-fit">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Purpose & Value</h2>
          <div className="mb-4 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Purpose</h3>
            <p className="text-black leading-relaxed text-justify">
            At Global Venture, we are driven by a passion for healthy, sustainable food. Our mission is to deliver ethically sourced, sustainably cultivated products to our customers' tables while exploring alternative foods that promote both personal well-being and environmental sustainability. We wholeheartedly support cruelty-free eating and advocate for a vegan lifestyle.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3 text-purple-600">Our Value</h3>
            <p className="text-black text-justify leading-relaxed">
            Our core values include championing indigenous agricultural practices, ensuring fair compensation for farmers, prioritizing premium-quality natural produce, and offering it at the best value for our customers. We are committed to maintaining the highest standards of safety and implementing eco-friendly practices across all facets of our operations.
            </p>
          </div>
        </div>
      </motion.div>
    ),
    contact: (
      <motion.div
        key="contact"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border-2 border-gray-300 text-black bg-white rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border-2 border-gray-300 text-black bg-white rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border-2 border-gray-300 text-black bg-white rounded-lg "
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="flex items-center">
              <IoLocationSharp className="text-2xl text-blue-600 mr-4" />
              <p className="text-black">Building No 93 Ground Floor, Undriya Street (Chauki Mohalla) Nagpada , Mumbai, Maharashtra India 400008</p>
            </div>
            <div className="flex items-center">
              <MdEmail className="text-2xl text-blue-600 mr-4" />
              <p className="text-black">adimugeera@gmail.com</p>
            </div>
            <div className="flex items-center">
              <MdPhone className="text-2xl text-blue-600 mr-4" />
              <p className="text-gray-600">+91 9555891697</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    ),
  };

  return (
    <div className="min-h-[calc(100vh-4rem] max-w-7xl mx-auto">
      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center mb-6 gap-4">
          {["company", "team", "mission", "contact"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full capitalize ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              } transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
              aria-label={`View ${tab} section`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Animated Tab Content */}
        <div className="bg-gradient-to-r from-blue-300 to-purple-400 rounded-lg shadow-lg px-8 p-5">
          <AnimatePresence mode="wait">
            {tabContent[activeTab]}
          </AnimatePresence>
        </div>
        
      </div>
    </div>
  );
};

export default About;