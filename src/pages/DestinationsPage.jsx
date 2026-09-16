import { destinations } from '../data/destinations'
import DestinationCard from '../components/DestinationCard'

const DestinationsPage = () => {
  return (
    <>
      <div className="bg-gray-900 px-6 py-32 text-center text-white">
        <span className="font-semibold uppercase tracking-widest text-red-500">
          Destinations
        </span>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Explorez nos destinations
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-gray-300">
          Voyagez vers plusieurs villes avec nos différentes
          lignes de transport.
        </p>
      </div>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}

          </div>

        </div>
      </section>
    </>
  )
}

export default DestinationsPage