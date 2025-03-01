import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import profilePic from '../assets/foto_profil.webp';

function Hero() {
  return (
    <div id="home" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 pt-20">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-72">
          <h2 className="text-2xl sm:text-4xl font-bold text-white animate-fadeIn text-center md:text-left">
            Hey, I am
          </h2>
          <h1 className="text-3xl sm:text-5xl font-bold text-white animate-fadeIn text-center md:text-left">
            Muhammad Yanuar Budi Fatmadi
          </h1>
          <div className="text-2xl sm:text-4xl font-bold text-cyan-500 mt-2 animate-slideRight text-center md:text-left">
            <TypeAnimation
              sequence={[
                'Front End Developer',
                1000,
                'Tech Enthusiast',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="animate-fadeIn flex justify-center md:justify-start gap-4">
            <a href="#projects" className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200">
              Lihat Proyek
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-1" />
              </span>
            </a>
            <a href="/CV_MYanuarBF.pdf" download className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200">
              Download CV
            </a>
          </div>

          <div className="flex gap-4 mt-4 animate-slideUp justify-center md:justify-start">
            <a
              href="https://github.com/MYanuarBF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-500 transition-colors hover:scale-110 duration-200"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://linkedin.com/in/myanuarbf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-500 transition-colors hover:scale-110 duration-200"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0 animate-slideLeft">
          <div className="relative">
            <img
              src={profilePic}
              alt="Muhammad Yanuar Budi Fatmadi"
              className="rounded-2xl w-64 h-64 md:w-96 md:h-96 object-cover shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
