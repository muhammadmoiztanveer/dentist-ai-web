import React from "react";

const CustomButton = ({ text = "Your Button Text", width = "100%" }) => {
  return (
    <button
      className="flex self-center justify-center border-2 border-primary bg-primary  hover:border-opacity-90 hover:bg-primary/90 text-white font-medium text-sm px-4 py-3 rounded-full cursor-pointer"
      style={{ width: width }}
    >
      {text}
    </button>
  );
};

export default CustomButton;
