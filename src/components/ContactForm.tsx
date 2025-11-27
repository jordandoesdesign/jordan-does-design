import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, just show a toast. Database integration can be added later.
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div>
            {/* Decorative blobs */}
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20"></div>
              <div className="w-16 h-16 rounded-full bg-secondary/10"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-12">
              Contact Me
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border-2 border-primary placeholder:text-primary/60 text-primary focus:ring-primary"
              />
              
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-2 border-primary placeholder:text-primary/60 text-primary focus:ring-primary"
              />
              
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="border-2 border-primary placeholder:text-primary/60 text-primary focus:ring-primary resize-none"
              />
              
              <Button 
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Orange star burst */}
              <svg viewBox="0 0 200 200" className="w-64 h-64 md:w-80 md:h-80">
                <path
                  fill="#FD5622"
                  d="M50,10 L61,35 L88,35 L67,52 L77,77 L50,60 L23,77 L33,52 L12,35 L39,35 Z M50,40 L55,55 L70,55 L58,65 L62,80 L50,72 L38,80 L42,65 L30,55 L45,55 Z"
                  transform="translate(50 50) scale(2)"
                />
              </svg>
              
              {/* Pencil illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Pencil body */}
                  <div className="w-32 h-8 bg-secondary rounded-full transform rotate-12"></div>
                  <div className="w-32 h-8 bg-secondary/80 rounded-full transform rotate-12 -mt-4"></div>
                  <div className="w-32 h-8 bg-secondary/60 rounded-full transform rotate-12 -mt-4"></div>
                  
                  {/* Lines decoration */}
                  <div className="absolute -left-12 top-1/2 w-10 h-0.5 bg-foreground transform -translate-y-1/2"></div>
                  <div className="absolute -left-12 top-1/2 w-8 h-0.5 bg-foreground transform -translate-y-1/2 -translate-y-2"></div>
                  <div className="absolute -left-12 top-1/2 w-10 h-0.5 bg-foreground transform -translate-y-1/2 translate-y-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
