import { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { StrokeButton } from "../ui/StrokeButton";
import { Icons } from "../Icons";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [headerClass, setHeaderClass] = useState<string>("max-w-280 px-4 xl:px-0");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderClass("max-w-250 px-6 xs:px-8 sm:px-10 md:px-12");
      } else {
        setHeaderClass("max-w-280 px-4 xl:px-0");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`pt-4 fixed top-0 w-full z-50 ${headerClass} left-1/2 -translate-x-1/2 transition-all duration-300`}>
      <header className="w-full bg-background1 flex items-center justify-between rounded-md px-3 md:px-4 py-3 md:py-2">
        <div
          className={`flex items-center gap-x-4 font-rethink tracking-tight text-white/60`}
        >
          <div
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="flex sm:hidden"
          >
            <Icons.Menu
              size={36}
              className="hover:text-white transform transition-all duration-200 hover:scale-105"
            />
          </div>
          <a href="#top">
            <img
              src="/logo-e-commerce.webp"
              alt="Logo de la Feria del Gamer"
              className="size-10 sm:size-12 object-contain sm:flex hidden"
            />
          </a>
          <a
            href=""
            className="hover:text-white transition-all transform duration-200 hidden sm:flex"
          >
            Inicio
          </a>
          <a
            href=""
            className="hover:text-white transition-all transform duration-200 hidden sm:flex"
          >
            Categorias
          </a>
          <a
            href=""
            className="hover:text-white transition-all transform duration-200 hidden sm:flex"
          >
            Contacto
          </a>
        </div>

        <div className="flex items-center gap-x-3">
          <StrokeButton padding="p-[11px]">
            <div>
              <Icons.Shopcart size={16} />
            </div>
          </StrokeButton>
          <Button />
        </div>
      </header>

      <div className="relative pt-2 w-full">
        <div
          id="mobile-menu"
          role="menu"
          aria-hidden={!isOpen}
          className={`bg-background1 rounded-md px-3 py-2 transition-all transform duration-200 z-50 origin-top-left
          ${
            isOpen
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col divide-y divide-white/10 font-rethink text-white/60 tracking-tight">
            <a href="" className="py-2 hover:text-white select-none">
              Inicio
            </a>
            <a href="" className="py-2 hover:text-white select-none">
              Categorias
            </a>
            <a href="" className="py-2 hover:text-white select-none">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
