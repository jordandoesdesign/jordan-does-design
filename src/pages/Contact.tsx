import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!"
    });
    
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6 min-h-screen flex items-center">
        <div className="container mx-auto max-w-2xl relative">
          {/* Decorative blobs */}
          <div className="absolute -left-32 top-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute -right-32 bottom-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-primary text-center mb-8">
              Contact
            </h1>
            
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed 
              posuere lectus. Morbi ut commodo enim, nec consequat velit. Proin a.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
                className="border border-primary placeholder:text-primary/60 text-primary focus:ring-primary h-14"
              />
              
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
                className="border border-primary placeholder:text-primary/60 text-primary focus:ring-primary h-14"
              />
              
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="border border-primary placeholder:text-primary/60 text-primary focus:ring-primary resize-y"
              />
              
              <Button
                type="submit"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
