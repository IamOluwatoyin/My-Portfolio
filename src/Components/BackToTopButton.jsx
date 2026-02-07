import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [show, setShow] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  let lastScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShow(currentScroll > 300);
      setScrollingUp(currentScroll < lastScroll);
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
       className={`
    fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center
    bg-green-700 text-white rounded-full shadow-lg hover:bg-yellow-600
    transition-transform
    flex lg:hidden  
    ${scrollingUp ? "translate-y-0" : "translate-y-20"}
  `}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTopButton;


