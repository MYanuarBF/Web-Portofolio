const Tech = () => {
  const technologies = [
    // Frontend Technologies
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    // Backend Technologies
    {
      name: "Laravel",
      icon: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
    },
    // Databases
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    // Development Tools
    {
      name: "Vite",
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
    },
    {
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-16 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-cyan-500 animate-slideRight">
          Teknologi Yang Saya Kuasai
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 flex flex-col items-center animate-fadeIn`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-16 h-16 mb-4 object-contain"
              />
              <h3 className="text-lg font-medium text-gray-200">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
