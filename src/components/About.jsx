import { FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';

const About = () => {
  const experiences = [
    {
      id: 1,
      title: "Admin IT – Freelance",
      company: "PT. KAMULYAN WIJI DADI", 
      period: "September 2024 - Sekarang",
      description: "Mengelola ribuan data petani menggunakan Microsoft Excel dan Google Spreadsheet, menerapkan berbagai rumus/formula untuk meningkatkan efisiensi pengolahan data. Melakukan pemetaan lahan secara akurat menggunakan Google Earth untuk memperoleh data geografis yang mendukung analisis spasial, identifikasi potensi lahan, dan pengambilan keputusan dalam pengelolaan area pertanian."
    },
    {
      id: 2,
      title: "Staf IT – Intern",
      company: "UPT Balai Diklat KKB Banyumas",
      period: "Agustus 2023 - Oktober 2023",
      description: "Melatih karyawan dalam menggunakan peralatan studio dan perangkat lunak editing, memastikan mereka dapat memanfaatkan teknologi secara efektif. Merancang media tutorial untuk penggunaan studio, berfungsi sebagai panduan bagi staf baru dan meningkatkan efisiensi operasional."
    },
    {
      id: 3,
      title: "Graphic Designer – Intern",
      company: "Pameo",
      period: "Desember 2018 - Maret 2019",
      description: "Membantu merancang media Desain Grafis sesuai dengan Brand Desain klien, mengasah keterampilan dalam penerapan prinsip desain yang efektif. Belajar membuat logo berdasarkan formulir klien, memperkuat keterampilan analitis dan penerapan umpan balik dalam proses desain."
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Teknik Informatika",
      school: "Telkom University Purwokerto",
      location: "Jawa Tengah",
      info: "IPK 3.82",
      description: "Fokus pada pengembangan web dan mobile. Menyelesaikan proyek akhir tentang aplikasi pemesanan tiket berbasis web."
    },
    {
      id: 2,
      degree: "Rekayasa Perangkat Lunak",
      school: "SMK Telkom Purwokerto",
      location: "Jawa Tengah",
      description: "Mendalami dasar-dasar pengembangan perangkat lunak dan pemrograman."
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "SQL untuk Database Design",
      issuer: "Kelas.Work",
      year: "2023",
      description: "Menyelesaikan kursus perancangan database menggunakan SQL."
    },
    {
      id: 2,
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding",
      year: "2023", 
      description: "Menyelesaikan kursus fundamental JavaScript."
    },
    {
      id: 3,
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding",
      year: "2023",
      description: "Menyelesaikan kursus dasar-dasar pemrograman web."
    },
    {
      id: 4,
      title: "Belajar Bootstrap CSS Framework",
      issuer: "Codepolitan",
      year: "2023",
      description: "Menyelesaikan kursus framework Bootstrap CSS."
    },
    {
      id: 5,
      title: "Belajar Dasar CSS",
      issuer: "Codepolitan", 
      year: "2023",
      description: "Menyelesaikan kursus fundamental CSS."
    },
    {
      id: 6,
      title: "Belajar Dasar HTML",
      issuer: "Codepolitan",
      year: "2023",
      description: "Menyelesaikan kursus fundamental HTML."
    }
  ];

  return (
    <section id="about" className="w-full py-16 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-cyan-500 animate-slideRight">
          Tentang Saya
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Bio */}
          <div className="flex flex-col justify-center animate-slideLeft ">
            <p className="text-gray-300 text-lg mb-4 text-justify">
              Saya adalah seorang <span className="text-cyan-400 font-medium">Front End Developer</span> dengan semangat tinggi dalam mengembangkan keterampilan di bidang Teknologi. Saya memiliki pengalaman mengembangkan web menggunakan framework Laravel yaitu pembuatan platform pemesanan tiket untuk wisata.
            </p>
            <p className="text-gray-300 text-lg mb-4 text-justify">
              Saya juga cukup familiar dengan bahasa pemrograman seperti PHP dan JavaScript, serta penerapan SQL query untuk database. Adaptif terhadap tools baru dan perkembangan teknologi, saya siap memberikan kontribusi positif dan berinovasi dalam lingkungan kerja yang dinamis.
            </p>
            <div className="flex gap-4 mt-2">
              <a 
                href="/CV_MYanuarBF.pdf" 
                download
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-md hover:scale-105 transition-transform duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Pengalaman & Pendidikan</h3>
          
          <div className="space-y-8">
            {/* Work Experience Section */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-cyan-500 mb-6">Pengalaman Kerja</h4>
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative pl-8 animate-slideRight" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                  <div className="absolute left-0 top-1 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                    <FaBriefcase className="text-white" />
                  </div>
                  <div className="border-l-2 border-cyan-500 pl-6 pb-6">
                    <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                    <p className="text-cyan-400">{exp.company} • {exp.period}</p>
                    <p className="text-gray-300 mt-2">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Education Section */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-cyan-500 mb-6">Pendidikan</h4>
              {education.map((edu, index) => (
                <div key={edu.id} className="relative pl-8 animate-slideRight" style={{ animationDelay: `${0.4 * (index + 1)}s` }}>
                  <div className="absolute left-0 top-1 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-white" />
                  </div>
                  <div className="border-l-2 border-cyan-500 pl-6 pb-6">
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <p className="text-cyan-400">{edu.school} • {edu.info}</p>
                    <p className="text-gray-300 mt-2">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Certifications Section */}
            <div>
              <h4 className="text-xl font-bold text-cyan-500 mb-6">Sertifikasi</h4>
              {certifications.map((cert, index) => (
                <div key={cert.id} className="relative pl-8 animate-slideRight" style={{ animationDelay: `${0.6 + (0.1 * index)}s` }}>
                  <div className="absolute left-0 top-1 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                    <FaAward className="text-white" />
                  </div>
                  <div className="border-l-2 border-cyan-500 pl-6">
                    <h4 className="text-xl font-bold text-white">{cert.title}</h4>
                    <p className="text-cyan-400">{cert.issuer} • {cert.year}</p>
                    <p className="text-gray-300 mt-2">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;