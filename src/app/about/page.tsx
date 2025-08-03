import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { FaReact, FaLaravel, FaNodeJs, FaGitAlt, FaFigma, FaDocker } from 'react-icons/fa'
import { SiFlutter, SiPostgresql, SiFirebase, SiNextdotjs, SiJavascript, SiMongodb, SiMysql, SiHtml5, SiCss3 } from 'react-icons/si'

export default function AboutPage() {
  const skills = [
    {
      category: 'Mobile',
      items: [
        { name: 'Flutter', icon: <SiFlutter className="text-cyan-500" size={24} /> },
        { name: 'Dart', icon: <SiFlutter className="text-blue-400" size={24} /> },
      ],
    },
    {
      category: 'Frontend',
      items: [
        { name: 'HTML', icon: <SiHtml5 className="text-orange-500" size={24} /> },
        { name: 'CSS', icon: <SiCss3 className="text-blue-500" size={24} /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" size={24} /> },
        { name: 'React', icon: <FaReact className="text-sky-400" size={24} /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black" size={24} /> },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Laravel', icon: <FaLaravel className="text-red-500" size={24} /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600" size={24} /> },
      ],
    },
    {
      category: 'Bases de données',
      items: [
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" size={24} /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-800" size={24} /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-600" size={24} /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600" size={24} /> },
      ],
    },
    {
      category: 'Outils & Autres',
      items: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-600" size={24} /> },
        { name: 'Figma', icon: <FaFigma className="text-pink-500" size={24} /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-500" size={24} /> },
      ],
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 py-20 bg-gradient-to-b from-white via-purple-50 to-pink-50 text-gray-800">
        {/* Titre + Présentation */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400">
            À propos de moi 💡
          </h1>
          <p className="text-lg mt-2 text-gray-600">
            Développeuse full-stack web & mobile | Master 2 Génie Logiciel
          </p>
        </div>

        {/* Photo + Blocs d'infos */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto mb-20">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-300 shadow-lg">
            <Image
              src="/Profile.jpg"
              alt="Coumba"
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 max-w-xl text-center md:text-left">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-pink-300">
              <h3 className="text-xl font-semibold mb-1">🎓 Mon profil académique</h3>
              <p>
                Actuellement en <strong>Master 2 en Génie Logiciel</strong>, je me spécialise dans le
                développement complet d'applications web et mobiles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-cyan-300">
              <h3 className="text-xl font-semibold mb-1">🧠 Mes compétences</h3>
              <p>
                Développement <strong>frontend</strong> avec React, Next.js, Tailwind, et
                <strong> backend</strong> avec Node.js, Laravel, MongoDB. Création d’applications
                mobiles avec Flutter. Design UI/UX, intégration d’API, gestion de projet agile.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-400">
              <h3 className="text-xl font-semibold mb-1">🌍 Mes atouts</h3>
              <p>
                Bilingue français, créative et curieuse, je suis toujours à jour sur les dernières
                technologies du développement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-400">
              <h3 className="text-xl font-semibold mb-1">🚀 Ce que je cherche</h3>
              <p>
                Une opportunité où je pourrais mettre en valeur ma polyvalence, mon sens du design et
                ma rigueur technique.
              </p>
            </div>
          </div>
        </div>

        {/* Section compétences avec icônes */}
        <section className="text-gray-900 py-10 px-2">
          <h2 className="text-3xl font-bold text-center text-purple-500 mb-12">
            Mes Compétences Techniques 🛠️
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((s, i) => (
              <div
                key={i}
                className="p-6 bg-purple-50 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-purple-600 mb-4">{s.category}</h3>
                <ul className="space-y-3 text-gray-700">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-center space-x-3">
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
