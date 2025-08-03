export default function ProjectsGrid() {
  const projects = [
    {
      title: 'Portfolio Personnel',
      stack: 'Next.js, Tailwind CSS',
      link: '#',
      color: 'from-purple-200 to-purple-100',
    },
    {
      title: 'Application E-commerce',
      stack: 'React, Node.js, MongoDB',
      link: '#',
      color: 'from-pink-200 to-pink-100',
    },
    {
      title: 'Dashboard Admin',
      stack: 'Next.js, PostgreSQL',
      link: '#',
      color: 'from-blue-200 to-blue-100',
    },
    {
      title: 'App Mobile Météo',
      stack: 'Flutter, API météo',
      link: '#',
      color: 'from-yellow-200 to-yellow-100',
    },
    {
      title: 'Système de Réservation',
      stack: 'Laravel, MySQL, Bootstrap',
      link: '#',
      color: 'from-teal-200 to-teal-100',
    },
    {
      title: 'App de Chat Temps Réel',
      stack: 'Flutter, Firebase',
      link: '#',
      color: 'from-cyan-200 to-cyan-100',
    },
  ]

  return (
    <section className="bg-white text-gray-900 py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-purple-500 mb-10">Mes Projets</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${p.color} p-6 rounded-xl shadow-md hover:scale-105 transition`}
          >
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-gray-700 mb-4">{p.stack}</p>
            <a
              href={p.link}
              target="_blank"
              className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-400 transition"
            >
              Voir le projet
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
