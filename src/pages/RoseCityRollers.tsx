import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import SeeAlsoSection from "@/components/SeeAlsoSection";
import roseCityRollers from "@/assets/rose-city-rollers.png";
import rollersEventPoster from "@/assets/rollers-event-poster.png";
import rollersBracket from "@/assets/rollers-bracket.png";
import rollersBootcamp from "@/assets/rollers-bootcamp.png";
import rollersExtra1 from "@/assets/rollers-extra-1.png";
import rollersExtra2 from "@/assets/rollers-extra-2.png";
import rollersExtra3 from "@/assets/rollers-extra-3.png";
import rollersExtra4 from "@/assets/rollers-extra-4.png";
import socialMediaDerbyDaze from "@/assets/assets_SocialMediaDerbyDaze.png";
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

          

          {/* Event Logo Section */}
          <div className="mb-24">
            <div className="mb-12">
              <img alt="Rose City Rollers Event Graphics" src="/lovable-uploads/7550ba8e-b778-4e3c-9081-0c247d3fa9b5.png" className="w-full shadow-none object-scale-down" />
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary text-center mb-8">
              Event Logo
            </h2>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary text-center mb-12">
              and Social Media Campaign
            </h2>
            
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Logo design and social graphics for a roller derby tournament
            </p>

            {/* Campaign Assets Grid - Horizontal row on desktop */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
              <div className="h-64 w-full md:w-auto md:h-72 flex items-center justify-center overflow-hidden">
                <img src={rollersEventPoster} alt="Event Logo" className="h-full object-contain" />
              </div>
              <div className="h-64 w-full md:w-auto md:h-72 flex items-center justify-center overflow-hidden">
                <img src={rollersExtra2} alt="Roller derby social post" className="h-full object-contain" />
              </div>
              <div className="h-64 w-full md:w-auto md:h-72 flex items-center justify-center overflow-hidden">
                <img alt="Tournament Bracket" className="h-full object-contain" src="/lovable-uploads/58956fbd-69b0-41e7-bb7d-eace8a360256.png" />
              </div>
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
              Promotional designs to boost sales for a roller derby training event
            </p>

            {/* Bootcamp images - Horizontal row on desktop */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
              <div className="h-64 w-full md:w-auto md:h-72 flex items-center justify-center overflow-hidden">
                <img src={rollersBootcamp} alt="Event Poster" className="h-full object-contain" />
              </div>
              <div className="h-64 w-full md:w-auto md:h-72 flex items-center justify-center overflow-hidden">
                <img src={rollersExtra1} alt="Bootcamp detail badge" className="h-full object-contain" />
              </div>
              <div className="h-64 w-full md:w-auto md:h-72 flex items-center justify-center overflow-hidden">
                <img src={socialMediaDerbyDaze} alt="Derby Daze social media graphic" className="h-full object-contain" />
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
              Social media designs to increase fan engagement and promote ticket sales to a roller derby tournament
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
export default RoseCityRollers;