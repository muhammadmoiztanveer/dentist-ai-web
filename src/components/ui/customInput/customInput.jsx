import React from "react";

const CustomInput = ({
  label = "Your label",
  placeholder = "Your placeholder",
  type = "text",
  width = "100%",
  icon,
}) => {
  return (
    <div className="flex flex-col gap-2 w-auto">
      <label htmlFor="custom-input" className="text-sm font-normal">
        {label}
      </label>

      <input
        id="custom-input"
        type={type}
        className={`w-full border-2 border-primary px-4 py-3 rounded-full text-sm placeholder:text-primary placeholder:font-medium text-primary font-medium focus:outline-none`}
        placeholder={placeholder}
        style={{ width: width }}
      />
    </div>
  );
};

export default CustomInput;
