const Hero = () => {
  const services = " ✿ Logo Designs ✿ Brochures ✿ Social Media Templates ✿ Canva Templates ✿ eBooks ";
  return <section className="pt-32 pb-16 md:pb-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary mb-4">
              Hi, I'm
            </h1>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-primary mb-4">
              Jordan
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary mb-8">
              I design
            </h1>
            
            {/* Marquee Services */}
            <div className="overflow-hidden whitespace-nowrap mb-8">
              <div className="inline-block animate-marquee">
                <span className="text-lg md:text-xl text-primary font-medium">{services}</span>
                <span className="text-lg md:text-xl text-primary font-medium">{services}</span>
              </div>
            </div>

            {/* Curly Arrow Decoration */}
            <div className="text-4xl text-primary">
              <span>~</span>
              <span>{'}'}</span>
            </div>
          </div>

          {/* Character Illustration */}
          
        </div>
      </div>
    </section>;
};
export default Hero;