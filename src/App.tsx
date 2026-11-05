import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { Steps } from "@/components/sections/steps"
import { Features } from "@/components/sections/features"
import { Spaces } from "@/components/sections/spaces"
import { Security } from "@/components/sections/security"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function App() {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-3 focus:text-white"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">
        <Hero />
        <Problem />
        <Steps />
        <Features />
        <Spaces />
        <Security />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
