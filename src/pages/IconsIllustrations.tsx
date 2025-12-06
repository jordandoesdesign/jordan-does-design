import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
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
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary text-center mb-12">
            Illustration
          </h1>

          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed 
            posuere lectus. Morbi ut commodo enim, nec consequat velit. Proin a.
          </p>

          {/* First Illustration Grid */}
          <div className="mb-16">
            <img src={illustrationItems} alt="Illustration Items" className="w-full max-w-2xl mx-auto shadow-lg mb-8" />
          </div>

          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pretium 
            est, eget convallis tortor. Integer sodales, nulla vel varius placerat.
          </p>

          {/* Lasagna Illustration Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="max-w-md mx-auto">
                <img
                  src={lasagnaIllustration}
                  alt="Lasagna Illustration"
                  className="shadow-lg w-full h-auto"
                />
              </div>
              <div className="space-y-6">
                <div className="h-52 md:h-56 flex items-center justify-center overflow-hidden">
                  <img src={iceCreamIllustration} alt="Ice Cream Illustration" className="w-full h-full object-contain" />
                </div>
                <div className="h-52 md:h-56 flex items-center justify-center overflow-hidden">
                  <img src={characterSketches} alt="Character Sketches" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pretium 
            est, eget convallis tortor. Integer sodales, nulla vel varius placerat.
          </p>

          {/* Pattern Designs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="h-80 flex items-center justify-center overflow-hidden">
              
            </div>
          <div className="h-[560px] md:h-[56rem] flex items-center justify-center overflow-hidden">
              <img src={pattern2} alt="Pattern 2" className="w-full h-full object-contain" />
            </div>
            <div className="h-80 flex items-center justify-center overflow-hidden">
              
            </div>
          </div>

          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pretium 
            est, eget convallis tortor. Integer sodales, nulla vel varius placerat.
          </p>

          {/* Large Illustration Showcase */}
          <div className="mb-24">
            
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
export default IconsIllustrations;