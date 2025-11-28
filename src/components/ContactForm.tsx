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
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // For now, just show a toast. Database integration can be added later.
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
  return <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-12">
              Contact Me
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input type="text" placeholder="Your Name" value={formData.name} onChange={e => setFormData({
              ...formData,
              name: e.target.value
            })} required className="border border-primary placeholder:text-primary/60 text-primary focus:ring-primary" />
              
              <Input type="email" placeholder="Your Email" value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} required className="border border-primary placeholder:text-primary/60 text-primary focus:ring-primary" />
              
              <Textarea placeholder="Your Message" value={formData.message} onChange={e => setFormData({
              ...formData,
              message: e.target.value
            })} required rows={6} className="border border-primary placeholder:text-primary/60 text-primary focus:ring-primary resize-y" />
              
              <Button type="submit" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md h-96 bg-muted rounded-3xl flex items-center justify-center">
              <span className="text-muted-foreground text-lg">Image Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;