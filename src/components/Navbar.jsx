import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'projects' },
    { id: 5, link: 'contact' },
  ];

  return (
    <nav className="fixed w-full h-20 bg-black bg-opacity-90 backdrop-blur-sm z-50">
      <div className="flex items-center justify-between w-full h-full max-w-screen-lg px-4 mx-auto">
        <div>
          <h1 onClick={() => window.scrollTo(0, 0)} className="text-3xl font-poppins font-bold text-cyan-500 cursor-pointer tracking-tight">
            Portfolio
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium text-gray-300 hover:text-cyan-500 duration-200 capitalize"
            >
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
        >
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer py-6 text-4xl capitalize hover:text-cyan-500 duration-200"
              >
                <a onClick={() => setIsOpen(false)} href={`#${link}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
