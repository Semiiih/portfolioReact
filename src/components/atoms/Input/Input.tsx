import React, { useState } from "react";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  selectedRating: number | null;
  onRatingChange: (rating: number | null) => void;
  onSortByDate: () => void;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  placeholder,
  selectedRating,
  onRatingChange,
  onSortByDate,
}) => {
  const [showRating, setShowRating] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 z-[-1] h-full w-full"></div>

      <div className="relative flex flex-col items-center justify-center">
        <div className="glow absolute h-full max-h-[130px] w-full max-w-[354px] rounded-[12px] opacity-40 blur-[30px]"></div>
        <div className="absolute h-full max-h-[70px] w-full max-w-[314px] rounded-[12px] bg-gradient-to-br from-purple-600 to-pink-500 blur-sm"></div>
        <div className="absolute h-full max-h-[70px] w-full max-w-[314px] rounded-[12px] bg-black blur-sm"></div>
        <div className="absolute h-full max-h-[70px] w-full max-w-[314px] rounded-[12px] bg-gray-800"></div>

        <div className="relative">
          <input
            type="text"
            className="input h-[56px] w-[301px] rounded-[10px] bg-black pl-[59px] text-[18px] text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder={placeholder}
            onChange={onChange}
          />
          <div className="absolute left-[20px] top-[15px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              className="feather feather-search"
            >
              <circle cx="11" cy="11" r="8" stroke="url(#search)"></circle>
              <line
                x1="16.65"
                y1="22"
                x2="22"
                y2="16.65"
                stroke="url(#searchl)"
              ></line>
              <defs>
                <linearGradient id="search" gradientTransform="rotate(50)">
                  <stop offset="0%" stopColor="#f8e7f8" />
                  <stop offset="50%" stopColor="#b6a9b7" />
                </linearGradient>
                <linearGradient id="searchl">
                  <stop offset="0%" stopColor="#b6a9b7" />
                  <stop offset="50%" stopColor="#837484" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <button
            className="absolute right-[8px] top-[8px] focus:outline-none"
            onClick={() => setShowRating(!showRating)}
          >
            <svg
              preserveAspectRatio="none"
              height="27"
              width="27"
              viewBox="4.8 4.56 14.832 15.408"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z"
                stroke="#d6d6e6"
                strokeWidth="1"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Bloc pour selectionner les étoiles */}
          {showRating && (
            <>
              <div className="absolute -right-[200px] top-[0px] flex flex-col items-center">
                <div className="pulse absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-75 blur-xl" />

                <div className="relative z-10 flex flex-col items-center rounded-lg bg-gray-700 bg-opacity-70 p-4 shadow-lg">
                  <p className="mb-2 text-white">Trier par avis:</p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        className={`text-2xl ${
                          selectedRating && selectedRating >= star
                            ? "text-yellow-400"
                            : "text-gray-400"
                        }`}
                        onClick={() =>
                          onRatingChange(selectedRating === star ? null : star)
                        }
                      >
                        ★
                      </button>
                    ))}
                  </div>
                  {selectedRating && (
                    <p className="mt-2 text-white">
                      Note: {selectedRating} étoiles
                    </p>
                  )}
                </div>
              </div>
              <div className="absolute -left-[200px] top-[0px] flex flex-col items-center">
                <div className="pulse absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-75 blur-xl" />

                <div className="relative z-10 flex flex-col items-center rounded-lg bg-gray-700 bg-opacity-70 p-4 shadow-lg">
                  <p className="mb-2 text-white">Trier par date:</p>

                  <button
                    className="rounded-full  bg-purple-600 px-4 py-2 text-white"
                    onClick={onSortByDate}
                  >
                    Trier par date
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
