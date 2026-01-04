import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import SeeAlsoSection from "@/components/SeeAlsoSection";
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
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-primary text-center mb-8 leading-tight">
            Canva Pinterest<br />Templates
          </h1>
          
          
          <div className="flex justify-center text-primary mb-12">
            {/* Desktop */}
            <span className="hidden md:block text-base text-center">✿ Pinterest Templates ✿ Social Media Templates ✿ Canva Templates ✿</span>
            {/* Mobile/Tablet */}
            <div className="flex flex-col items-center md:hidden text-sm">
              <span>✿ Pinterest Templates</span>
              <span>✿ Social Media Templates</span>
              <span>✿ Canva Templates</span>
            </div>
          </div>

          

          {/* First Pinterest Graphics Showcase */}
          <div className="mb-16">
            <div className="h-[22rem] md:h-[28rem] flex items-center justify-center overflow-hidden">
              <img src={pinterestCollection} alt="Collection of Pinterest pin templates featuring food photography and recipe graphics for Unbound Wellness" className="shadow-lg w-full h-full object-scale-down" />
            </div>
          </div>

          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            I love to work with content creators to help create templates that match your brand and help you share your content.  
 

          </p>

          {/* Badge and Graphics Grid */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="h-64 md:h-80 overflow-hidden">
                  <img alt="Canva template editor showing Pinterest pin designs with recipe content and brand elements" src="/lovable-uploads/6613963f-319a-41d4-bb81-2abc5050d45a.png" className="w-full h-full object-scale-down" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-64 md:h-80 overflow-hidden">
                  <img alt="Pinterest pin template featuring healthy recipe with avocado toast and fresh ingredients" src="/lovable-uploads/6ed0a451-b838-49d1-a183-dff321b7863a.png" className="w-full h-full object-contain" />
                </div>
                <div className="h-56 md:h-72 overflow-hidden">
                  <img alt="Pinterest pin template with colorful food photography and minimalist typography" src="/lovable-uploads/dfab7acb-8522-4723-a63d-127a6cec718f.png" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Michelle at <a href="https://unboundwellness.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Unbound Wellness</a>, is a content creator who shares healthy, anti-inflammatory recipes. We worked together to create these editable templates in Canva. Now she can quickly create content and keep a fun, consistent look on <a href="https://www.pinterest.com/unboundwellness/_created/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Pinterest</a>.
          </p>

          {/* Three Pinterest Pins Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="h-80 md:h-96 flex items-center justify-center overflow-hidden">
              <img alt="Pinterest pin design featuring a chicken recipe with warm earth tone color palette" src="/lovable-uploads/68864147-8055-43f3-ae5f-72c9f8310288.png" className="w-full h-full object-contain" />
            </div>
            <div className="h-[22rem] md:h-[30rem] flex items-center justify-center overflow-hidden">
              <img alt="Tall Pinterest pin template showcasing healthy breakfast bowl recipe with vibrant ingredients" className="w-full h-full object-contain" src="/lovable-uploads/215fba7a-b00f-4069-8c92-badd7d87bd72.png" />
            </div>
            <div className="h-80 md:h-96 flex items-center justify-center overflow-hidden">
              <img alt="Pinterest pin design for dessert recipe with elegant typography and food styling" className="w-full h-full object-contain" src="/lovable-uploads/49934b99-3677-4a52-815c-35b4d3e1a0f3.png" />
            </div>
          </div>

          {/* Editable Icons Section */}
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary text-center mb-12">
              Editable Icons in Canva
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              We created a custom icon set in Canva that matches the brand. This is a fun element that can be added to any of the templates and makes the images more engaging to the audience as they scroll through the social platform. 
            </p>
            <div className="space-y-8">
              <div className="h-64 md:h-80 flex items-center justify-center overflow-hidden">
                <img src={canvaIcons} alt="Custom hand-drawn icon set featuring food and lifestyle illustrations for Pinterest templates" className="w-full h-full object-contain" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-56 md:h-72 flex items-center justify-center overflow-hidden">
                  <img src={templateWithIcons} alt="Pinterest template design showing custom icons integrated with recipe content" className="w-full h-full object-contain" />
                </div>
                <div className="h-56 md:h-72 flex items-center justify-center overflow-hidden">
                  <img alt="Close-up detail of custom illustrated icons showing food and wellness themed graphics" className="w-full h-full object-contain" src="/lovable-uploads/b9825e9e-65aa-4851-926e-ac9dad7f3fb2.png" />
                </div>
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
export default PinterestGraphics;