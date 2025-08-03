'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">

      {/* ✅ IMAGE DE FOND centrée vers le haut */}
      <Image
        src="/hero.jpg"
        alt="Coumba SECK"
        layout="fill"
        objectFit="cover"
        objectPosition="top" // 👈 important : focus vers le haut
        quality={100}
        className="z-0"
        priority
      />

      {/* OVERLAY sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* CONTENU */}
      <div className="z-20 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300">
          Hello, I’m Coumba SECK
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
          Développeuse web & mobile passionnée, je crée des interfaces élégantes, utiles et bien pensées.
        </p>

        <Link
          href="/projects"
          className="mt-10 inline-block px-6 py-3 bg-pink-500 hover:bg-pink-400 text-white font-semibold rounded-full transition"
        >
          Voir mes projets
        </Link>
      </div>
    </section>
  )
}
