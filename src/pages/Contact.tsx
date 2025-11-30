import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6 min-h-screen flex items-center">
        <div className="container mx-auto max-w-2xl relative">
          {/* Decorative blobs */}
          <div className="absolute -left-32 top-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute -right-32 bottom-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-primary mb-8">
              Contact
            </h1>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing together.
            </p>

            <a href="mailto:Jordan@JordanVeirs.com">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
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

export default Contact;
