import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
const About = () => {
  const services = " ✿ Logo Designs ✿ Brochures ✿ Social Media Templates ✿ Canva Templates ✿ eBooks ✿ & More! ";
  return <div className="min-h-screen">
      <Navigation />
      
      {/* About Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-sm h-80 bg-muted rounded-3xl flex items-center justify-center">
                <span className="text-muted-foreground text-lg">Image Placeholder</span>
              </div>
            </div>

            {/* Text Content */}
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-primary mb-8">
                About
              </h1>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Hi! I'm a digital designer in Portland, OR. I make Logos, Social Campaigns, and Canva templates so that small business owners can connect with their audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Marquee */}
      

      {/* Decorative Blobs */}
      <div className="relative px-6 mb-16">
        <div className="container mx-auto">
          
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm />
      
      <Footer />
    </div>;
};
export default About;