import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <header className="p-6 shadow-md bg-gray-100 sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto">
        {/* Mobile Hamburger Button */}
        <div className="flex justify-between items-center">
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center md:items-center md:space-y-0 space-y-2 md:space-x-8 mt-4 md:mt-0 justify-center`}
        >
          {["Home", "Education", "Projects", "Skills"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 text-lg md:text-xl font-semibold hover:text-teal-600 transition duration-300 ease-in-out transform hover:scale-105 font-inter px-3 py-2 rounded-md"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
