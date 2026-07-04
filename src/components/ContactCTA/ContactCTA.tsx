import Link from "next/link";
import { ArrowUpRight, Check, Clock3, MessageCircle } from "lucide-react";

const benefits = [
  "Diseños completamente personalizados.",
  "Compatibles con cualquier dispositivo.",
  "Confirmación de asistencia (RSVP).",
  "Ubicación integrada con Google Maps.",
  "Comparte fácilmente por WhatsApp.",
  "Acompañamiento durante todo el proceso.",
];

const ContactCTA = () => {
  return (
    <section id="contacto" className="bg-lumeritz-green py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <p className="uppercase tracking-[0.35em] text-xs text-lumeritz-gold font-medium mb-4">
            Comencemos
          </p>

          <h2 className="font-serif text-5xl md:text-6xl leading-tight text-lumeritz-cream">
            Hagamos realidad tu invitación.
          </h2>

          <p className="mt-8 text-lg leading-8 text-lumeritz-cream/75 max-w-xl">
            Cuéntanos cómo imaginas tu celebración y nosotros nos encargaremos
            de transformar esa idea en una invitación digital elegante,
            personalizada y lista para sorprender a todos tus invitados.
          </p>

          <div className="mt-12 grid gap-5">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-4">
                <div
                  className="mt-1 flex h-8 w-8 items-center justify-center rounded-full 
                  bg-lumeritz-gold/20"
                >
                  <Check size={16} className="text-lumeritz-gold" />
                </div>

                <p className="text-lumeritz-cream/85 leading-7">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-4xl border border-lumeritz-gold/30 bg-white/10 backdrop-blur-xl p-10 
          md:p-14 shadow-2xl"
        >
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-lumeritz-gold/20">
              <MessageCircle size={40} className="text-lumeritz-gold" />
            </div>
          </div>

          <h3 className="mt-8 text-center font-serif text-4xl text-lumeritz-cream">
            ¿Listo para comenzar?
          </h3>

          <p className="mt-6 text-center leading-8 text-lumeritz-cream/75">
            Escríbenos por WhatsApp y cuéntanos los detalles de tu evento.
            Resolveremos tus dudas y te ayudaremos a encontrar la experiencia
            perfecta para tu celebración.
          </p>

          <Link
            href="https://wa.me/521XXXXXXXXXX?text=Hola,%20me%20gustaría%20recibir%20información%20sobre%20una%20invitación%20digital."
            target="_blank"
            className="
              mt-10
              flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-lumeritz-gold
              px-8
              py-5
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-white
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:opacity-90
            "
          >
            Hablar por WhatsApp
            <ArrowUpRight size={18} />
          </Link>

          <div className="mt-10 flex items-center justify-center gap-3 text-sm text-lumeritz-cream/70">
            <Clock3 size={18} className="text-lumeritz-gold" />

            <span>Normalmente respondemos en menos de una hora.</span>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <p className="font-serif text-3xl text-lumeritz-gold">100%</p>

                <p className="mt-2 text-sm text-lumeritz-cream/70">
                  Personalizado
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl text-lumeritz-gold">
                  Digital
                </p>

                <p className="mt-2 text-sm text-lumeritz-cream/70">
                  Fácil de compartir
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
