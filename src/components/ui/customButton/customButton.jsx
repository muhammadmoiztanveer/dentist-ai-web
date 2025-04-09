import React from "react";

const CustomButton = ({ text = "Your Button Text" }) => {
  return (
    <button className="border-2 border-primary bg-primary hover:border-primary/90 hover:bg-primary/90 text-white font-medium text-sm text-center px-4 py-3 rounded-full cursor-pointer">
      {text}
    </button>
  );
};

export default CustomButton;
