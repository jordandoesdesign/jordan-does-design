import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import pinterestCollection from "@/assets/pinterest-collection.png";
import pinterestPin1 from "@/assets/pinterest-pin-1.png";
import pinterestPin2 from "@/assets/pinterest-pin-2.png";
import pinterestPin3 from "@/assets/pinterest-pin-3.png";
import canvaIcons from "@/assets/canva-icons.png";
import templateWithIcons from "@/assets/template-with-icons.png";
import canvaPlaceholder from "@/assets/canva-placeholder.png";
const PinterestGraphics = () => {
  const seeAlsoProjects = [{
    title: "Canva Template Design",
    link: "/work/canva-templates"
  }, {
    title: "Social Media Event Templates • Rose City Rollers",
    link: "/work/rose-city-rollers"
  }, {
    title: "Brand Design: SURRI",
    link: "/work/surr-brand"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary text-center mb-8">
            Canva Pinterest
          </h1>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary text-center mb-8">
            Graphics
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-primary mb-12">
            <span className="text-base">✿ Pinterest Social Media Templates ✿</span>
          </div>

          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed 
            posuere lectus. Morbi ut commodo enim, nec consequat velit.
          </p>

          {/* First Pinterest Graphics Showcase */}
          <div className="mb-16">
            <div className="h-[22rem] md:h-[28rem] flex items-center justify-center overflow-hidden">
              <img
                src={pinterestCollection}
                alt="Pinterest Graphics"
                className="shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pretium 
            est, eget convallis tortor.
          </p>

          {/* Badge and Graphics Grid */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="h-64 md:h-80 overflow-hidden">
                  <img src={canvaPlaceholder} alt="Canva Templates showcase" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-64 md:h-80 overflow-hidden">
                  <img src={pinterestPin2} alt="Pinterest Template" className="w-full h-full object-cover" />
                </div>
                <div className="h-56 md:h-72 overflow-hidden">
                  <img src={pinterestPin3} alt="Pinterest Template" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pretium 
            est, eget convallis tortor. Integer sodales, nulla vel varius placerat.
          </p>

          {/* Three Pinterest Pins Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="h-80 md:h-96 flex items-center justify-center overflow-hidden">
              <img src={pinterestPin1} alt="Pinterest Pin 1" className="w-full h-full object-cover" />
            </div>
            <div className="h-[22rem] md:h-[30rem] flex items-center justify-center overflow-hidden">
              <img src={pinterestPin2} alt="Pinterest Pin 2" className="w-full h-full object-cover" />
            </div>
            <div className="h-80 md:h-96 flex items-center justify-center overflow-hidden">
              <img src={pinterestPin3} alt="Pinterest Pin 3" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Editable Icons Section */}
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary text-center mb-12">
              Editable Icons in Canva
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pretium 
              est, eget convallis tortor.
            </p>
            <div className="space-y-8">
              <div className="h-64 md:h-80 flex items-center justify-center overflow-hidden">
                <img
                  src={canvaIcons}
                  alt="Icon Set"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-56 md:h-72 flex items-center justify-center overflow-hidden">
                  <img
                    src={templateWithIcons}
                    alt="Template with Icons"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="h-56 md:h-72 flex items-center justify-center overflow-hidden">
                  <img
                    src={canvaIcons}
                    alt="Icon Set detail"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="h-64 md:h-80 flex items-center justify-center overflow-hidden">
                <img
                  src={templateWithIcons}
                  alt="Template with Icons detail"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* See Also Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8">See also</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {seeAlsoProjects.map((project, index) => <div key={index} className="bg-[#FFE8E0] p-8 h-64 flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <Link to={project.link}>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit">
                      Read More →
                    </Button>
                  </Link>
                </div>)}
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
    </div>;
};
export default PinterestGraphics;