import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProjectsGrid from '@/components/ProjectsGrid'
import Services from '@/components/Services' ;
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ProjectsGrid />
      <Footer/>
    </>
  )
}
