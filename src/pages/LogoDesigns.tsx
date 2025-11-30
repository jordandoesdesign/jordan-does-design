import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
const LogoDesigns = () => {
  const initialLogos = [{
    name: "Greenroom",
    client: "Local Frozen Treats + More",
    bg: "bg-[#E8F4E8]"
  }, {
    name: "SOLANA",
    client: "Medspa",
    bg: "bg-[#1B2B5E]"
  }, {
    name: "Peralta",
    client: "Mexican Restaurant",
    bg: "bg-[#F5B052]"
  }, {
    name: "Frugal Feasts",
    client: "Recipe Blog",
    bg: "bg-[#F0F4E8]"
  }, {
    name: "Better Together",
    client: "Community Market",
    bg: "bg-[#E8D8F0]"
  }, {
    name: "Boulevard",
    client: "Fashion Boutique",
    bg: "bg-[#E0F4F4]"
  }, {
    name: "The Red Wolf Inn",
    client: "Bed & Breakfast",
    bg: "bg-background"
  }, {
    name: "MUTCH",
    client: "Sports Brand",
    bg: "bg-[#F25C54]"
  }, {
    name: "Sushi Bar",
    client: "Local Restaurant",
    bg: "bg-[#B8C77E]"
  }, {
    name: "Fast Lab",
    client: "Tech Startup",
    bg: "bg-[#D4EFEF]"
  }];
  const seeAlsoProjects = [{
    title: "Social Media graphics you love to see",
    category: "Social Media Templates"
  }, {
    title: "Beautiful and customizable Canva ebooks",
    category: "Canva ebook Templates"
  }, {
    title: "Designs with a focus on brand and design",
    category: "SURR! Brand Design"
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
            {initialLogos.map((logo, index) => <div key={index} className="space-y-4">
                <div className={`${logo.bg} rounded-3xl h-64 flex items-center justify-center p-8`}>
                  <span className="text-foreground text-xl font-semibold">{logo.name}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Fast Lab</p>
                  <p className="text-sm text-muted-foreground">{logo.client}</p>
                </div>
              </div>)}
          </div>

          {/* Greenroom Case Study */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 flex items-center justify-center gap-2">Greenroom</h2>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-primary">
                <span className="text-base">Logo Design</span>
                <span className="text-base">✿</span>
                <span className="text-base">Brand Design</span>
                <span className="text-base">✿</span>
                <span className="text-base">Brand Design Brand Style Guides</span>
              </div>
            </div>

            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pretium 
              est, eget convallis tortor. Integer sodales, nulla vel varius placerat.
            </p>

            {/* Greenroom Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-[#1F3A2E] rounded-3xl h-80 flex items-center justify-center">
                <span className="text-[#E8F4E8] text-xl font-semibold">Greenroom Logo</span>
              </div>
              <div className="bg-[#E8F4E8] rounded-3xl h-80 flex items-center justify-center">
                <span className="text-[#1F3A2E] text-xl font-semibold">T-Shirt Mockup</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-3xl h-64 flex items-center justify-center border-2 border-muted">
                <span className="text-muted-foreground">Decorative Elements</span>
              </div>
              <div className="bg-background rounded-3xl h-64 flex items-center justify-center border-2 border-muted">
                <span className="text-muted-foreground">Color Palette</span>
              </div>
              <div className="bg-[#F5B052] rounded-3xl h-64 flex items-center justify-center">
                <span className="text-foreground">Brand Assets</span>
              </div>
            </div>
          </div>

          {/* Peralta Case Study */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Peralta</h2>
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

            {/* Peralta Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-background rounded-3xl h-80 flex items-center justify-center border-2 border-muted p-8">
                
              </div>
              <div className="bg-gradient-to-b from-[#8B6B47] to-[#2C1810] rounded-3xl h-80"></div>
            </div>

            <div className="bg-[#F5B052] rounded-3xl h-96 flex items-center justify-center">
              <span className="text-foreground text-xl">Website Mockup</span>
            </div>
          </div>

          {/* See Also Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8">See also</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {seeAlsoProjects.map((project, index) => <div key={index} className="bg-[#FFE8E0] rounded-3xl p-8 h-64 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  </div>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit">
                    See more
                  </Button>
                </div>)}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-16">
            
            
            
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default LogoDesigns;