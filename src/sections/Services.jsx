import {
  Bus,
  Star,
  GraduationCap,
  CalendarDays,
} from 'lucide-react'

import { services } from '../data/services'

const icons = {
  Bus,
  Star,
  GraduationCap,
  CalendarDays,
}

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-2xl text-center">
          <span className="font-semibold uppercase tracking-widest text-red-600">
            Nos services
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Des solutions pour tous vos déplacements
          </h2>

          <p className="mt-4 text-gray-600">
            Découvrez nos différentes solutions de transport.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => {
            const Icon = icons[service.icon]

            return (
              <div
                key={service.id}
                className="rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-6 text-gray-600">
                  {service.description}
                </p>
              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default Services