import { MapPin, ArrowRight } from 'lucide-react'

const DestinationCard = ({ destination }) => {
  return (
    <div className="group relative h-80 overflow-hidden rounded-2xl">

      <img
        src={destination.image}
        alt={destination.city}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 p-6 text-white">

        <div className="flex items-center gap-2 text-red-400">
          <MapPin size={20} />
          <span>{destination.country}</span>
        </div>

        <h3 className="mt-2 text-2xl font-bold">
          {destination.city}
        </h3>

        <button className="mt-3 flex items-center gap-2 font-semibold hover:text-red-400">
          Découvrir
          <ArrowRight size={18} />
        </button>

      </div>

    </div>
  )
}

export default DestinationCard