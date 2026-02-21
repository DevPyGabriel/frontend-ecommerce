import { Icons } from "../Icons";

export const Footer = () => {
  return (
    <section className="w-full max-w-280 border-t border-white/10 mt-12">
      <div
        className="
        sm:py-6 py-4 px-4
        grid grid-cols-4 grid-rows-2 sm:grid-rows-1 sm:grid-cols-6
        gap-4"
      >
        <div className="col-span-4 flex gap-4">
          <img
            className="size-24 sm:size-32"
            src="/logo-e-commerce.webp"
            alt="Imagen del Logo de la Feria del Gamer Tienda Online"
          />
          <div className="flex flex-col gap-y-1">
            <div className="tracking-tight flex flex-col pb-1">
              <h3 className="font-rethink text-2xl font-semibold">
                Atencion al cliente 24/7
              </h3>
              <p className="text-sm xs:text-base leading-5 text-white/30 font-light sm:max-w-10/12">
                Contamos con buen servicio y atencion , no dudes en
                contactarnos{" "}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="p-1 rounded-md bg-background1 text-brand-sky hover:bg-neutral-800 transition-all duration-200 hover:scale-105"
              >
                <Icons.Instagram size={32} />
              </a>
              <a
                href="#"
                className="p-1 rounded-md bg-background1 text-brand-sky hover:bg-neutral-800 transition-all duration-200 hover:scale-105"
              >
                <Icons.Whatsapp size={32} />
              </a>
            </div>
          </div>
        </div>
        <div className="font-rethink tracking-tight col-span-4 sm:col-span-1">
          <h4 className="text-2xl font-semibold pb-4">Links</h4>
          <ul className="flex flex-row sm:flex-col gap-3 text-white/30">
            <li>
              <a
                href="#"
                className="hover:underline underline-offset-3 hover:text-white/50 transition-all duration-200"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline underline-offset-3 hover:text-white/50 transition-all duration-200"
              >
                Categorias
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline underline-offset-3 hover:text-white/50 transition-all duration-200"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
