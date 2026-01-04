import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import SeeAlsoSection from "@/components/SeeAlsoSection";
import greenroomLogo from "@/assets/greenroom-logo.png";
import logoGrid from "@/assets/logo-grid.png";
import greenroomExtra1 from "@/assets/greenroom-extra-1.png";
import peraltaExtra1 from "@/assets/peralta-extra-1.png";
import peraltaExtra2 from "@/assets/peralta-extra-2.png";
import peraltaExtra3 from "@/assets/peralta-extra-3.png";
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
  const initialLogos = [{
    name: "Greenroom",
    client: "Flower Delivery Service",
    image: logoGreenroom
  }, {
    name: "Soluna",
    client: "Luxury Fashion",
    image: logoSoluna
  }, {
    name: "Peralta",
    client: "Luxury Fashion",
    image: logoPeralta
  }, {
    name: "Frugal Feasts",
    client: "Food & Lifestyle",
    image: logoFrugalFeasts
  }, {
    name: "Hometown Throwdown",
    client: "Roller Derby Tournament",
    image: logoBetterTogether
  }, {
    name: "Boulevard Boutique",
    client: "Luxury Fashion",
    image: logoBoulevard
  }, {
    name: "Little Red Writing",
    client: "Content Writing",
    image: logoRedWolfInn
  }, {
    name: "Mutch",
    client: "Fitness & Personal Training",
    image: logoMutch
  }, {
    name: "Edo",
    client: "Sushi Bar",
    image: logoSushiBar
  }, {
    name: "Fast Lab",
    client: "Fitness & Mobility Training",
    image: logoFastLab
  }];
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
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto pt-[20px]">
            I love designing new logos as well as helping brands who want to update their existing logos. I specialize in brand design for small business owners and content creators in the lifestyle, food, and wellness industries.



          </p>

          {/* Initial Logo Grid */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6 max-w-5xl mx-auto justify-items-center">
              {initialLogos.map((logo, index) => <div key={index} className="space-y-4 flex flex-col items-center">
                  <div className="w-[280px] md:w-[320px] lg:w-[300px] h-[280px] md:h-[320px] lg:h-[300px] overflow-hidden">
                    <img src={logo.image} alt={`${logo.name} logo`} className="w-full h-full object-contain" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-primary">{logo.name}</p>
                    <p className="text-sm text-muted-foreground">{logo.client}</p>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Greenroom Case Study */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 flex items-center justify-center gap-2">
                Greenroom
              </h2>
              <div className="flex justify-center text-primary mb-2">
                <span className="text-sm md:text-base text-center">✿ Logo Design ✿ Brand Design ✿ Brand Style Guides ✿</span>
              </div>
            </div>

            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              The logo is just the first step in creating a full visual identity. I design the full identity and provide you with a set of guidelines that help your brand stay consistent, recognizable, and easy to use.
            </p>

            {/* Greenroom Images */}
            <div className="space-y-8">
              <div className="h-96 md:h-[28rem] flex items-center justify-center overflow-hidden">
                <img src={greenroomExtra1} alt="Greenroom brand collateral" className="w-full h-full object-contain" />
              </div>
              <div className="h-96 md:h-[28rem] flex items-center justify-center overflow-hidden">
                <img src={greenroomLogo} alt="Greenroom brand artwork" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Peralta Case Study */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                Peralta
              </h2>
              <div className="flex justify-center text-primary mb-2">
                <span className="text-sm md:text-base text-center">✿ Logo Design ✿ Brand Design ✿</span>
              </div>
            </div>

            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">I love creating brands that feel like a true reflection of the business.  Brand guidelines can help your visuals stay consistent and help you connect with your audience quickly across print and digital channels.</p>

            {/* Peralta Images */}
            <div className="grid grid-cols-2 gap-2 lg:gap-[20px] mb-7">
              <div className="h-56 md:h-96 flex items-center justify-end overflow-hidden">
                <img alt="Peralta brand exploration" className="h-full object-contain border-0" src="/lovable-uploads/419b0cc0-3671-406c-a4ba-7122d57fef60.png" />
              </div>
              <div className="grid grid-rows-2 gap-0 h-56 md:h-96 justify-start">
                <div className="flex items-center justify-start overflow-hidden">
                  <img alt="Peralta brand system exploration" className="h-full object-contain border-0" src="/lovable-uploads/149caba9-efd2-477a-8f87-1504132cf95d.png" />
                </div>
                <div className="flex items-center justify-start overflow-hidden">
                  <img alt="Peralta brand mockup" src="/lovable-uploads/76b0f545-1f1a-45ed-a393-80f2542b1289.png" className="h-full object-contain border-0" />
                </div>
              </div>
            </div>

            <div className="h-72 md:h-80 flex items-center justify-center overflow-hidden">
              <img src={peraltaExtra3} alt="Peralta brand applications" className="w-full h-full object-contain border-0" />
            </div>
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
export default LogoDesigns;
