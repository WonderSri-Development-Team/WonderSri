import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaHotel, FaStore, FaBell } from "react-icons/fa"; // Using Font Awesome icons

const features = [
  {
    title: "Explore Sri Lanka in Real-Time with Guru!",
    description:
      "Discover Sri Lanka with Guru, your virtual guide offering real-time cultural insights, travel tips, and precise directions. Experience the essence of Sri Lanka without the limits of a human guide.",
    icon: <FaMapMarkedAlt className="w-12 h-12 text-[#0047AB]" />,
  },
  {
    title: "Effortless Booking for Your Adventures!",
    description:
      "Plan your trip seamlessly with Guru. Book hotels and boat rides across Sri Lanka's stunning rivers and coasts. Let Guru handle the details while you focus on making memories.",
    icon: <FaHotel className="w-12 h-12 text-[#0047AB]" />,
  },
  {
    title: "Support Local with Guru's Picks",
    description:
      "Guru connects you to authentic local businesses. Discover hidden gems, rate your experiences, and support the local economy while exploring Sri Lanka.",
    icon: <FaStore className="w-12 h-12 text-[#0047AB]" />,
  },
  {
    title: "Stay Safe with Real-Time Alerts!",
    description:
      "Travel safely with Guru's real-time alerts. Get safety tips, cultural rules, and scam warnings. Relive your adventures with detailed analytics and share your journey on social media.",
    icon: <FaBell className="w-12 h-12 text-[#0047AB]" />,
  },
];

const Features = () => {
  return (
    <div
      id="features"
      className="py-16 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Experience Sri Lanka with Guru
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Your ultimate companion for exploring the wonders of Sri Lanka.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#0047AB] mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
