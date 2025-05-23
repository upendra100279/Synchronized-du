import React from "react";
import { useNavigate } from "react-router-dom";

function Cards({ item, onCardClick }) {
  const navigate = useNavigate();

  const handleAccess = (e) => {
    e.stopPropagation();
    if (item.link1 && item.link2 && item._id) {
      navigate(`/course/${item._id}`);
    } else if (onCardClick) {
      onCardClick(item);
    }
  };

  return (
    <div className="card-animated-border group h-80 w-full flex flex-col items-center justify-between p-4 cursor-pointer transition-transform duration-300 hover:scale-105 bg-white dark:bg-slate-800">
      <div className="relative z-[1] flex flex-col items-center w-full h-full">
        <img
          src={item.image}
          alt={item.name}
          className="h-32 w-full object-cover rounded-md mb-2"
        />
        <h3 className="text-lg font-semibold mb-1 text-center">{item.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 flex-1 text-center overflow-hidden">
          {item.title}
        </p>
        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-pink-200"
          onClick={handleAccess}
        >
          Click to Access
        </button>
      </div>
    </div>
  );
}

export default Cards;