import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ProjectsPage() {
  const projects = [
    {
      emoji: '🌐',
      title: 'Portfolio personnel',
      stack: 'Next.js, Tailwind CSS',
      desc: 'Site vitrine personnel pour présenter mes compétences et projets.',
    },
    {
      emoji: '🛒',
      title: 'Application e-commerce',
      stack: 'React, Node.js, Stripe',
      desc: 'Plateforme complète de vente en ligne avec panier, produits et paiement.',
    },
    {
      emoji: '📱',
      title: 'App météo mobile',
      stack: 'Flutter, API OpenWeather',
      desc: 'Application météo en temps réel, responsive et stylée.',
    },
    {
      emoji: '🎓',
      title: 'Système de gestion scolaire',
      stack: 'Laravel, MySQL',
      desc: 'Gestion des notes, emplois du temps, inscriptions, etc.',
    },
    {
      emoji: '💬',
      title: 'App de chat en temps réel',
      stack: 'Flutter, Firebase',
      desc: 'Messagerie rapide et sécurisée entre utilisateurs.',
    },
    {
      emoji: '📊',
      title: 'Dashboard analytique',
      stack: 'Next.js, PostgreSQL, Chart.js',
      desc: 'Visualisation de données et KPIs interactifs.',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 py-20 bg-gradient-to-b from-white via-purple-50 to-pink-50 text-gray-800">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400 mb-12">
          Mes Projets 🚀
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-300 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-2">
                {p.emoji} {p.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2 italic">{p.stack}</p>
              <p className="text-gray-700">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="mailto:coumba@email.com"
            className="inline-block bg-pink-400 hover:bg-pink-300 text-white px-6 py-3 rounded-full font-medium transition"
          >
            Discutons de votre projet 💬
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
