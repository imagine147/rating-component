"use client";
import { useState } from "react";
import Image from "next/image";
import image from "../images/icon-star.svg";
import { SuccessModal } from "./modal/successModal";

export default function Hero() {
  const [rating, setRating] = useState(0);
  const [submittedRating, setSubmittedRating] = useState(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmittedRating(rating);
      setIsSuccessModalOpen(true);
    } else {
      alert("Please select a rating before submitting.");
    }
  };

  return (
    <div className="">
      <div className="container">
        <div className="image">
          <Image src={image} alt="star-icon" />
        </div>

        <div className="text">
          <h1 className="header">How did we do?</h1>
          <p className="para">
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </p>
        </div>

        <ul className="rate flex gap-3 p-0 list-none">
          {[1, 2, 3, 4, 5].map((num) => (
            <li
              key={num}
              role="button"
              tabIndex={0}
              aria-label={`Rate ${num} out of 5`}
              onClick={() => handleRating(num)}
              onKeyDown={(e) => e.key === "Enter" && handleRating(num)}
              className={`num w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ${
                rating === num ? "bg-orange-500 text-white" : "bg-gray-800 text-white"
              }`}
            >
              {num}
            </li>
          ))}
        </ul>

        <button
          className={`btn mt-4 py-2 px-4 rounded text-white cursor-pointer ${
            submittedRating ? "bg-white text-black" : "bg-orange-500"
          }`}
          onClick={handleSubmit}
        >
          Submit
        </button>

        {isSuccessModalOpen && submittedRating !== null && (
          <SuccessModal
            className="result"
            isOpen={isSuccessModalOpen}
            onClose={() => setIsSuccessModalOpen(false)}
          >
            <p className="text-sm text-[#fb7413]">You Selected {submittedRating} out of 5</p>
          </SuccessModal>
        )}
      </div>
    </div>
  );
}
