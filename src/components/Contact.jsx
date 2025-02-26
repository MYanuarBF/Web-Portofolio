import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-16 bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-4xl font-bold text-center mb-8 text-cyan-500 animate-slideRight">
            Hubungi Saya
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold text-white mb-6">
                Informasi Kontak
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-md shadow-cyan-500/30">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white font-medium">
                      myanuarbf@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-md shadow-cyan-500/30">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400">Telepon</p>
                    <p className="text-white font-medium">+6287822308404</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-md shadow-cyan-500/30">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400">Lokasi</p>
                    <p className="text-white font-medium">
                      Brebes, Jawa Tengah, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Media Sosial
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/MYanuarBF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-cyan-500/30"
                  >
                    <FaGithub className="text-white text-xl" />
                  </a>
                  <a
                    href="https://linkedin.com/in/myanuarbf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-cyan-500/30"
                  >
                    <FaLinkedin className="text-white text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slideLeft">
              <h3 className="text-2xl font-bold text-white mb-6">
                Kirim Pesan
              </h3>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-600"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-600"
                    placeholder="Masukkan email Anda"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-600"
                    placeholder="Tulis pesan Anda di sini"
                  ></textarea>
                </div>

                <button
                  onClick={() => {
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const message = document.getElementById('message').value;
                    const mailtoLink = `mailto:myanuarbf@gmail.com?subject=Pesan dari ${name}&body=Nama: ${name}%0D%0AEmail: ${email}%0D%0APesan:%0D%0A${message}`;
                    window.location.href = mailtoLink;
                  }}
                  className="block w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-md hover:scale-105 transition-transform duration-300 shadow-md shadow-cyan-500/30 text-center"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
