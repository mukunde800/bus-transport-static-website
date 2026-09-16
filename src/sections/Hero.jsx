import { ArrowRight, Bus } from 'lucide-react'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gray-900"
    >
      {/* Background */}
      <img
        src="/images/bus-hero.jpg"
        alt="Bus de transport"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-6 py-32">
        <div className="max-w-3xl text-white">

          <div className="mb-6 flex items-center gap-3">
            <Bus size={32} className="text-red-500" />

            <span className="font-semibold uppercase tracking-widest text-red-400">
              Safe • Fast • Comfortable
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
            Voyagez plus loin,
            <span className="text-red-500"> voyagez mieux.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            Découvrez une nouvelle façon de voyager avec nos bus modernes,
            confortables et sécurisés.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button>
              Découvrir nos destinations
              <ArrowRight className="ml-2 inline" size={20} />
            </Button>

            <a
              href="#contact"
              className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              Nous contacter
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero