import heroArrow from "@/assets/assets_Arrow.svg";
import heroCharacter from "@/assets/hero-character.png";
const Hero = () => {
  const services = " ✿ Logo Designs ✿ Brochures ✿ Social Media Templates ✿ Canva Templates ✿ eBooks ";
  return <section className="pt-32 pb-16 md:pb-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 items-center">
          {/* Text Content */}
          <div className="mx-0 px-0 mr-[150px] ml-px">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-4 whitespace-nowrap text-right lg:text-5xl px-0">
              Hi, I'm
            </h1>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary mb-4 whitespace-nowrap text-right lg:text-7xl px-0">
              Jordan
            </h1>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-8 lg:text-5xl pb-0 pt-[35px] whitespace-nowrap text-right py-0 px-0">
              I design
            </h1>
            
            {/* Marquee Services */}
            <div className="overflow-hidden whitespace-nowrap mb-8">
              <div className="inline-block animate-marquee pr-0 mr-0">
                <span className="text-lg text-primary font-medium mx-[100px] px-0 py-[10px] md:text-2xl">{services}</span>
                <span className="text-lg md:text-xl text-primary font-medium pr-0 mr-0">{services}</span>
              </div>
            </div>

            {/* Arrow Decoration */}
            <div className="text-primary mt-2">
              <img src={heroArrow} alt="Curved decorative arrow" className="w-[10px] h-[56px]" />
            </div>
          </div>

          {/* Character Illustration */}
          <div className="flex justify-center lg:flex lg:items-center lg:justify-start">
            <div className="w-full max-w-md h-96 overflow-hidden animate-float">
              <img src={heroCharacter} alt="Graphic Design Portfolio" className="w-full h-full object-scale-down" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;