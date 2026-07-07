"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Menu } from "lucide-react";
import Logo from "../../../public/Es-Lu.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    {
      href: "#servicios",
      label: "Servicios",
    },
    {
      href: "#portafolio",
      label: "Portafolio",
    },
    {
      href: "#proceso",
      label: "Proceso",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-lumeritz-cream/90 backdrop-blur-xl border-b border-lumeritz-green/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "py-4 px-6" : "py-7 px-8"
        }`}
      >
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-80 -my-6 z-10"
        >
          <Image
            src={Logo}
            alt="Es-Lu Logo"
            width={200}
            height={200}
            className="h-24 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                relative
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-lumeritz-green
                transition-colors
                hover:text-lumeritz-gold

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-px
                after:w-0
                after:bg-lumeritz-gold
                after:transition-all
                hover:after:w-full
              "
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contacto"
            className="
              rounded-full
              border
              border-lumeritz-green
              px-7
              py-3
              text-[11px]
              uppercase
              tracking-[0.25em]
              text-lumeritz-green
              transition-all
              hover:bg-lumeritz-green
              hover:text-lumeritz-cream
            "
          >
            Cotizar
          </Link>
        </div>
        <button
          aria-label="Abrir menú"
          className="md:hidden text-lumeritz-green"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-8 pb-8 pt-4 gap-6 bg-lumeritz-cream">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="uppercase tracking-[0.2em] text-sm text-lumeritz-green 
              hover:text-lumeritz-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contacto"
            onClick={closeMenu}
            className="
              mt-2
              text-center
              rounded-full
              bg-lumeritz-green
              py-4
              uppercase
              tracking-[0.25em]
              text-lumeritz-cream
              transition-colors
              hover:bg-lumeritz-gold
            "
          >
            Cotizar
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
