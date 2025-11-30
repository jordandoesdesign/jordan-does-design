import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {

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

            <iframe 
              style={{ border: 'none', width: '100%' }} 
              height="800" 
              src="https://www.supaform.io/forms/contact-me?embedded=true"
              title="Contact Form"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
