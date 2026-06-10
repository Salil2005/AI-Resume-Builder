import React from "react";

const Banner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60]">
      <div className="w-full py-2.5 font-medium text-sm text-green-800 text-center bg-gradient-to-r from-[#ABFF7E] to-[#FDFEFF] border-b border-green-200">
        <p>
          <span className="px-3 py-1 rounded-lg text-white bg-green-600 mr-2">
            New
          </span>
          AI Feature Added
        </p>
      </div>
    </div>
  );
};

export default Banner;