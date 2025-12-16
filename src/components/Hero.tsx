import heroArrow from "@/assets/assets_Arrow.svg";
import heroCharacter from "@/assets/hero-character.png";
const Hero = () => {
  const services = " ✿ Logo Designs ✿ Brochures ✿ Social Media Templates ✿ Canva Templates ✿ eBooks ";
  return <section className="pt-32 pb-16 md:pb-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-[50px] items-center lg:justify-center">
          {/* Text Content */}
          <div className="w-full lg:max-w-[375px]">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary mb-4 whitespace-nowrap px-0">
              Hi, I'm
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary mb-4 px-[20px] whitespace-nowrap">
              Jordan
            </h1>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-8 lg:text-5xl pb-0 py-[14px] pt-[35px] whitespace-nowrap px-0">
              I design
            </h1>
            
            {/* Marquee Services */}
            <div className="overflow-hidden whitespace-nowrap mb-8">
              <div className="inline-block animate-marquee">
                <span className="text-lg text-primary font-medium px-[30px] md:text-2xl">{services}</span>
                <span className="text-lg md:text-xl text-primary font-medium">{services}</span>
              </div>
            </div>

          </div>

          {/* Character Illustration */}
          <div className="flex justify-center lg:flex lg:items-start lg:justify-center">
            <div className="w-full max-w-md h-96 overflow-hidden animate-float py-0 px-[30px]">
              <img src={heroCharacter} alt="Graphic Design Portfolio" className="w-full h-full object-scale-down" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;