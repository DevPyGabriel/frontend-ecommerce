import { useState, useEffect } from "react";
import { Icons } from "../Icons";

export interface CarouselProps {
  slides?: string[];
}

export const Carousel = ({ slides = [] }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const previusSlide = () => {
    setIsAutoPlaying(false);
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    setIsAutoPlaying(false);
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="rounded-md overflow-hidden relative w-full">
      <div
        className="flex transition-all ease-out duration-400"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return (
            <div className="relative w-full shrink-0">
              <img src={s} className="w-full h-full object-cover select-none" />
              <div className="absolute inset-0 bg-linear-to-t from-black to-transparent pointer-events-none"></div>
            </div>
          );
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center text-white/50 flex px-2 md:px-4">
        <button
          onClick={previusSlide}
          className="bg-background0 size-6 xs:size-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-200"
        >
          <Icons.Arrow width={8} height={13} />
        </button>

        <button
          onClick={nextSlide}
          className="rotate-180 bg-background0 size-6 xs:size-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-200"
        >
          <Icons.Arrow width={8} height={13} />
        </button>
      </div>

      <div className="absolute bottom-0 flex w-full items-center justify-center py-2 sm:py-3 sm:gap-2 gap-1.5">
        {slides.map((_, i) => {
          return (
            <div
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`transition-all duration-200 rounded-full cursor-pointer ${i === current ? "bg-white sm:size-3 size-2.5" : "bg-white/30 size-1.5 sm:size-2.5"}`}
            ></div>
          );
        })}
      </div>

      <div className="absolute bottom-0 w-full px-4 pb-5 md:px-6 md:pb-4 xs:block hidden">
        <h1 className="font-rethink text-2xl tracking-tight sm:pb-2 xs:text-3xl sm:text-4xl md:text-6xl font-semibold">
          Tienda online
        </h1>
        <p className="md:leading-6 md:pb-3 tracking-tight font-geist text-white/40 max-w-96 md:max-w-136 text-sm sm:text-base md:text-lg leading-5">
          Disfruta del mejor servicio de recargas , tarjetas de regalo y mucho
          mas en La Feria del Gamer
        </p>
      </div>
    </div>
  );
};
