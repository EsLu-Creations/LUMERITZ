import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/EsLu_Creations_logo_HD.png";

const AboutUs = () => {
  return (
    <section id="nosotros" className="bg-lumeritz-cream py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-lumeritz-gold font-medium">
              Sobre Lúmeritz
            </p>

            <h2 className="font-serif text-5xl md:text-6xl leading-tight text-lumeritz-green">
              Diseñamos la primera impresión de tu evento.
            </h2>
          </div>

          <div className="space-y-6 text-lumeritz-green/80 text-lg leading-9">
            <p>
              En <strong>Lúmeritz</strong> creemos que cada celebración merece
              comenzar con una invitación que transmita su esencia.
            </p>

            <p>
              Creamos invitaciones digitales elegantes, personalizadas y fáciles
              de compartir, cuidando cada detalle para que tus invitados vivan
              una experiencia única desde el primer momento.
            </p>

            <p>
              Nuestra misión es ayudarte a transformar una simple invitación en
              un recuerdo inolvidable.
            </p>
          </div>

          <Link
            href="#portafolio"
            className="
              inline-flex
              items-center
              gap-3
              border
              bg-lumeritz-gold
              border-lumeritz-green
              px-8
              py-4
              uppercase
              tracking-[0.25em]
              text-xs
              transition-all
              hover:bg-lumeritz-green
              hover:text-lumeritz-cream
            "
          >
            Ver portafolio
            <span className="text-base">→</span>
          </Link>
        </div>

        <div className="flex justify-center">
          <div
            className="
              relative
              w-full
              max-w-md
              aspect-square
              p-12
              transition-transform
              duration-500
              hover:scale-[1.02]
            "
          >
            <Image
              src={Logo}
              alt="Logo de EsLu"
              fill
              className="object-contain p-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
