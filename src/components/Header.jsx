import React, { useEffect, useState } from "react";

const Header = ({ scrollToSection }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = isSticky ? "rgba(0,0,0,0.85)" : "transparent";
  const textColor = "#FFFFFF";
  const menuItems = [
    { label: "Home", id: "home" },
    { label: "What we offer", id: "whatweoffer" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Services", id: "services" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      style={{ backgroundColor: bgColor }}
      className={`fixed inset-x-0 top-0 z-30 py-4 xl:py-6 transition-colors duration-300 ${
        isSticky ? "shadow-md" : ""
      }`}
    >
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* <div
            className="flex flex-shrink-0 text-3xl font-[neu]"
            style={{ color: textColor }}
          >
            Navi Infotech
          </div> */}
          <div>
            <img
              src="/assets/logo1.png"
              alt="Navi Infotech Logo"
              className="h-22 w-auto"
            />
            </div>
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 -m-2 rounded-full focus:outline-none hover:bg-white/10 transition duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ color: textColor }}
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
            {menuItems.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
                className="font-poppins-regular text-base font-normal transition-all duration-200 rounded focus:outline-none hover:opacity-70"
                style={{ color: textColor }}
              >
                {label}
              </a>
            ))}
            {/* Removed "Start a project" button */}
          </nav>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4">
            <div
              className="rounded-lg p-6 shadow-lg border"
              style={{
                backgroundColor: "#111111",
                borderColor: "#444444",
              }}
            >
              <nav className="flex flex-col space-y-4">
                {menuItems.map(({ label, id }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(id);
                      setMenuOpen(false);
                    }}
                    className="font-poppins-regular text-base font-normal transition-all duration-200 rounded p-2 hover:bg-white/20"
                    style={{ color: "#FFFFFF" }}
                  >
                    {label}
                  </a>
                ))}
                {/* Removed mobile "Start a project" button */}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
