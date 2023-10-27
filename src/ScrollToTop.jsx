import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-5">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#43b4ca] text-white p-2 rounded-full animate-pulse h-10 w-10 flex items-center justify-center cursor-pointer"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
