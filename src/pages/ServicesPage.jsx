import Services from '../sections/Services'

const ServicesPage = () => {
  return (
    <>
      <div className="bg-gray-900 px-6 py-32 text-center text-white">
        <span className="font-semibold uppercase tracking-widest text-red-500">
          Nos services
        </span>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Des services adaptés à vos besoins
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-gray-300">
          Découvrez nos différentes solutions de transport
          pour vos déplacements.
        </p>
      </div>

      <Services />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Une solution pour chaque voyage
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Que vous voyagiez seul, en famille, avec une école
            ou pour un événement, nous proposons différentes
            solutions adaptées à vos besoins.
          </p>

        </div>
      </section>
    </>
  )
}

export default ServicesPage