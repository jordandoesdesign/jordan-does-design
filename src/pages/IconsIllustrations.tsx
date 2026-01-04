import { useState, useEffect, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import SeeAlsoSection from "@/components/SeeAlsoSection";
import illustrationItems from "@/assets/illustration-items.png";
import lasagnaIllustration from "@/assets/lasagna-illustration.png";
import iceCreamIllustration from "@/assets/ice-cream-illustration.png";
import characterSketches from "@/assets/character-sketches.png";
import pattern1 from "@/assets/pattern-1.png";
import pattern2 from "@/assets/pattern-2.png";
import pattern3 from "@/assets/pattern-3.png";
const IconsIllustrations = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);
  const seeAlsoProjects = [{
    title: "Canva Template Design",
    link: "/work/canva-templates"
  }, {
    title: "Canva Pinterest Graphics",
    link: "/work/pinterest-graphics"
  }, {
    title: "Brand Design: SURRI",
    link: "/work/surr-brand"
  }];
  const carouselImages = [{
    src: illustrationItems,
    alt: "Digital Sticker Set",
    caption: "Stickers used for a digital planner app"
  }, {
    src: lasagnaIllustration,
    alt: "Lasagna Illustration",
    caption: "An illustrated recipe"
  }, {
    src: iceCreamIllustration,
    alt: "Ice Cream Illustration",
    caption: "Illustration and custom lettering for a greeting card design"
  }, {
    src: characterSketches,
    alt: "Fruit Illustration",
    caption: "A collection of illustrations created for fruit inspired beverages"
  }, {
    src: pattern1,
    alt: "Merch Design",
    caption: "Custom merch design featuring illustration and lettering"
  }, {
    src: pattern2,
    alt: "Journal Set",
    caption: "Repeat patterns created for office journals"
  }, {
    src: pattern3,
    alt: "Seasonal Illustration",
    caption: "Custom lettering for a greeting card"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary text-center mb-12">
            Illustration
          </h1>

          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
             I love working with clients to create digital illustrations that make their brand feel welcoming and unforgettable.             
          </p>

          {/* Carousel Section - Desktop Only */}
          <div className="mb-24 hidden lg:block">
            <div className="bg-white p-8 md:p-12 rounded-none shadow-sm">
              <Carousel className="w-full" opts={{
              loop: true
            }} setApi={setApi}>
                <div className="flex items-center justify-center">
                  {/* Left Arrow */}
                  <CarouselPrevious className="relative left-0 translate-y-0 h-12 w-12 aspect-square border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110 active:scale-95" />
                  
                  {/* Carousel Content */}
                  <div className="flex-1 mx-4 md:mx-8 flex justify-center">
                    <CarouselContent>
                      {carouselImages.map((image, index) => <CarouselItem key={index}>
                          <div className="flex flex-col items-center justify-between p-4 min-h-[550px]">
                            {/* Image */}
                            <div className="flex-1 flex items-center justify-center">
                              <img src={image.src} alt={image.alt} className="max-h-[400px] w-auto object-contain" />
                            </div>
                            {/* Caption */}
                            <div className="text-center mt-6">
                              <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                                {image.alt}
                              </h3>
                              <p className="text-muted-foreground text-lg leading-relaxed">
                                {image.caption}
                              </p>
                            </div>
                          </div>
                        </CarouselItem>)}
                    </CarouselContent>
                  </div>
                  
                  {/* Right Arrow */}
                  <CarouselNext className="relative right-0 translate-y-0 h-12 w-12 aspect-square border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110 active:scale-95" />
                </div>
                
                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                  {Array.from({
                  length: count
                }).map((_, index) => <button key={index} onClick={() => scrollTo(index)} className={`h-3 w-3 rounded-full transition-all duration-300 ease-out hover:scale-125 ${index === current ? "bg-primary scale-110" : "bg-primary/30 hover:bg-primary/50"}`} aria-label={`Go to slide ${index + 1}`} />)}
                </div>
              </Carousel>
            </div>
          </div>

          {/* Stacked Layout - Tablet and Mobile Only */}
          <div className="mb-24 lg:hidden space-y-8 md:space-y-12">
            {carouselImages.map((image, index) => <div key={index} className="flex flex-col items-center gap-3 md:gap-6">
                {/* Image */}
                <div className="w-full flex items-center justify-center">
                  <img src={image.src} alt={image.alt} className="max-h-[350px] w-auto object-contain" />
                </div>
                {/* Caption */}
                <div className="w-full text-center px-4">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                    {image.alt}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {image.caption}
                  </p>
                </div>
              </div>)}
          </div>

          {/* See Also Section */}
          <SeeAlsoSection projects={seeAlsoProjects} />

          {/* Let's Work Together CTA */}
          <div className="text-center py-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's create something amazing.
            </p>
            <a href="mailto:Jordan@JordanVeirs.com">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default IconsIllustrations;