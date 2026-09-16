import {
  ShieldCheck,
  Clock,
  Wallet,
  Headphones,
} from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Sécurité',
    text: 'Des véhicules entretenus et des conducteurs expérimentés.',
  },
  {
    icon: Clock,
    title: 'Ponctualité',
    text: 'Nous accordons une grande importance au respect des horaires.',
  },
  {
    icon: Wallet,
    title: 'Prix accessibles',
    text: 'Des tarifs adaptés à différents budgets.',
  },
  {
    icon: Headphones,
    title: 'Support client',
    text: 'Une équipe disponible pour répondre à vos questions.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-900 py-20 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-red-500">
            Pourquoi nous ?
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Voyager en toute confiance
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {reasons.map((reason) => {
            const Icon = reason.icon

            return (
              <div
                key={reason.title}
                className="rounded-2xl border border-gray-700 p-6"
              >
                <Icon
                  size={40}
                  className="text-red-500"
                />

                <h3 className="mt-5 text-xl font-bold">
                  {reason.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {reason.text}
                </p>
              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs