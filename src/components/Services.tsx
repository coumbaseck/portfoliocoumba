export default function Services() {
  const services = [
    {
      title: 'Développement mobile',
      desc: 'Applications Android & iOS avec Flutter.',
      gradient: 'from-cyan-200 to-cyan-100',
    },
    {
      title: 'Back-end web',
      desc: 'APIs sécurisées & performantes avec Laravel.',
      gradient: 'from-pink-200 to-pink-100',
    },
    {
      title: 'Cloud & Auth',
      desc: 'Firebase pour l’authentification et la base cloud.',
      gradient: 'from-yellow-200 to-yellow-100',
    },
    {
      title: 'Base de données',
      desc: 'Modélisation SQL / PostgreSQL optimisée.',
      gradient: 'from-purple-200 to-purple-100',
    },
  ]

  return (
    <section className="bg-gray-50 text-gray-800 py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-purple-500 mb-10">Mes Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className={`p-8 rounded-xl shadow-md bg-gradient-to-br ${s.gradient}`}
          >
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-sm text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
