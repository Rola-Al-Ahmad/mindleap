import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";

import logo from "../../public/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navlinks = [
    { title: "Home", href: "#home", id: "home" },
    { title: "Services", href: "#services", id: "services" },
    { title: "About Us", href: "#aboutus", id: "about" },
    { title: "Pricing", href: "#pricing", id: "pricing" },
    { title: "Testimonial", href: "#testimonial", id: "testimonial" },
  ];

  const handleScroll = () => {
    const sections = [
      "home",
      "about",
      "services",
      "pricing",
      "testimonial",
      "contact",
    ];
    const scrollPosition = window.scrollY + 100;
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        // const rect = element.getBoundingClientRect();
        // if (scrollPosition >= rect.top && scrollPosition <= rect.bottom + 100) {
        //   setActiveSection(section);
        // }

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <header className="bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <div>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        {/* Nav Items */}

        <div className="hidden md:flex flex-grow justify-center">
          <nav>
            <ul
              className="font-medium flex flex-col md:flex-row lg:space-x-8 
                        sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0"
            >
              {navlinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(link.id);
                      handleScrollTo(link.id);
                    }}
                    href={link.href}
                    className={`relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
                      after:w-0 hover:after:w-full after:bg-primary after:transition-all 
                      duration-300 ease-in-out ${
                        activeSection === link.id ? "after:w-full" : ""
                      }`}
                  >
                    {link.title}
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* CTA */}

        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded 
                       transition duration-300 ease-in-out"
            onClick={(e) => {
              e.preventDefault();
              setActiveSection("contact");
              handleScrollTo("contact");
            }}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className={`text-white focus:outline-none ${
              isOpen ? " border border-white" : ""
            }`}
          >
            <HiOutlineMenuAlt3 className="size-6" />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}

      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-heroBg z-20 md:hidden">
          <ul className="flex flex-col p-4 space-y-3">
            {navlinks.map((link, index) => (
              <li key={index}>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(link.id);
                    handleScrollTo(link.id);
                  }}
                  href={link.href}
                  className={`relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
                      after:w-0 hover:after:w-full after:bg-primary after:transition-all 
                      duration-300 ease-in-out ${
                        activeSection === link.id ? "after:w-full" : ""
                      }`}
                >
                  {link.title}
                </motion.a>
              </li>
            ))}
            <li className="!mt-7 !mb-4">
              <a
                href="#contact"
                className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded 
                       transition duration-300 ease-in-out"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection("contact");
                  toggleMenu();
                  handleScrollTo("contact");
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
