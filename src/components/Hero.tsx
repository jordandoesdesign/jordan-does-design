const Hero = () => {
  const services = " ✿ Logo Designs ✿ Brochures ✿ Social Media Templates ✿ Canva Templates ✿ eBooks ";
  
  return (
    <section className="pt-32 pb-16 md:pb-24 px-6">
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
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Pink blob background */}
              <div className="absolute inset-0 -z-10">
                <svg viewBox="0 0 200 200" className="w-72 h-72 md:w-96 md:h-96">
                  <path
                    fill="#FFB4A2"
                    d="M44.7,-76.4C58.8,-69.3,71.6,-59.1,79.8,-45.8C88,-32.6,91.5,-16.3,91.3,-0.1C91.1,16.1,87.1,32.2,78.9,45.8C70.7,59.4,58.2,70.5,43.8,77.8C29.4,85.1,14.7,88.6,-0.5,89.5C-15.7,90.4,-31.4,88.7,-45.3,81.5C-59.2,74.3,-71.3,61.6,-78.9,46.8C-86.5,32,-89.6,16,-89.4,0.1C-89.2,-15.8,-85.7,-31.6,-77.8,-45.3C-69.9,-59,-57.6,-70.6,-43.5,-77.8C-29.4,-85,-14.7,-87.8,0.5,-88.7C15.7,-89.6,31.4,-88.6,44.7,-76.4Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>

              {/* Character */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Head with face */}
                <div className="relative mb-4">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                    {/* Simple face */}
                    <div className="text-4xl">👤</div>
                  </div>
                  {/* Hair */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-24 bg-gray-800 rounded-t-full"></div>
                </div>

                {/* Body */}
                <div className="w-24 h-32 bg-white rounded-b-3xl"></div>

                {/* Designer badge */}
                <div className="absolute top-1/2 right-0 transform translate-x-8">
                  <div className="relative">
                    <svg viewBox="0 0 100 100" className="w-24 h-24">
                      <path
                        fill="#FD5622"
                        d="M50,10 L61,35 L88,35 L67,52 L77,77 L50,60 L23,77 L33,52 L12,35 L39,35 Z"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-primary font-bold text-sm transform rotate-12">
                      designer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
