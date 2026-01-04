import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import SeeAlsoSection from "@/components/SeeAlsoSection";
import surriLogo from "@/assets/surri-logo.png";
import surriTagMockup from "@/assets/surri-tag-mockup.png";
import surriBagMockup from "@/assets/surri-bag-mockup.png";
import surriExtra1 from "@/assets/surri-extra-1.png";
import surriExtra2 from "@/assets/surri-extra-2.png";
import surriExtra3 from "@/assets/surri-extra-3.png";
import surriExtra4 from "@/assets/surri-extra-4.png";
const SurrBrand = () => {
  const seeAlsoProjects = [{
    title: "Logo Design & Brand Design",
    link: "/work/logo-designs"
  }, {
    title: "Canva Template Design",
    link: "/work/canva-templates"
  }, {
    title: "Icons & Illustrations",
    link: "/work/icons-illustrations"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-primary text-center mb-8 leading-tight">
            Brand Design •<br />SURRI
          </h1>

          <div className="flex justify-center text-primary mb-12">
            {/* Desktop */}
            <span className="hidden md:block text-base text-center">✿ Logo Design ✿ Brand Design ✿ Brand Style Guides ✿</span>
            {/* Mobile/Tablet */}
            <div className="flex flex-col items-center md:hidden text-sm">
              <span>✿ Logo Design</span>
              <span>✿ Brand Design</span>
              <span>✿ Brand Style Guides</span>
            </div>
          </div>

          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            I love designing logos and creating brands that resonate with people. With a background in digital marketing, I have experience crafting brands and working print and digital brand campaigns.                                                                    
          </p>

          {/* Image Story 1: Two stacked large images */}
          <div className="space-y-3 md:space-y-8 mb-16">
            <div className="w-full max-w-xl md:max-w-2xl mx-auto overflow-hidden border border-muted rounded-lg">
              <img src={surriExtra1} alt="SURRI 1207 brand packaging mockup" loading="lazy" className="w-full h-full object-scale-down" />
            </div>
            <div className="w-full max-w-xl md:max-w-2xl mx-auto overflow-hidden border border-muted rounded-lg">
              <img alt="SURRI 1207 detail tag mockup" loading="lazy" src="/lovable-uploads/a17e632e-ad1b-4d90-8758-4d2f61eadfe7.png" className="w-full h-full object-scale-down" />
            </div>
          </div>

          {/* Supporting Text 1 */}
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Every logo design project begins with an interview so that I can gain insights about your audience and learn more about your industry.                                                                         
          </p>

          {/* Image Story 2: Two stacked large images */}
          <div className="space-y-3 md:space-y-8 mb-16">
            <div className="w-full max-w-3xl mx-auto overflow-hidden border border-muted rounded-lg">
              <img alt="SURRI 1207 primary logo" className="w-full h-full object-contain" loading="lazy" src="/lovable-uploads/04ddca21-5b80-4f14-aec7-ed0cc1ba6961.png" />
            </div>
            <div className="w-full max-w-3xl mx-auto overflow-hidden border border-muted rounded-lg">
              <img src={surriExtra3} alt="SURRI 1207 lifestyle brand photograph" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          {/* Supporting Text 2 */}
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            SURRI handmade goods wanted a brand that was innovative, approachable, and conveyed precision. We created a moodboard as a starting place to establish a brand voice and color aesthetic.  

          </p>

          {/* Trio of smaller photos */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
              <div className="h-64 flex items-center justify-center overflow-hidden border border-muted rounded-lg">
                <img alt="SURRI 1207 tag close-up" loading="lazy" className="w-full h-full object-contain" src="/lovable-uploads/0c1a5467-6796-45ee-8b75-227cab146cb5.png" />
              </div>
              <div className="h-64 flex items-center justify-center overflow-hidden border border-muted rounded-lg">
                <img alt="SURRI 1207 accessories flatlay" loading="lazy" className="w-full h-full object-contain" src="/lovable-uploads/e040a86f-3ec6-4dc0-9f63-15d3e37baa7b.png" />
              </div>
              <div className="h-64 flex items-center justify-center overflow-hidden border border-muted rounded-lg">
                <img alt="SURRI 1207 brand detail crop" loading="lazy" src="/lovable-uploads/25f3532e-0df0-4b32-aace-109a27e036f7.png" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Supporting Text 3 */}
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            After the logo is established, the rest of the brand elements are created. Brand guidelines are established so that your brand can stay consistent and recognizable.  

          </p>

          {/* Final large photo */}
          <div className="mb-24">
            <div className="h-80 md:h-96 flex items-center justify-center overflow-hidden border border-muted rounded-lg">
              <img alt="SURRI 1207 hero brand photograph" loading="lazy" className="w-full h-full object-contain" src="/lovable-uploads/aca1c764-7975-4368-b509-5fb21ef27199.png" />
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
export default SurrBrand;