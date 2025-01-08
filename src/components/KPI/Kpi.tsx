import React, { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaMailBulk,
  FaPaperPlane,
  FaRedo,
  FaCheck,
  FaTimes,
  FaClock,
  FaUserClock,
  FaChevronRight,
  FaChevronLeft,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  count: number;
  bgColor: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, count, bgColor, icon }) => {
  return (
    <div className={`flex items-start relative justify-between ${bgColor} shadow-md rounded-lg p-4 w-52 mb-10`}>
      <div>
        <h3 className="text-lightblue text-sm font-medium whitespace-nowrap">{title}</h3>
        <p className="text-black text-2xl font-bold mt-1">{count < 10 ? `0${count}` : count}</p>
      </div>
      <div className="w-10 h-10 flex absolute top-[-10px] right-[-10px] bg-primary rounded-full items-center justify-center shadow-4">
        {icon}
      </div>
    </div>
  );
};

const Kpi: React.FC = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const cards = [
    { title: 'Call Connected', count: 10, bgColor: 'bg-green-100', icon: <FaCheck className="text-xl text-white" /> },
    { title: 'Busy', count: 5, bgColor: 'bg-yellow-100', icon: <FaClock className="text-xl text-white" /> },
    { title: 'Wrong Number', count: 3, bgColor: 'bg-red-100', icon: <FaTimes className="text-xl text-white" /> },
    { title: 'Switch Off', count: 4, bgColor: 'bg-gray-100', icon: <FaPhone className="text-xl text-white" /> },
    { title: 'Interested', count: 7, bgColor: 'bg-blue-100', icon: <FaCheck className="text-xl text-white" /> },
    { title: 'Not Interested', count: 8, bgColor: 'bg-red-100', icon: <FaTimes className="text-xl text-white" /> },
    { title: 'Call Later', count: 6, bgColor: 'bg-orange-100', icon: <FaUserClock className="text-xl text-white" /> },
    { title: 'Follow-up', count: 9, bgColor: 'bg-teal-100', icon: <FaRedo className="text-xl text-white" /> },
    { title: 'Cold Mail', count: 11, bgColor: 'bg-indigo-100', icon: <FaMailBulk className="text-xl text-white" /> },
    { title: 'Introductory Mail', count: 3, bgColor: 'bg-purple-100', icon: <FaEnvelope className="text-xl text-white" /> },
    { title: 'Follow-up Cold Mail', count: 2, bgColor: 'bg-pink-100', icon: <FaEnvelope className="text-xl text-white" /> },
    { title: 'Follow-up Intro Mail', count: 1, bgColor: 'bg-cyan-100', icon: <FaEnvelope className="text-xl text-white" /> },
    { title: 'Cold Message Done', count: 13, bgColor: 'bg-lime-100', icon: <FaPaperPlane className="text-xl text-white" /> },
    { title: 'Intro Message Done', count: 4, bgColor: 'bg-amber-100', icon: <FaPaperPlane className="text-xl text-white" /> },
    { title: 'Follow-up Cold Message', count: 6, bgColor: 'bg-blue-100', icon: <FaRedo className="text-xl text-white" /> },
    { title: 'Follow-up Intro Message', count: 8, bgColor: 'bg-green-100', icon: <FaRedo className="text-xl text-white" /> },
    { title: 'LinkedIn Conversation', count: 12, bgColor: 'bg-gray-100', icon: <FaLinkedin className="text-xl text-white" /> },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'left' && scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    } else if (direction === 'right' && scrollIndex < cards.length - 5) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  return (
    <div className="relative">
      {scrollIndex > 0 && (
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-11 transform -translate-y-1/2 p-2 rounded-full bg-primary text-white z-10"
        >
          <FaChevronLeft />
        </button>
      )}
      <motion.div
        className="flex gap-4 w-fit"
        animate={{ x: Math.max(-90, -scrollIndex * 100 / 10) + '%' }}
        transition={{ type: 'spring', stiffness: 10 }}
      >
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </motion.div>
      {scrollIndex < cards.length - 5 && (
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-11 transform -translate-y-1/2 p-2 rounded-full bg-primary text-white z-10"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

export default Kpi;
