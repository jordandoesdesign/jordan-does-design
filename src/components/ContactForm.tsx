import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
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
  );
};
export default ContactForm;