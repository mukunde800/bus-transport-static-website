import { Bus } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-12 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Logo + description */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Bus className="text-red-500" size={30} />

              <span>
                BusTravel
              </span>
            </div>

            <p className="mt-4 max-w-sm leading-7 text-gray-400">
              Votre partenaire pour des voyages confortables,
              sûrs et accessibles.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold">
              Navigation
            </h3>

            <div className="mt-4 space-y-3 text-gray-400">

              <a
                href="/"
                className="block transition hover:text-red-500"
              >
                Accueil
              </a>

              <a
                href="/about"
                className="block transition hover:text-red-500"
              >
                À propos
              </a>

              <a
                href="/services"
                className="block transition hover:text-red-500"
              >
                Services
              </a>

              <a
                href="/buses"
                className="block transition hover:text-red-500"
              >
                Nos bus
              </a>

              <a
                href="/destinations"
                className="block transition hover:text-red-500"
              >
                Destinations
              </a>

              <a
                href="/contact"
                className="block transition hover:text-red-500"
              >
                Contact
              </a>

            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="font-bold">
              Suivez-nous
            </h3>

            <div className="mt-4 flex gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm font-bold transition hover:bg-red-600"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm font-bold transition hover:bg-red-600"
              >
                IG
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm font-bold transition hover:bg-red-600"
              >
                X
              </a>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © 2026 BusTravel. Tous droits réservés.
        </div>

      </div>

    </footer>
  )
}

export default Footer