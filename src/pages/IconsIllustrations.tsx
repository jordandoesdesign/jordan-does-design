import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import illustrationItems from "@/assets/illustration-items.png";
import lasagnaIllustration from "@/assets/lasagna-illustration.png";

const IconsIllustrations = () => {
  const seeAlsoProjects = [
    { title: "Canva Template Design", link: "/work/canva-templates" },
    { title: "Canva Pinterest Graphics", link: "/work/pinterest-graphics" },
    { title: "Brand Design: SURRI", link: "/work/surr-brand" }
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed 
            posuere lectus. Morbi ut commodo enim, nec consequat velit. Proin a.
          </p>

          {/* First Illustration Grid */}
          <div className="mb-16">
            <img src={illustrationItems} alt="Illustration Items" className="w-full max-w-2xl mx-auto rounded-3xl shadow-lg mb-8" />
          </div>

          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pretium 
            est, eget convallis tortor. Integer sodales, nulla vel varius placerat.
          </p>

          {/* Lasagna Illustration Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img src={lasagnaIllustration} alt="Lasagna Illustration" className="rounded-3xl shadow-lg" />
              <div className="space-y-6">
                <div className="bg-muted rounded-3xl h-40 flex items-center justify-center">
                  <span className="text-muted-foreground">Ice Cream Illustration</span>
                </div>
                <div className="bg-muted rounded-3xl h-40 flex items-center justify-center">
                  <span className="text-muted-foreground">Character Sketches</span>
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
            <div className="bg-muted rounded-3xl h-80 flex items-center justify-center">
              <span className="text-muted-foreground">Pattern 1</span>
            </div>
            <div className="bg-muted rounded-3xl h-80 flex items-center justify-center">
              <span className="text-muted-foreground">Pattern 2</span>
            </div>
            <div className="bg-muted rounded-3xl h-80 flex items-center justify-center">
              <span className="text-muted-foreground">Pattern 3</span>
            </div>
          </div>

          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pretium 
            est, eget convallis tortor. Integer sodales, nulla vel varius placerat.
          </p>

          {/* Large Illustration Showcase */}
          <div className="mb-24">
            <div className="bg-background rounded-3xl border-2 border-muted p-12 flex items-center justify-center min-h-96">
              <img src={illustrationItems} alt="Full Illustration Set" className="w-full max-w-3xl rounded-2xl" />
            </div>
          </div>

          <p className="text-center text-muted-foreground mb-24 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pretium 
            est, eget convallis tortor. Integer sodales, nulla vel varius placerat.
          </p>

          {/* See Also Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8">See also</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {seeAlsoProjects.map((project, index) => (
                <div key={index} className="bg-[#FFE8E0] rounded-3xl p-8 h-64 flex flex-col justify-between">
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
