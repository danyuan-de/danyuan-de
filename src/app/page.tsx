import AboutMe from "@/components/AboutMe"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
      <Contact />
    </main>
  )
}
