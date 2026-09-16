import { buses } from '../data/buses'
import BusCard from '../components/BusCard'

const Buses = () => {
  return (
    <section id="buses" className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-red-600">
            Notre flotte
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Découvrez nos bus
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Une flotte moderne conçue pour rendre vos voyages plus agréables.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {buses.map((bus) => (
            <BusCard
              key={bus.id}
              bus={bus}
            />
          ))}

        </div>

      </div>
    </section>
  )
}

export default Buses