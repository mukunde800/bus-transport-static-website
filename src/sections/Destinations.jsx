import { destinations } from '../data/destinations'
import DestinationCard from '../components/DestinationCard'

const Destinations = () => {
  return (
    <section id="destinations" className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-red-600">
            Destinations
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Où souhaitez-vous aller ?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}

        </div>

      </div>
    </section>
  )
}

export default Destinations