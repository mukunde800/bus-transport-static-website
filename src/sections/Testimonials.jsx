import { Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'

const Testimonials = () => {
  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-red-600">
            Témoignages
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Ce que disent nos voyageurs
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl bg-gray-50 p-6"
            >

              <div className="flex gap-1 text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="mt-5 leading-7 text-gray-600">
                "{testimonial.message}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Testimonials