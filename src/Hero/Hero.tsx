"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarHeart,
  Images,
  MapPinned,
  Music4,
  Users,
} from "lucide-react";

import Logo from "../../public/EsLu_Creations_logo_HD.png";

const features = [
  {
    icon: Users,
    label: "RSVP",
  },
  {
    icon: MapPinned,
    label: "Google Maps",
  },
  {
    icon: Music4,
    label: "Música",
  },
  {
    icon: Images,
    label: "Galería",
  },
  {
    icon: CalendarHeart,
    label: "Cuenta regresiva",
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-lumeritz-cream pt-40 pb-24 px-6 md:px-10">
      {/* Fondo */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff,transparent_65%)] opacity-70" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Texto */}

        <div>
          <p className="uppercase tracking-[0.35em] text-xs text-lumeritz-gold mb-6">
            Invitaciones digitales premium
          </p>

          <h1 className="font-serif text-6xl md:text-7xl leading-none text-lumeritz-green">
            Diseñamos la primera impresión de tu evento.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-lumeritz-green/70">
            Creamos invitaciones digitales elegantes, personalizadas e
            interactivas para bodas, XV años, cumpleaños y cualquier celebración
            especial.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            <Link
              href="#portafolio"
              className="
              rounded-full
              bg-lumeritz-green
              px-9
              py-5
              text-white
              uppercase
              tracking-[0.25em]
              text-xs
              flex
              items-center
              justify-center
              gap-3
              hover:bg-lumeritz-gold
              transition-all
            "
            >
              Ver invitaciones
              <ArrowRight size={16} />
            </Link>

            <Link
              href="#contacto"
              className="
              rounded-full
              border
              bg-lumeritz-gold
              border-lumeritz-green
              px-9
              py-5
              uppercase
              tracking-[0.25em]
              text-xs
              flex
              items-center
              justify-center
              hover:bg-lumeritz-green
              hover:text-white
              transition-all
            "
            >
              Solicitar cotización
            </Link>
          </div>

          {/* Features */}

          <div className="mt-16 flex flex-wrap gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.label} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Icon size={18} className="text-lumeritz-gold" />
                  </div>

                  <span className="text-sm text-lumeritz-green/80">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute h-96 w-96 rounded-full bg-lumeritz-gold/10 blur-3xl" />
          <div
            className="
            relative
            rounded-[3rem]
            p-16
            w-full
            max-w-md
          "
          >
            <Image
              src={Logo}
              alt="Lúmeritz"
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
