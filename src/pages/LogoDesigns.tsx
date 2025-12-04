import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import greenroomLogo from "@/assets/greenroom-logo.png";
import logoGrid from "@/assets/logo-grid.png";
import logoGreenroom from "@/assets/assets_Logo-Greenroom.png";
import logoSoluna from "@/assets/assets_Logo-Soluna.png";
import logoPeralta from "@/assets/assets_Logo-Peralta.png";
import logoFrugalFeasts from "@/assets/assets_Logo-FrugalFeasts.png";
import logoBetterTogether from "@/assets/assets_Logo-httd.png";
import logoBoulevard from "@/assets/assets_Logo-Blvd.png";
import logoRedWolfInn from "@/assets/assets_Logo-LRW.png";
import logoMutch from "@/assets/assets_Logo-LM.png";
import logoSushiBar from "@/assets/assets_Logo-Edo.png";
import logoFastLab from "@/assets/assets_Logo-FastLab.png";
const LogoDesigns = () => {
  const initialLogos = [
    {
      name: "Greenroom",
      client: "Flower Delivery Service",
      image: logoGreenroom,
    },
    {
      name: "Soluna",
      client: "Luxury Fashion",
      image: logoSoluna,
    },
    {
      name: "Peralta",
      client: "Luxury Fashion",
      image: logoPeralta,
    },
    {
      name: "Frugal Feasts",
      client: "Food & Lifestyle",
      image: logoFrugalFeasts,
    },
    {
      name: "Hometown Throwdown",
      client: "Roller Derby Tournament",
      image: logoBetterTogether,
    },
    {
      name: "Boulevard Boutique",
      client: "Luxury Fashion",
      image: logoBoulevard,
    },
    {
      name: "Little Red Writing",
      client: "Content Writing",
      image: logoRedWolfInn,
    },
    {
      name: "Mutch",
      client: "Fitness & Personal Training",
      image: logoMutch,
    },
    {
      name: "Edo",
      client: "Sushi Bar",
      image: logoSushiBar,
    },
    {
      name: "Fast Lab",
      client: "Fitness & Mobility Training",
      image: logoFastLab,
    },
  ];
  const seeAlsoProjects = [{
    title: "Canva Template Design",
    link: "/work/canva-templates"
  }, {
    title: "Social Media Event Templates • Rose City Rollers",
    link: "/work/rose-city-rollers"
  }, {
    title: "Icons & Illustrations",
    link: "/work/icons-illustrations"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary text-center mb-4">
            Logo Design
          </h1>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed posuere lectus. 
            Morbi ut commodo enim, nec consequat velit. Proin a.
          </p>

          {/* Initial Logo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {initialLogos.map((logo, index) => (
              <div key={index} className="space-y-4 flex flex-col items-start">
                <div className="w-full max-w-xs md:max-w-sm lg:max-w-[18rem] overflow-hidden">
                  <AspectRatio ratio={1}>
                    <img
                      src={logo.image}
                      alt={`${logo.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </AspectRatio>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">{logo.name}</p>
                  <p className="text-sm text-muted-foreground">{logo.client}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Greenroom Case Study */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 flex items-center justify-center gap-2">
                Greenroom
              </h2>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-primary">
                <span className="text-base">Logo Design</span>
                <span className="text-base">✿</span>
                <span className="text-base">Brand Design</span>
                <span className="text-base">✿</span>
                <span className="text-base">Brand Style Guides</span>
              </div>
            </div>

            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pretium
              est, eget convallis tortor. Integer sodales, nulla vel varius placerat.
            </p>

            {/* Greenroom Images */}
            <div className="space-y-8">
              <div className="h-80 flex items-center justify-center overflow-hidden border-2 border-muted">
                <img
                  src={logoGrid}
                  alt="Greenroom brand collateral"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-80 flex items-center justify-center overflow-hidden border-2 border-muted">
                <img
                  src={greenroomLogo}
                  alt="Greenroom brand artwork"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Peralta Case Study */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                Peralta
              </h2>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-primary">
                <span className="text-base">Logo Design</span>
                <span className="text-base">✿</span>
                <span className="text-base">Brand Design</span>
              </div>
            </div>

            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pretium
              est, eget convallis tortor.
            </p>

            {/* Peralta Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="h-80 flex items-center justify-center overflow-hidden border-2 border-muted">
                <img
                  src={logoPeralta}
                  alt="Peralta primary logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="grid grid-rows-2 gap-4 h-80">
                <div className="flex items-center justify-center overflow-hidden border-2 border-muted">
                  <img
                    src={logoGrid}
                    alt="Peralta brand system exploration"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-center overflow-hidden border-2 border-muted">
                  <img
                    alt="Peralta brand mockup"
                    className="w-full h-full object-contain"
                    src="/lovable-uploads/76b0f545-1f1a-45ed-a393-80f2542b1289.png"
                  />
                </div>
              </div>
            </div>

            <div className="h-96 flex items-center justify-center overflow-hidden border-2 border-muted">
              <img
                src={logoGrid}
                alt="Peralta brand applications"
                className="w-full h-full object-contain"
              />
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
export default LogoDesigns;