import { ShieldCheck, Clock, Users } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">

        {/* Image */}
        <div>
          <img
            src="/images/about.jpg"
            alt="Notre compagnie"
            className="h-112.5 w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <span className="font-semibold uppercase tracking-widest text-red-600">
            À propos de nous
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Votre partenaire de voyage
          </h2>

          <p className="mt-6 leading-7 text-gray-600">
            Nous proposons des services de transport fiables et confortables
            pour accompagner nos voyageurs dans leurs déplacements.
          </p>

          <div className="mt-8 space-y-6">

            <div className="flex gap-4">
              <ShieldCheck className="text-red-600" size={30} />

              <div>
                <h3 className="font-bold">
                  Sécurité
                </h3>

                <p className="text-gray-600">
                  Votre sécurité est notre priorité.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-red-600" size={30} />

              <div>
                <h3 className="font-bold">
                  Ponctualité
                </h3>

                <p className="text-gray-600">
                  Des départs organisés et ponctuels.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Users className="text-red-600" size={30} />

              <div>
                <h3 className="font-bold">
                  Confort
                </h3>

                <p className="text-gray-600">
                  Des véhicules adaptés à vos besoins.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About