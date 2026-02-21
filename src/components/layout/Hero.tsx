import { Pill } from "../ui/Pill";
import { Carousel } from "./Carousel";

export const Hero = () => {
  
  const slides = [
    "https://www.esports.net/wp-content/uploads/2023/08/clash-royale-1.jpg",
    "https://cdn4.idcgames.com/storage/image/1258/free-new-logo/default.jpg",
    "https://wallpapers.com/images/hd/brawl-stars-background-yupjffkodfux5ajx.jpg"
  ]

  return (
    <section>
      <Carousel slides={slides} />
      <div className="pb-5 sm:pb-7 pt-6 sm:pt-8">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <Pill backgroundColor="bg-fuchsia-700/30" textColor="text-fuchsia-400">
            Gift Card
          </Pill>
          <Pill backgroundColor="bg-green-700/30" textColor="text-green-400">
            Recargas
          </Pill >
          <Pill backgroundColor="bg-blue-700/30" textColor="text-sky-400">
            Juegos
          </Pill>
          <Pill backgroundColor="bg-yellow-600/20" textColor="text-yellow-300">
            Recomendados
          </Pill>
        </div>
      </div>
    </section>
  )
};