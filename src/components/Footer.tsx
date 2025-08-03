export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-100 to-pink-100 text-gray-800 py-10 text-center mt-20">
      <p className="text-lg font-semibold">© {new Date().getFullYear()} Coumba — Portfolio personnel</p>
      <p className="text-sm text-gray-600 mt-2">Développé avec ❤️ en Next.js & Tailwind CSS</p>

      <div className="mt-4 flex justify-center gap-6">
        <a
          href="https://github.com/coumbaseck"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/coumbaseck"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="mailto:scoumba327@gmail.com"
          className="text-blue-500 hover:underline"
        >
          Email
        </a>
      </div>
    </footer>
  )
}
