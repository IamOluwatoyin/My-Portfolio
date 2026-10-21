import React, { useEffect, useState } from "react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about-me" },
  { label: "Work", id: "featured-work" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const Header = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = (item) => {
    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
    setActive(item.label);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const scrollPosition = window.scrollY + 140;
      let currentSection = navItems[0];

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = item;
        }
      });
      setActive(currentSection.label);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur"
          : "bg-white/85 backdrop-blur-sm"
      }`}
    >
      <div className="portfolio-container flex h-16 items-center justify-between sm:h-20">
        <button
          type="button"
          onClick={() => handleNavClick(navItems[0])}
          className="text-left text-xl font-bold font-heading sm:text-2xl"
          aria-label="Go to the home section"
        >
          Torera<span className="text-yellow-500">Codes.</span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item)}
              className={`nav-button ${
                active === item.label ? "nav-button-active" : "nav-button-inactive"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg bg-yellow-500 lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span className={`h-0.5 w-5 bg-white transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-white transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-slate-200 bg-white px-4 py-3 shadow-lg lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="portfolio-container flex flex-col gap-1 px-0">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item)}
                className={`rounded-xl px-4 py-3 text-left font-semibold transition ${
                  active === item.label
                    ? "bg-yellow-500 text-white"
                    : "text-slate-800 hover:bg-yellow-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
