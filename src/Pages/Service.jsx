import React from "react";
import { motion } from "framer-motion";
import {
  BiSolidUserVoice,
  BiCodeAlt,
  BiPaint,
  BiCamera,
  BiMobileAlt,
  BiBullseye,
  BiSearchAlt2,
  BiBookAlt,
  BiBarChartAlt2,
} from "react-icons/bi";

export const Service = () => {
  const service = [
    {
      icon: <BiCamera size={40} />,
      name: "Photography",
      description: "Professional photography services.",
      bg: "bg-rose-100",
      iconColor: "text-rose-500",
    },
    {
      icon: <BiSolidUserVoice size={40} />,
      name: "Alarm Service",
      description: "Smart alarm and alert solutions.",
      bg: "bg-sky-100",
      iconColor: "text-sky-500",
    },
    {
      icon: <BiCodeAlt size={40} />,
      name: "Website Development",
      description: "Modern Website design.",
      bg: "bg-emerald-100",
      iconColor: "text-emerald-500",
    },
    {
      icon: <BiPaint size={40} />,
      name: "Editing",
      description: "Photo and video editing services.",
      bg: "bg-violet-100",
      iconColor: "text-violet-500",
    },
    {
      icon: <BiMobileAlt size={40} />,
      name: "Marketing",
      description: "Digital marketing solutions.",
      bg: "bg-amber-100",
      iconColor: "text-amber-500",
    },
    {
      icon: <BiBullseye size={40} />,
      name: "Branding",
      description: "Creative brand identity.",
      bg: "bg-pink-100",
      iconColor: "text-pink-500",
    },
    {
      icon: <BiSearchAlt2 size={40} />,
      name: "Analytics",
      description: "Performance and data analytics.",
      bg: "bg-indigo-100",
      iconColor: "text-indigo-500",
    },
    {
      icon: <BiBookAlt size={40} />,
      name: "Support",
      description: "24/7 customer support.",
      bg: "bg-teal-100",
      iconColor: "text-teal-500",
    },
    {
      icon: <BiBarChartAlt2 size={40} />,
      name: "Security",
      description: "Advanced security solutions.",
      bg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
  ];

  return (
    <div className="bg-slate-600 text-slate-800 rounded-xl py-10 px-6 mt-11">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-slate-100">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {service.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}          // Start below + invisible
            animate={{ y: 0, opacity: 1 }}          // Slide up + visible
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            {/* Card with fast hover effect */}
            <div
              className={`${item.bg} p-6 rounded-xl text-center
                         hover:-translate-y-2 hover:shadow-xl
                         transition-all duration-300 ease-out`}
            >
              <div className={`${item.iconColor} mb-4 flex justify-center`}>
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2 text-slate-900">
                {item.name}
              </h3>

              <p className="text-slate-600 text-sm">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;
