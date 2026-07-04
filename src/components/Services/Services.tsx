import Link from "next/link";
import { Crown, Mail, Sparkles, Check } from "lucide-react";

const services = [
  {
    title: "Esencial",
    subtitle: "Ideal para eventos íntimos y celebraciones especiales.",
    description:
      "Una invitación digital elegante con todo lo necesario para compartir los detalles de tu evento de forma práctica y sofisticada.",
    icon: Mail,
    featured: false,
    features: [
      "Diseño completamente personalizado",
      "Confirmación de asistencia (RSVP)",
      "Ubicación integrada con Google Maps",
      "Botón de contacto por WhatsApp",
    ],
  },
  {
    title: "Premium",
    subtitle: "Nuestra experiencia más elegida.",
    description:
      "La combinación perfecta entre diseño, funcionalidad y una experiencia memorable para tus invitados.",
    icon: Sparkles,
    featured: true,
    features: [
      "Todo lo incluido en Esencial",
      "Galería de fotografías",
      "Cuenta regresiva para el evento",
      "Confirmación directa por WhatsApp",
      "Música personalizada",
    ],
  },
  {
    title: "Signature",
    subtitle: "La experiencia más completa de Lúmeritz.",
    description:
      "Pensada para quienes desean sorprender a sus invitados con una invitación moderna, elegante y llena de detalles exclusivos.",
    icon: Crown,
    featured: false,
    features: [
      "Todo lo incluido en Premium",
      "Selfie Station",
      "Soporte prioritario",
      "Personalización avanzada",
      "Actualizaciones sin costo durante el proceso",
    ],
  },
];

const Services = () => {
  return (
    <section id="servicios" className="bg-white py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}

        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xs uppercase tracking-[0.35em] text-lumeritz-gold font-medium mb-4">
            Experiencias
          </p>

          <h2 className="font-serif text-5xl md:text-6xl text-lumeritz-green leading-tight">
            Encuentra la invitación perfecta para tu evento.
          </h2>

          <p className="mt-8 text-lg leading-8 text-lumeritz-green/70">
            Cada una de nuestras experiencias está diseñada para adaptarse al
            estilo de tu celebración, combinando elegancia, tecnología y una
            experiencia inolvidable para tus invitados.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-10">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className={`relative flex flex-col rounded-3xl border p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  service.featured
                    ? "border-lumeritz-gold shadow-lg bg-lumeritz-cream"
                    : "border-lumeritz-sage/40 bg-white"
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-lumeritz-gold px-5 py-2 text-[10px] uppercase tracking-[0.25em] text-white shadow-md">
                      Más popular
                    </span>
                  </div>
                )}

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-lumeritz-green/5">
                  <Icon
                    size={30}
                    className="text-lumeritz-gold"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="font-serif text-4xl text-lumeritz-green mb-2">
                  {service.title}
                </h3>

                <p className="uppercase tracking-[0.2em] text-xs text-lumeritz-gold mb-6">
                  {service.subtitle}
                </p>

                <p className="text-lumeritz-green/70 leading-8 mb-8">
                  {service.description}
                </p>

                <ul className="space-y-5 grow">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-lumeritz-green/80"
                    >
                      <Check
                        size={18}
                        className="text-lumeritz-gold mt-1 shrink-0"
                        strokeWidth={2}
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contacto"
                  className={`mt-10 text-center rounded-full border px-8 py-4 uppercase tracking-[0.25em] text-xs transition-all duration-300 ${
                    service.featured
                      ? "bg-lumeritz-green text-lumeritz-cream border-lumeritz-green hover:bg-lumeritz-gold hover:border-lumeritz-gold"
                      : "border-lumeritz-green text-lumeritz-green hover:bg-lumeritz-green hover:text-lumeritz-cream"
                  }`}
                >
                  Solicitar información
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
