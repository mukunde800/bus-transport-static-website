import About from '../sections/About'
import WhyChooseUs from '../sections/WhyChooseUs'

const AboutPage = () => {
  return (
    <>
      <div className="bg-gray-900 px-6 py-32 text-center text-white">
        <span className="font-semibold uppercase tracking-widest text-red-500">
          À propos
        </span>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Découvrez notre entreprise
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-gray-300">
          Nous sommes spécialisés dans le transport de voyageurs
          avec des solutions confortables, sûres et accessibles.
        </p>
      </div>

      <About />

      <WhyChooseUs />
    </>
  )
}

export default AboutPage