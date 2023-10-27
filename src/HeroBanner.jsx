import { useState } from "react";

const HeroBanner = ({ keyword, setKeyword }) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleKeyUp = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <header className="flex h-96 w-100vw items-center justify-center bg-hero-pattern bg-cover bg-center px-4">
      <div className="flex flex-col items-center justify-center">
        <img
          src="https://res.cloudinary.com/dckqfwvh1/image/upload/v1698146938/Rick_and_Morty_kyquob.svg"
          className="my-4 h-24 md:h-32 mb-10"
          alt="rick and morty logo"
        />
        <div className="relative">
          <input
            className="text-md cursor-text rounded-full border-2 border-[#bfde42] bg-[#43b4ca] px-4 py-2 drop-shadow-lg md:text-2xl text-white placeholder:text-white/60 placeholder:text-center"
            type="text"
            value={keyword}
            onKeyUp={handleKeyUp}
            onChange={handleKeyUp}
            placeholder={isFocused ? "" : "Search for a character"}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {keyword && (
            <div className="absolute right-3 bottom-0 h-full flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 md:w-8 md:h-8 text-white/60 cursor-pointer"
                onClick={() => setKeyword("")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeroBanner;
