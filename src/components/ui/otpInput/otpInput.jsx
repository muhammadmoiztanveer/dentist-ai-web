import React, { useState, useRef, useEffect } from "react";

const OTPInput = ({ length = 4, onComplete }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);

  // Focus first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (newOtp.every((num) => num !== "")) {
      onComplete(newOtp.join(""));
    }

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").slice(0, length);
    const newOtp = [...otp];

    pastedData.split("").forEach((char, i) => {
      if (i < length && /^\d+$/.test(char)) {
        newOtp[i] = char;
      }
    });

    setOtp(newOtp);
    const nextIndex = Math.min(pastedData.length, length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="flex justify-center gap-1 sm:gap-2 lg:gap-3">
      {otp.map((value, index) => (
        <input
          key={index}
          type="tel"
          autoComplete="one-time-code"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={value}
          ref={(el) => el && (inputRefs.current[index] = el)}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="size-10 sm:size-11 md:size-12 text-2xl text-center border-2 border-primary rounded-lg sm:rounded-xl 
            focus:border-primary focus:outline-none transition-colors"
        />
      ))}
    </div>
  );
};

export default OTPInput;
