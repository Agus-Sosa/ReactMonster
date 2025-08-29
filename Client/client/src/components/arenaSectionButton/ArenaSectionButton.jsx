import React from 'react';

const ArenaButton = ({ text, onClick }) => {
  return (
    <button
      className="bg-[#3B1F0B] text-[#E8E3CE] font-extrabold px-8 py-3 mt-4 rounded hover:bg-[#2E1608] transition-colors shadow-md"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ArenaButton;
