import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import surriLogo from "@/assets/surri-logo.png";
import surriTagMockup from "@/assets/surri-tag-mockup.png";
import surriBagMockup from "@/assets/surri-bag-mockup.png";

const SurrBrand = () => {
  const seeAlsoProjects = [
    { title: "Logo Design & Brand Design", link: "/work/logo-designs" },
    { title: "Canva Template Design", link: "/work/canva-templates" },
    { title: "Icons & Illustrations", link: "/work/icons-illustrations" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary text-center mb-4">
            Brand Design •
          </h1>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary text-center mb-8">
            SURRI
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-primary mb-12">
            <span className="text-base">✿ Logo Design ✿</span>
            <span className="text-base">Brand Design ✿</span>
            <span className="text-base">Brand Style Guides</span>
          </div>

          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed posuere lectus. 
            Morbi ut commodo enim, nec consequat velit. Proin a lacus leo. Cras facilisis risus purus, 
            non facilisis nibh sollicitudin quis. Sed venenatis justo et elit id.
          </p>

          {/* Brand Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#FFE8E0] h-32"></div>
              <div className="bg-[#F5B052] h-32"></div>
              <div className="bg-[#1B2B5E] h-32"></div>
              <div className="bg-muted h-32"></div>
            </div>
            <div className="border-2 border-primary p-8 flex items-center justify-center">
              <img src={surriLogo} alt="SURRI 1207 Logo" className="w-64 h-64 object-contain" />
            </div>
          </div>

          {/* Circular Logo Display */}
          <div className="mb-16 flex justify-center">
            <div className="rounded-full w-80 h-80 flex items-center justify-center border-2 border-muted">
              <img src={surriLogo} alt="SURRI 1207 Circular Logo" className="w-64 h-64 object-contain" />
            </div>
          </div>

          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pretium 
            est, eget convallis tortor. Integer sodales, nulla vel varius placerat.
          </p>

          {/* Mockup Section */}
          <div className="p-16 mb-16 flex items-center justify-center min-h-96">
            <div className="p-8 max-w-md">
              <img src={surriLogo} alt="Product Mockup" className="w-full h-auto" />
            </div>
          </div>

          {/* Color Palette Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="space-y-4">
              <div className="bg-[#FFB8A8] h-48"></div>
              <p className="text-sm text-muted-foreground text-center">Color 1</p>
            </div>
            <div className="space-y-4">
              <div className="bg-[#5A8C7E] h-48"></div>
              <p className="text-sm text-muted-foreground text-center">Color 2</p>
            </div>
            <div className="space-y-4">
              <div className="bg-[#F5B052] h-48"></div>
              <p className="text-sm text-muted-foreground text-center">Color 3</p>
            </div>
            <div className="space-y-4">
              <div className="bg-[#1B2B5E] h-48"></div>
              <p className="text-sm text-muted-foreground text-center">Color 4</p>
            </div>
          </div>

          {/* Packaging Mockups */}
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary text-center mb-12">
            SURRI 1207
          </h2>
          <p className="text-center text-muted-foreground mb-8">handmade in</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="h-96 flex items-center justify-center overflow-hidden">
              <img src={surriTagMockup} alt="Product Tag Mockup" className="w-full h-full object-cover" />
            </div>
            <div className="h-96 flex items-center justify-center overflow-hidden">
              <img src={surriBagMockup} alt="Shopping Bag Mockup" className="w-full h-full object-cover" />
            </div>
          </div>

          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pretium 
            est, eget convallis tortor. Integer sodales, nulla vel varius placerat.
          </p>

          {/* Price List */}
          <div className="mb-24 flex justify-center">
            <div className="bg-[#FFE8E0] p-12 max-w-md">
              <h3 className="text-2xl font-heading font-bold text-center mb-8">PRICES</h3>
              <div className="space-y-2 text-center">
                <p className="text-muted-foreground">Item pricing list</p>
              </div>
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

export default SurrBrand;
