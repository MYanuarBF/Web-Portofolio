import { HiExternalLink, HiCode } from "react-icons/hi";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Tiket Website",
      description:
        "Website E-Tiket Wisata dengan fitur pemesanan tiket, manajemen harga tiket, login, register, verifikasi email, manajemen role, dan lain-lain. Dibangun menggunakan Laravel dan Filament.",
      image: "/images/project/tiket1.webp",
      tech: ["Laravel", "Filament", "MySQL", "Bootstrap"],
      demoLink: "",
      codeLink: "https://github.com/MYanuarBF/TA2-PesanTiket",
    },
    {
      id: 2,
      title: "Aplikasi Pengeditan Gambar",
      description:
        "Ini adalah aplikasi pengeditan gambar yang dikembangkan sebagai proyek akhir untuk mata kuliah Pengolahan Citra, dengan fokus pada implementasi fungsi-fungsi library OpenCV.",
      image: "/images/project/image-editor.webp",
      tech: ["Python", "OpenCV", "Tkinter"],
      demoLink: "",
      codeLink: "https://github.com/MYanuarBF/Python-ImageEditor",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Website portofolio personal dengan animasi smooth dan tampilan responsif. Dibuat dengan React dan Tailwind CSS.",
      image:
        "/images/project/porto.webp",
      tech: ["React", "Tailwind CSS", "Vite"],
      demoLink: "https://visionary-rugelach-00c5df.netlify.app/",
      codeLink: "https://github.com/MYanuarBF/Web-Portofolio",
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
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
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
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-white hover:text-cyan-500 transition-colors"
                    >
                      <HiExternalLink size={20} />
                      <span>Demo</span>
                    </a>
                  )}
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
