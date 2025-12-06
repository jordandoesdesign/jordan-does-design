import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import illustrationItems from "@/assets/illustration-items.png";
import lasagnaIllustration from "@/assets/lasagna-illustration.png";
import iceCreamIllustration from "@/assets/ice-cream-illustration.png";
import characterSketches from "@/assets/character-sketches.png";
import pattern1 from "@/assets/pattern-1.png";
import pattern2 from "@/assets/pattern-2.png";
import pattern3 from "@/assets/pattern-3.png";

const IconsIllustrations = () => {
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

  const carouselImages = [
    { src: illustrationItems, alt: "Illustration Items", caption: "Custom illustration items designed for various client projects, featuring food icons and everyday objects." },
    { src: lasagnaIllustration, alt: "Lasagna Illustration", caption: "A detailed lasagna illustration showcasing layered pasta, cheese, and sauce in a warm, inviting style." },
    { src: iceCreamIllustration, alt: "Ice Cream Illustration", caption: "Playful ice cream cone illustrations with colorful scoops and toppings." },
    { src: characterSketches, alt: "Character Sketches", caption: "Character concept sketches exploring different expressions and poses." },
    { src: pattern1, alt: "Pattern Design 1", caption: "Seamless pattern design featuring organic shapes and vibrant colors." },
    { src: pattern2, alt: "Pattern Design 2", caption: "Geometric pattern with bold lines and complementary color palette." },
    { src: pattern3, alt: "Pattern Design 3", caption: "Nature-inspired pattern with floral and botanical elements." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary text-center mb-12">
            Illustration
          </h1>

          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            A collection of custom illustrations, icons, and pattern designs created for various clients and personal projects.
          </p>

          {/* Carousel Section */}
          <div className="mb-24">
            <div className="bg-white p-8 md:p-12 rounded-none shadow-sm">
              <Carousel className="w-full" opts={{ loop: true }}>
                <div className="flex items-center">
                  {/* Left Arrow */}
                  <CarouselPrevious className="relative left-0 translate-y-0 h-12 w-12 aspect-square border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110 active:scale-95" />
                  
                  {/* Carousel Content */}
                  <div className="flex-1 mx-4 md:mx-8">
                    <CarouselContent>
                      {carouselImages.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-4">
                            {/* Image */}
                            <div className="w-full md:w-1/2 flex items-center justify-center">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="max-h-[400px] md:max-h-[500px] w-auto object-contain"
                              />
                            </div>
                            {/* Caption */}
                            <div className="w-full md:w-1/2 text-center md:text-left">
                              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                                {image.alt}
                              </h3>
                              <p className="text-muted-foreground text-lg leading-relaxed">
                                {image.caption}
                              </p>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </div>
                  
                  {/* Right Arrow */}
                  <CarouselNext className="relative right-0 translate-y-0 h-12 w-12 aspect-square border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110 active:scale-95" />
                </div>
              </Carousel>
            </div>
          </div>

          {/* See Also Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8">See also</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {seeAlsoProjects.map((project, index) => (
                <div key={index} className="bg-[#FFE8E0] p-8 h-64 flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <Link to={project.link}>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit">
                      Read More →
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

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
    </div>
  );
};

export default IconsIllustrations;
