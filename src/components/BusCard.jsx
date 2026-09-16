import { Users, ArrowRight } from 'lucide-react'

const BusCard = ({ bus }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <img
        src={bus.image}
        alt={bus.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">
            {bus.name}
          </h3>

          <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
            {bus.type}
          </span>
        </div>

        <p className="mt-3 text-gray-600">
          {bus.description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-gray-600">
          <Users size={20} />
          <span>{bus.capacity} passagers</span>
        </div>

        <button className="mt-5 flex items-center gap-2 font-semibold text-red-600 hover:text-red-700">
          En savoir plus
          <ArrowRight size={18} />
        </button>

      </div>

    </div>
  )
}

export default BusCard