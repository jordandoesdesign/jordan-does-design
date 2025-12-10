import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import canvaMealPlan from "@/assets/canva-meal-plan.png";
import mealPlanTemplate from "@/assets/meal-plan-template.png";
import pinterestPin1 from "@/assets/pinterest-pin-1.png";
import pinterestPin2 from "@/assets/pinterest-pin-2.png";
import pinterestPin3 from "@/assets/pinterest-pin-3.png";
import pinterestExtra1 from "@/assets/pinterest-extra-1.png";
const CanvaTemplates = () => {
  const seeAlsoProjects = [{
    title: "Logo Design & Brand Design",
    link: "/work/logo-designs"
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
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary text-center mb-4">
            Canva
          </h1>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary text-center mb-8">
            Template Design
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-primary mb-12">
            <span className="text-base">✿  Weekly Meal Plans   ✿</span>
            <span className="text-base">Pinterest Templates  ✿</span>
          </div>

          

          {/* Main Template Image */}
          <div className="mb-16">
            <img src={canvaMealPlan} alt="Weekly Meal Plan Template" className="w-full max-w-2xl mx-auto shadow-lg" />
          </div>

          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">I love desiging tools and templates that make it easier for small business owners and content creators to share their ideas and generate content they are excited about.                              

  
        </p>

          {/* Template Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="h-80 md:h-[30rem] flex items-center justify-center overflow-hidden">
              <img alt="Weekly Meal Plan Template" className="w-full h-full object-contain" src="/lovable-uploads/b18073d5-29a4-4d84-ac73-85ba82cb4638.png" />
            </div>
            <div className="bg-background border-primary p-8 border-0">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">About</h3>
              <p className="text-muted-foreground">The creator, foodwithfeeling.com, loves to create and share weekly meal plans with followers. By creating editable templates in Canva, the meal plan and shopping list is easy to update and the new content can easily be generated every week.  </p>
            </div>
          </div>

          {/* Pinterest Gallery Layout */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="space-y-6">
                <div className="h-48 md:h-[18rem] flex items-center justify-center overflow-hidden">
                  <img alt="Pinterest template detail" src="/lovable-uploads/67a3780e-1470-4173-ae16-5065e2678c17.png" className="w-full h-full object-scale-down" />
                </div>
                <div className="h-64 md:h-[22rem] flex items-center justify-center overflow-hidden">
                  <img alt="Pinterest template layout" className="w-full h-full object-contain" src="/lovable-uploads/73d84817-27a4-432b-b2d2-5f83798612ab.png" />
                </div>
              </div>
              <div className="md:col-span-2 h-80 md:h-[28rem] flex items-center justify-center overflow-hidden">
                <img alt="Pinterest template collage" className="w-full h-full object-contain" src="/lovable-uploads/f29e482c-bd8c-457d-87bb-2e3e2eac086a.png" />
              </div>
            </div>
          </div>

          {/* Additional Templates Section */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary text-center mb-12">
              Pinterest Templates in Canva
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center md:justify-center md:mx-auto">
              <div className="w-full md:w-64 h-64 md:h-[32rem] flex items-center justify-center overflow-hidden">
                <img src={pinterestPin1} alt="Pinterest Pin 1" className="w-full h-full object-contain" />
              </div>
              <div className="w-full md:w-64 space-y-4">
                <div className="h-64 md:h-[32rem] flex items-center justify-center overflow-hidden">
                  <img src={pinterestPin2} alt="Pinterest Pin 2" className="w-full h-full object-contain" />
                </div>
                <div className="h-64 md:h-[32rem] flex items-center justify-center overflow-hidden">
                  <img alt="Additional Pinterest template in Canva" className="w-full h-full object-contain" src="/lovable-uploads/7a8bc8a7-66fe-4d3a-aa22-36d41b14ea1f.png" />
                </div>
              </div>
              <div className="w-full md:w-64 h-64 md:h-[32rem] flex items-center justify-center overflow-hidden">
                <img src={pinterestPin3} alt="Pinterest Pin 3" className="w-full h-full object-contain" />
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
export default CanvaTemplates;