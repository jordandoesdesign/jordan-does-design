import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import roseCityRollers from "@/assets/rose-city-rollers.png";
import rollersEventPoster from "@/assets/rollers-event-poster.png";
import rollersBracket from "@/assets/rollers-bracket.png";
import rollersBootcamp from "@/assets/rollers-bootcamp.png";
import rollersExtra1 from "@/assets/rollers-extra-1.png";
import rollersExtra2 from "@/assets/rollers-extra-2.png";
import rollersExtra3 from "@/assets/rollers-extra-3.png";
import rollersExtra4 from "@/assets/rollers-extra-4.png";
const RoseCityRollers = () => {
  const seeAlsoProjects = [{
    title: "Canva Pinterest Graphics",
    link: "/work/pinterest-graphics"
  }, {
    title: "Logo Design & Brand Design",
    link: "/work/logo-designs"
  }, {
    title: "Icons & Illustrations",
    link: "/work/icons-illustrations"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary text-center mb-4">
            Social Media Design
          </h1>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary text-center mb-8">
            • Rose City Rollers
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-primary mb-12">
            <span className="text-base">✿ Logo Design ✿</span>
            <span className="text-base">Brand Design ✿</span>
            <span className="text-base">Social Media Campaign ✿</span>
          </div>

          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed posuere lectus. 
            Morbi ut commodo enim, nec consequat velit. Proin a lacus leo.
          </p>

          {/* Event Logo Section */}
          <div className="mb-24">
            <div className="mb-12">
              <img alt="Rose City Rollers Event Graphics" src="/lovable-uploads/6ff60d12-176d-4218-9c41-bcf983339997.png" className="w-full mb-8 object-scale-down shadow-none" />
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary text-center mb-8">
              Event Logo
            </h2>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary text-center mb-12">
              and Social Media Campaign
            </h2>
            
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pretium 
              est, eget convallis tortor. Integer sodales, nulla vel varius placerat.
            </p>

            {/* Campaign Assets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="h-64 flex items-center justify-center overflow-hidden">
                <img src={rollersEventPoster} alt="Event Logo" className="w-full h-full object-contain" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 flex items-center justify-center overflow-hidden">
                  
                </div>
                <div className="h-48 flex items-center justify-center overflow-hidden">
                  <img src={rollersExtra2} alt="Roller derby social post" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            <div className="h-96 mb-16 flex items-center justify-center overflow-hidden">
              <img src={rollersBracket} alt="Tournament Bracket" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Bootcamp Event Section */}
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary text-center mb-12">
              Bootcamp Event
            </h2>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary text-center mb-12">
              Social Media Campaign
            </h2>
            
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pretium 
              est, eget convallis tortor.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="h-80 flex items-center justify-center overflow-hidden">
                <img src={rollersBootcamp} alt="Event Poster" className="w-full h-full object-contain" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-36 flex items-center justify-center overflow-hidden">
                  
                </div>
                <div className="h-36 flex items-center justify-center overflow-hidden">
                  
                </div>
                <div className="h-36 flex items-center justify-center overflow-hidden">
                  
                </div>
                <div className="h-36 flex items-center justify-center overflow-hidden">
                  <img src={rollersExtra1} alt="Bootcamp detail badge" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Tournament Event Section */}
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary text-center mb-12">
              Tournament Event
            </h2>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary text-center mb-12">
              Social Media Campaign
            </h2>
            
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pretium 
              est, eget convallis tortor.
            </p>

            <div className="h-96 mb-8 flex items-center justify-center overflow-hidden">
              <img alt="Tournament Hero Image" src="/lovable-uploads/667dfdf0-3f14-4e61-af27-2acb68e7eecb.png" className="w-full h-full object-contain" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="h-64 flex items-center justify-center overflow-hidden">
                <img src={rollersExtra3} alt="Tournament social graphic" className="w-full h-full object-contain" />
              </div>
              <div className="h-64 flex items-center justify-center overflow-hidden">
                
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
export default RoseCityRollers;