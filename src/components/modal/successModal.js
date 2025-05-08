import Image from "next/image";
import result from "../../images/illustration-thank-you.svg"
import React from "react";

export const SuccessModal = ({ isOpen, onClose, children, className = "" }) => {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    window.location.reload(); // Reset the page on close
  };

  return (
    <div className={`fixed inset-0 bg-opacity-50 flex items-center justify-center z-50`}>
      <div className={`container items-center ${className}`}>
        <div className="m-2 w-35"><Image src={result} alt=""/></div>
        <span className="bg-gray-700 rounded-2xl px-4 py-1">{children}</span>
        <div className="text-2xl -mb-2 font-normal animate-pulse">Thank You!</div>
        <div className="para text-center text-[#959eac]">We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</div>
        <button
          onClick={handleClose}
          className="m-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:text-[#fb7413] hover:bg-gray-700 "
        >
          Close
        </button>
      </div>
    </div>
  );
};


// bg-white w-[90%] md:w-[375px]  mx-auto flex flex-col gap-8 text-center items-center text-black p-6 rounded-2xl