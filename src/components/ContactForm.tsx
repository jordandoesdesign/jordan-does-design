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
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-12">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
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

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <svg className="w-full max-w-md h-auto" viewBox="0 0 400 400" fill="none">
              {/* Star burst background */}
              <path d="M200 100 L220 180 L300 200 L220 220 L200 300 L180 220 L100 200 L180 180 Z" fill="hsl(var(--secondary))" opacity="0.8"/>
              {/* Pencil body */}
              <rect x="120" y="150" width="160" height="100" rx="15" fill="#333" stroke="#000" strokeWidth="3"/>
              <rect x="120" y="150" width="160" height="20" rx="5" fill="hsl(var(--secondary))"/>
              {/* Pencil tip */}
              <path d="M280 200 L320 200 L300 230 Z" fill="#FFD4CC" stroke="#000" strokeWidth="2"/>
              <path d="M300 230 L310 240 L290 240 Z" fill="#333"/>
              {/* Details */}
              <line x1="130" y1="190" x2="270" y2="190" stroke="#000" strokeWidth="2"/>
              <line x1="130" y1="210" x2="270" y2="210" stroke="#000" strokeWidth="2"/>
              <line x1="130" y1="230" x2="270" y2="230" stroke="#000" strokeWidth="2"/>
              {/* Action lines */}
              <line x1="80" y1="180" x2="110" y2="195" stroke="#333" strokeWidth="2"/>
              <line x1="85" y1="210" x2="110" y2="210" stroke="#333" strokeWidth="2"/>
              <line x1="80" y1="240" x2="110" y2="225" stroke="#333" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
