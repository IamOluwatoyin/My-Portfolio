import React, { useEffect, useState } from "react";

const Header = () => {
  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Me", id: "about-me" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = (item) => {
    setActive(item.label);
    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
  };

  const mobileNavItems = navItems.filter((item) => item.label !== "Home");

  // Scroll spy + header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Close mobile menu on scroll
      if (menuOpen) setMenuOpen(false);

      const scrollPosition = window.scrollY + 120;
      for (let item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActive(item.label);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <div
      className={`w-full h-16 sm:h-20 md:h-24 lg:h-24 flex items-center justify-center z-50 fixed top-0 ${
        scrolled ? "bg-white shadow-2xl" : "bg-transparent shadow-none"
      } transition-all duration-300`}
    >
      <div className="w-[80%] h-20 flex items-center justify-between">
        {/* Logo */}
        <h1
          className="text-2xl font-bold font-heading cursor-pointer"
          onClick={() => {
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
          }}
        >
          Torera
          <span className="text-yellow-500 hover:text-yellow-600 font-body transition-colors">
            Codes..
          </span>
        </h1>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8 whitespace-nowrap font-body font-semibold">
          {navItems.map((item) => (
            <span
              key={item.label}
              onClick={() => handleNavClick(item)}
              className={`nav-span ${active === item.label ? "nav-span-active" : "nav-span-inactive"}`}
            >
              {item.label}
            </span>
          ))}
        </div>

        {/* Hamburger for mobile */}
        <div className="lg:hidden flex items-center">
          <button
            className="w-8 h-8 bg-yellow-500 flex flex-col justify-center items-center rounded cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-5 h-[2px] bg-white mb-1"></span>
            <span className="w-5 h-[2px] bg-white mb-1"></span>
            <span className="w-5 h-[2px] bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full bg-white z-50 shadow-lg">
          {/* Mobile header */}
          <div className="h-16 sm:h-20 flex items-center justify-between px-6 border-b">
            <h1 className="text-2xl font-bold font-body">
              Torera
              <span className="text-yellow-500 font-body">Codes..</span>
            </h1>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-gray-700 hover:text-yellow-500 transition"
            >
              &times;
            </button>
          </div>

          {/* Mobile links */}
          <div className="flex flex-col">
            {mobileNavItems.map((item) => (
              <span
                key={item.label}
                onClick={() => {
                  handleNavClick(item);
                  setMenuOpen(false);
                }}
                className={`px-6 py-4 cursor-pointer font-body font-semibold transition-colors ${
                  active === item.label ? "bg-yellow-400 text-white" : "hover:bg-yellow-100"
                }`}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
