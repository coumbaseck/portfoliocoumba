import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 py-20 bg-gradient-to-b from-white via-purple-50 to-pink-50 text-gray-800 text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400 mb-6">
          Contactez-moi 💌
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          Je serais ravie de discuter d'un projet, d'une collaboration ou simplement d'échanger !
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-left max-w-3xl mx-auto">
          {/* Email */}
          <div className="flex items-center gap-4 bg-white shadow-md rounded-lg p-6 w-full">
            <FaEnvelope className="text-2xl text-blue-500" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:coumba@email.com" className="text-blue-600 hover:underline">
                coumba@email.com
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4 bg-white shadow-md rounded-lg p-6 w-full">
            <FaLinkedin className="text-2xl text-purple-500" />
            <div>
              <h3 className="font-semibold">LinkedIn</h3>
              <a
                href="https://linkedin.com/in/tonprofil"
                target="_blank"
                className="text-purple-600 hover:underline"
              >
                linkedin.com/in/tonprofil
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4 bg-white shadow-md rounded-lg p-6 w-full">
            <FaGithub className="text-2xl text-gray-700" />
            <div>
              <h3 className="font-semibold">GitHub</h3>
              <a
                href="https://github.com/tonprofil"
                target="_blank"
                className="text-gray-700 hover:underline"
              >
                github.com/tonprofil
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
