import { buses } from '../data/buses'
import BusCard from '../components/BusCard'

const BusesPage = () => {
  return (
    <>
      <div className="bg-gray-900 px-6 py-32 text-center text-white">
        <span className="font-semibold uppercase tracking-widest text-red-500">
          Notre flotte
        </span>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Découvrez nos bus
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-gray-300">
          Une flotte moderne et confortable pour rendre
          vos voyages plus agréables.
        </p>
      </div>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {buses.map((bus) => (
              <BusCard
                key={bus.id}
                bus={bus}
              />
            ))}

          </div>

        </div>
      </section>
    </>
  )
}

export default BusesPage