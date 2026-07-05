import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Music4, Images, Users } from "lucide-react";

const projects = [
  {
    title: "Valeria & Mateo",
    category: "Boda",
    style: "Elegante",
    href: "https://invitacion-boda-red.vercel.app",
    thumbnail: "/Boda Valeria y Mateo.png",
    features: ["RSVP", "Maps", "Música"],
    featured: true,
  },
  {
    title: "XV Años Sofía",
    category: "XV Años",
    style: "Minimalista",
    href: "https://invitacion-xv-prototipo.vercel.app",
    thumbnail: "/XV Valentina.png",
    features: ["Galería", "RSVP", "WhatsApp"],
  },
  {
    title: "Baby Shower Emma",
    category: "Baby Shower",
    style: "Moderno",
    href: "https://demo3.com",
    thumbnail: "/portfolio/baby-1.jpg",
    features: ["Cuenta regresiva", "Maps", "Galería"],
  },
];

const featureIcons: Record<string, React.ReactNode> = {
  RSVP: <Users size={15} />,
  Maps: <MapPin size={15} />,
  Música: <Music4 size={15} />,
  Galería: <Images size={15} />,
};

const Portfolio = () => {
  return (
    <section id="portafolio" className="bg-lumeritz-cream py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <p className="uppercase tracking-[0.35em] text-xs text-lumeritz-gold font-medium mb-4">
            Nuestro trabajo
          </p>

          <h2 className="font-serif text-5xl md:text-6xl text-lumeritz-green leading-tight">
            Invitaciones que cobran vida.
          </h2>

          <p className="mt-8 text-lg leading-8 text-lumeritz-green/70">
            Explora algunas de nuestras invitaciones digitales y descubre cómo
            cada diseño se adapta a la personalidad de cada celebración.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              target="_blank"
              className={`group overflow-hidden rounded-3xl border border-lumeritz-sage/40 bg-white 
                  transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                    project.featured ? "lg:col-span-2" : ""
                  }`}
            >
              <div
                className={`relative overflow-hidden ${
                  project.featured ? "h-130" : "h-95"
                }`}
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute top-6 left-6">
                  <span
                    className="rounded-full bg-white/90 px-4 py-2 text-[10px] uppercase tracking-[0.25em] 
                    text-lumeritz-green backdrop-blur"
                  >
                    {project.category}
                  </span>
                </div>

                <div
                  className="absolute top-6 right-6 opacity-0 translate-y-2 transition-all duration-300 
                  group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <div
                    className="flex items-center gap-2 rounded-full bg-lumeritz-green px-5 py-3 text-xs 
                    uppercase tracking-[0.2em] text-white"
                  >
                    Explorar
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                  <p className="uppercase tracking-[0.25em] text-xs text-lumeritz-gold mb-2">
                    {project.style}
                  </p>

                  <h3 className="font-serif text-4xl mb-6">{project.title}</h3>

                  <div className="flex flex-wrap gap-3">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 
                        py-2 backdrop-blur"
                      >
                        {featureIcons[feature]}
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-lg text-lumeritz-green/70 mb-8">
            ¿Te imaginas una invitación diseñada especialmente para tu evento?
          </p>

          <Link
            href="#contacto"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-lumeritz-green
              px-10
              py-4
              uppercase
              tracking-[0.25em]
              text-xs
              text-lumeritz-green
              transition-all
              hover:bg-lumeritz-green
              hover:text-lumeritz-cream
            "
          >
            Solicitar cotización
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
