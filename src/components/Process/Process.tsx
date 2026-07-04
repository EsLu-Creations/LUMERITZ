import Link from "next/link";
import { ArrowRight, Palette, PencilLine, Send } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Elige tu diseño",
    description:
      "Explora nuestra colección de invitaciones y encuentra el estilo perfecto para tu celebración.",
    icon: Palette,
  },
  {
    number: "02",
    title: "Lo personalizamos",
    description:
      "Comparte los detalles de tu evento y personalizamos cada elemento para crear una invitación única.",
    icon: PencilLine,
  },
  {
    number: "03",
    title: "Comparte con tus invitados",
    description:
      "Recibe tu invitación lista para enviarla por WhatsApp o cualquier medio digital en cuestión de minutos.",
    icon: Send,
  },
];

const Process = () => {
  return (
    <section id="proceso" className="bg-white py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}

        <div className="max-w-3xl mx-auto text-center mb-24">
          <p className="uppercase tracking-[0.35em] text-xs text-lumeritz-gold font-medium mb-4">
            ¿Cómo funciona?
          </p>

          <h2 className="font-serif text-5xl md:text-6xl text-lumeritz-green leading-tight">
            Creamos tu invitación de principio a fin.
          </h2>

          <p className="mt-8 text-lg leading-8 text-lumeritz-green/70">
            Nos encargamos de todo el proceso para que solo tengas que compartir
            una invitación elegante, personalizada y lista para sorprender a tus
            invitados.
          </p>
        </div>

        {/* Pasos */}

        <div className="grid lg:grid-cols-3 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                <div
                  className="
                    h-full
                    rounded-3xl
                    border
                    border-lumeritz-sage/40
                    bg-lumeritz-cream
                    p-10
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-xl
                  "
                >
                  {/* Icono */}

                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                    <Icon
                      size={28}
                      strokeWidth={1.8}
                      className="text-lumeritz-gold"
                    />
                  </div>

                  {/* Número */}

                  <span className="font-serif text-6xl text-lumeritz-sage/40">
                    {step.number}
                  </span>

                  {/* Título */}

                  <h3 className="mt-6 font-serif text-3xl text-lumeritz-green">
                    {step.title}
                  </h3>

                  {/* Texto */}

                  <p className="mt-5 leading-8 text-lumeritz-green/70">
                    {step.description}
                  </p>
                </div>

                {/* Flecha */}

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-7 z-10 h-14 w-14 items-center justify-center rounded-full bg-white border border-lumeritz-sage/30 shadow-sm">
                    <ArrowRight size={20} className="text-lumeritz-gold" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Información adicional */}

        <div className="mt-20 rounded-3xl bg-lumeritz-green px-10 py-12 text-center">
          <p className="text-lumeritz-gold uppercase tracking-[0.3em] text-xs mb-4">
            Tiempo de entrega
          </p>

          <h3 className="font-serif text-4xl text-lumeritz-cream">
            Tu invitación puede estar lista en 24 a 48 horas*
          </h3>

          <p className="mt-6 max-w-2xl mx-auto leading-8 text-lumeritz-cream/80">
            Dependiendo del paquete elegido y del tiempo de respuesta para la
            revisión de la información, trabajamos para entregar tu invitación
            lo antes posible sin descuidar ningún detalle.
          </p>

          <Link
            href="#contacto"
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-lumeritz-gold
              px-8
              py-4
              text-xs
              uppercase
              tracking-[0.25em]
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:opacity-90
            "
          >
            Comenzar mi invitación
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Process;
