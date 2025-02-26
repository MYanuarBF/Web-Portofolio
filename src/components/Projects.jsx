import { HiExternalLink, HiCode } from "react-icons/hi";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "Website e-commerce dengan fitur keranjang belanja, pembayaran, dan manajemen produk. Dibangun dengan React dan Laravel.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      tech: ["React", "Laravel", "MySQL", "Tailwind CSS"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/username/project",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Aplikasi manajemen tugas dengan fitur drag-and-drop, kategori, dan pengingat. Menggunakan React dan Firebase.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      tech: ["React", "Firebase", "Tailwind CSS"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/username/project",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Website portofolio personal dengan animasi smooth dan tampilan responsif. Dibuat dengan React dan Tailwind CSS.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      tech: ["React", "Tailwind CSS", "Vite"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/username/project",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-16 bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-cyan-500 animate-slideRight">
          Proyek Terbaru
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-cyan-500/50 transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative group h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-800 text-cyan-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white hover:text-cyan-500 transition-colors"
                  >
                    <HiExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white hover:text-cyan-500 transition-colors"
                  >
                    <HiCode size={20} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
