import Contact from '../sections/Contact'

const ContactPage = () => {
  return (
    <>
      <div className="bg-gray-900 px-6 py-32 text-center text-white">
        <span className="font-semibold uppercase tracking-widest text-red-500">
          Contact
        </span>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Parlons de votre prochain voyage
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-gray-300">
          Une question, une réservation ou besoin d'informations ?
          Contactez notre équipe.
        </p>
      </div>

      <Contact />
    </>
  )
}

export default ContactPage