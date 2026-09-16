import { Mail, Phone, MapPin } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

const Contact = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)

    toast.success('Votre message a été envoyé !')

    reset()
  }

  return (
    <section id="contact" className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-red-600">
            Contact
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Contactez-nous
          </h2>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">

          {/* Informations */}
          <div className="space-y-6">

            <div className="flex gap-4">
              <MapPin className="text-red-600" />

              <div>
                <h3 className="font-bold">
                  Adresse
                </h3>

                <p className="text-gray-600">
                  Bujumbura, Burundi
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-red-600" />

              <div>
                <h3 className="font-bold">
                  Téléphone
                </h3>

                <p className="text-gray-600">
                  +257 00 00 00 00
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="text-red-600" />

              <div>
                <h3 className="font-bold">
                  Email
                </h3>

                <p className="text-gray-600">
                  contact@bustravel.com
                </p>
              </div>
            </div>

          </div>

          {/* Formulaire */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl bg-white p-8 shadow-md"
          >

            <input
              {...register('name', {
                required: 'Le nom est obligatoire',
              })}
              placeholder="Votre nom"
              className="w-full rounded-lg border p-3 outline-none focus:border-red-500"
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name.message}
              </p>
            )}

            <input
              {...register('email', {
                required: 'Email obligatoire',
              })}
              type="email"
              placeholder="Votre email"
              className="mt-5 w-full rounded-lg border p-3 outline-none focus:border-red-500"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}

            <textarea
              {...register('message', {
                required: 'Message obligatoire',
              })}
              rows="5"
              placeholder="Votre message"
              className="mt-5 w-full rounded-lg border p-3 outline-none focus:border-red-500"
            />

            {errors.message && (
              <p className="mt-1 text-sm text-red-500">
                {errors.message.message}
              </p>
            )}

            <button
              type="submit"
              className="mt-5 w-full rounded-lg bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Envoyer le message
            </button>

          </form>

        </div>

      </div>
    </section>
  )
}

export default Contact