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

  const handleNavClick = (item) => {
    setActive(item.label);
    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });

  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = () =>{
      setScrolled(window.scrollY > 50)
    } 
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  },[])
  const [menuOpen, setMenuOpen] = useState(false);
  return (
   <div className={`w-full h-30 flex items-center justify-center z-50 fixed top-0 ${scrolled ? "bg-white shadow-2xl" : "bg-transparent shadow-none"} transition-all duration-300`}>
  <div className="w-[80%] h-20 flex items-center justify-between">
    
    {/* Logo on the left */}
    <h1 className="text-2xl font-bold font-body">
      Torera
      <span className="text-yellow-500 hover:text-yellow-600 font-body transition-colors">
        Codes..
      </span>
    </h1>

   
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

    {/* Burger menu - visible on tablets and mobile */}
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

 
 {menuOpen && (
 <div
  className={`lg:hidden absolute top-20 left-0 w-full bg-white shadow-md
  overflow-hidden transition-all duration-300 ease-in-out
  ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
>
  {navItems.map((item) => (
    <span
      key={item.label}
      onClick={() => {
        handleNavClick(item);
        setMenuOpen(false);
      }}
      className={`block w-full px-4 py-3 cursor-pointer transition-colors duration-200
      ${
        active === item.label
          ? "bg-yellow-400 text-white"
          : "hover:bg-yellow-200 hover:text-white"
      }`}
    >
      {item.label}
    </span>
  ))}
</div>

)}
</div>

  );
};

export default Header;
